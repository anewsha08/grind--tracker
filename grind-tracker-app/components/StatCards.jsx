"use client";

import { TRACKS } from "@/lib/data";

function Ring({ pct, color }) {
  const r = 36,
    cx = 42,
    cy = 42;
  const circumf = 2 * Math.PI * r;
  const dash = Math.max(0, Math.min(1, pct)) * circumf;
  return (
    <svg width={84} height={84} viewBox="0 0 84 84">
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#2e3542" strokeWidth={7} />
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth={7}
        strokeDasharray={`${dash} ${circumf}`}
        strokeLinecap="round"
        transform={`rotate(-90 ${cx} ${cy})`}
      />
    </svg>
  );
}

export default function StatCards({ sessions, streak, vocabDoneToday, onToggleVocab }) {
  function weekStart() {
    const d = new Date();
    const day = d.getDay();
    const diff = day === 0 ? 6 : day - 1;
    d.setDate(d.getDate() - diff);
    d.setHours(0, 0, 0, 0);
    return d;
  }
  const ws = weekStart();

  return (
    <div className="grid gap-3 mb-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))" }}>
      {Object.entries(TRACKS).map(([key, t]) => {
        const all = sessions.filter((s) => s.track === key);
        const totalMin = all.reduce((a, s) => a + s.minutes, 0);
        const weekMin = all
          .filter((s) => new Date(s.date) >= ws)
          .reduce((a, s) => a + s.minutes, 0);
        return (
          <div key={key} className="bg-panel border border-line rounded-xl p-3.5 text-center">
            <div className="relative w-[84px] h-[84px] mx-auto mb-2">
              <Ring pct={weekMin / 600} color={t.color} />
              <div className="absolute inset-0 flex items-center justify-center font-mono text-[15px] font-bold">
                {(totalMin / 60).toFixed(1)}h
              </div>
            </div>
            <div className="text-[11px] tracking-wide uppercase font-bold" style={{ color: t.color }}>
              {t.label}
            </div>
            <div className="text-[11px] text-dim mt-0.5">{(weekMin / 60).toFixed(1)}h this week</div>
          </div>
        );
      })}
      <div className="bg-panel border border-line rounded-xl p-3.5 flex flex-col justify-center items-center text-center">
        <div className="font-mono text-2xl font-extrabold">🔥 {streak}</div>
        <div className="text-[11px] tracking-wide uppercase text-dim font-bold">day streak</div>
        <button
          onClick={onToggleVocab}
          className={`mt-2 w-full rounded-md py-2 text-xs font-bold border cursor-pointer ${
            vocabDoneToday
              ? "bg-amber text-[#1a1300] border-amber"
              : "bg-raised text-dim border-line"
          }`}
        >
          {vocabDoneToday ? "✓ Today's 20 words done" : "Today's 20 words"}
        </button>
      </div>
    </div>
  );
}
