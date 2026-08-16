"use client";

import { TRACKS } from "@/lib/data";

function fmtHMS(ms) {
  const s = Math.floor(Math.max(0, ms) / 1000);
  const hh = String(Math.floor(s / 3600)).padStart(2, "0");
  const mm = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
  const ss = String(s % 60).padStart(2, "0");
  return `${hh}:${mm}:${ss}`;
}

function Dial({ trackColor, pct }) {
  const cx = 100,
    cy = 100,
    r = 88,
    innerR = 72;
  const circumf = 2 * Math.PI * innerR;
  const ticks = [];
  for (let i = 0; i < 60; i++) {
    const major = i % 5 === 0;
    const a = (i / 60) * Math.PI * 2 - Math.PI / 2;
    const r1 = major ? r - 10 : r - 5;
    const x1 = cx + r1 * Math.cos(a);
    const y1 = cy + r1 * Math.sin(a);
    const x2 = cx + r * Math.cos(a);
    const y2 = cy + r * Math.sin(a);
    ticks.push(
      <line
        key={i}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="#2e3542"
        strokeWidth={major ? 2 : 1}
      />
    );
  }
  return (
    <svg viewBox="0 0 200 200" width={200} height={200}>
      <circle cx={cx} cy={cy} r={94} fill="#1b1f27" stroke="#2e3542" strokeWidth={1} />
      {ticks}
      <circle
        cx={cx}
        cy={cy}
        r={innerR}
        fill="none"
        stroke={trackColor}
        strokeWidth={4}
        strokeDasharray={`${pct * circumf} ${circumf}`}
        strokeLinecap="round"
        transform={`rotate(-90 ${cx} ${cy})`}
      />
    </svg>
  );
}

export default function TimerPanel({
  timer,
  elapsedMs,
  targetMs,
  onSelectTrack,
  onSelectMode,
  onCustomMinutesChange,
  onSoundToggle,
  onStartPause,
  onReset,
  onLog,
  message,
}) {
  const isCountdown = targetMs !== null;
  const shown = isCountdown ? targetMs - elapsedMs : elapsedMs;
  const pct = isCountdown
    ? Math.max(0, Math.min(1, elapsedMs / targetMs))
    : (elapsedMs % 3600000) / 3600000;
  const trackColor = TRACKS[timer.track].color;

  return (
    <div className="bg-panel border border-line rounded-xl p-5">
      <div className="flex gap-7 items-center flex-wrap justify-center">
        <div className="relative w-[200px] h-[200px] shrink-0">
          <Dial trackColor={trackColor} pct={pct} />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="font-mono text-3xl font-bold tracking-wide tabular-nums">
              {fmtHMS(shown)}
            </div>
            <div
              className="text-[11px] tracking-[2px] uppercase mt-1"
              style={{ color: timer.running ? trackColor : "#8b93a6" }}
            >
              {TRACKS[timer.track].label}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3.5 min-w-[220px] flex-1">
          <div className="flex gap-2.5">
            {Object.entries(TRACKS).map(([key, t]) => {
              const active = timer.track === key;
              return (
                <button
                  key={key}
                  disabled={timer.running}
                  onClick={() => onSelectTrack(key)}
                  className={`flex-1 bg-raised border rounded-lg py-2 px-1.5 text-center select-none transition-all ${
                    timer.running ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
                  }`}
                  style={{ borderColor: active ? t.color : "#2e3542" }}
                >
                  <div
                    className="w-[22px] h-[12px] rounded-full mx-auto mb-1.5 relative transition-colors"
                    style={{ background: active ? t.color : "#2e3542" }}
                  >
                    <span
                      className="absolute top-[1px] w-[10px] h-[10px] rounded-full transition-transform"
                      style={{
                        left: 1,
                        background: active ? "#12151a" : "#8b93a6",
                        transform: active ? "translateX(10px)" : "translateX(0)",
                      }}
                    />
                  </div>
                  <span
                    className="text-[10.5px] tracking-wide uppercase font-semibold"
                    style={{ color: active ? "#eceef2" : "#8b93a6" }}
                  >
                    {t.label}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex gap-2 items-center flex-wrap">
            {["stopwatch", "focus", "custom"].map((m) => (
              <button
                key={m}
                disabled={timer.running}
                onClick={() => onSelectMode(m)}
                className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide border ${
                  timer.mode === m
                    ? "bg-amber text-[#1a1300] border-amber"
                    : "bg-raised text-dim border-line"
                } ${timer.running ? "opacity-40 pointer-events-none" : "cursor-pointer"}`}
              >
                {m === "stopwatch" ? "Stopwatch" : m === "focus" ? "Focus 25/5" : "Custom"}
              </button>
            ))}
            <div
              className={`flex items-center gap-1.5 ${
                timer.mode !== "custom" || timer.running ? "opacity-40 pointer-events-none" : ""
              }`}
            >
              <input
                type="number"
                min={1}
                max={240}
                value={timer.customMinutes}
                onChange={(e) => onCustomMinutesChange(parseInt(e.target.value, 10) || 60)}
                className="w-[52px] bg-raised border border-line rounded-md py-1 px-1.5 font-mono text-xs text-center text-ink"
              />
              <span className="text-[11px] text-dim">min</span>
            </div>
            <label className="ml-auto flex items-center gap-1.5 text-[11px] text-dim cursor-pointer">
              <input
                type="checkbox"
                checked={timer.soundOn}
                onChange={(e) => onSoundToggle(e.target.checked)}
              />
              sound
            </label>
          </div>

          <div className="flex gap-2">
            <button
              onClick={onStartPause}
              className="flex-1 rounded-lg py-2.5 font-bold text-[13px] bg-amber text-[#1a1300] border border-amber cursor-pointer"
            >
              {timer.running ? "Pause" : "Start"}
            </button>
            <button
              onClick={onReset}
              className="flex-1 rounded-lg py-2.5 font-bold text-[13px] bg-raised text-ink border border-line cursor-pointer"
            >
              Reset
            </button>
            <button
              onClick={onLog}
              disabled={elapsedMs < 30000}
              className="flex-1 rounded-lg py-2.5 font-bold text-[13px] bg-raised text-ink border border-line cursor-pointer disabled:opacity-35 disabled:cursor-not-allowed"
            >
              Log session
            </button>
          </div>
          <div className="text-[11.5px] text-dim text-center">{message}</div>
        </div>
      </div>
    </div>
  );
}
