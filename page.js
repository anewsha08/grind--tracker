"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import {
  WEEKS,
  PHASES,
  todayStr,
  DEFAULT_DATA,
} from "@/lib/data";
import { loadData, saveData } from "@/lib/storage";
import TimerPanel from "@/components/TimerPanel";
import StatCards from "@/components/StatCards";
import ChecklistCard from "@/components/ChecklistCard";
import SessionLog from "@/components/SessionLog";
import SkillRoadmap from "@/components/SkillRoadmap";
import DayCounter from "@/components/DayCounter";

const WEEK_ITEMS = WEEKS.map((w, wi) => ({
  title: w.title,
  items: w.days.map((d, di) => ({ id: `d-${wi}-${di}`, tag: d[0], label: d[1] })),
}));

const PHASE_ITEMS = PHASES.map((p, pi) => ({
  title: p.title,
  items: p.items.map((it, ii) => ({ id: `p-${pi}-${ii}`, label: it })),
}));

export default function Page() {
  const [data, setData] = useState(DEFAULT_DATA);
  const [loaded, setLoaded] = useState(false);
  const [, forceTick] = useState(0);
  const [view, setView] = useState("grind");
  const [message, setMessage] = useState("Flip a switch, hit start. Log whenever you stop.");
  const audioCtxRef = useRef(null);
  const dataRef = useRef(data);

  // load once on mount
  useEffect(() => {
    setData(loadData());
    setLoaded(true);
  }, []);

  // keep a ref in sync so the interval always reads fresh state
  useEffect(() => {
    dataRef.current = data;
  }, [data]);

  // persist on every change, once loaded
  useEffect(() => {
    if (!loaded) return;
    saveData(data);
  }, [data, loaded]);

  const timer = data.timer;

  const getElapsedMs = useCallback(() => {
    return timer.accumulatedMs + (timer.running ? Date.now() - timer.startTs : 0);
  }, [timer]);

  const targetMs =
    timer.mode === "focus"
      ? 25 * 60000
      : timer.mode === "custom"
      ? Math.max(1, timer.customMinutes || 60) * 60000
      : null;

  const beep = useCallback((soundOn) => {
    if (!soundOn) return;
    try {
      audioCtxRef.current = audioCtxRef.current || new (window.AudioContext || window.webkitAudioContext)();
      const ctx = audioCtxRef.current;
      [0, 0.22, 0.44].forEach((delay) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.value = 880;
        gain.gain.setValueAtTime(0.0001, ctx.currentTime + delay);
        gain.gain.exponentialRampToValueAtTime(0.25, ctx.currentTime + delay + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + delay + 0.18);
        osc.connect(gain).connect(ctx.destination);
        osc.start(ctx.currentTime + delay);
        osc.stop(ctx.currentTime + delay + 0.2);
      });
    } catch (e) {
      // audio unavailable, fail silently
    }
  }, []);

  // single ticking interval: re-renders every second and checks for countdown completion
  // against the freshest state (via ref) so it isn't limited to whenever `data` happens to change
  useEffect(() => {
    const id = setInterval(() => {
      forceTick((t) => t + 1);
      const d = dataRef.current;
      const tmr = d.timer;
      if (!tmr.running) return;
      const tgt =
        tmr.mode === "focus"
          ? 25 * 60000
          : tmr.mode === "custom"
          ? Math.max(1, tmr.customMinutes || 60) * 60000
          : null;
      if (tgt === null) return;
      const elapsed = tmr.accumulatedMs + (Date.now() - tmr.startTs);
      if (elapsed >= tgt) {
        const minutes = Math.round(tgt / 60000);
        beep(tmr.soundOn);
        setData((dd) => ({
          ...dd,
          sessions: [
            ...dd.sessions,
            { id: "sess-" + Date.now(), date: todayStr(), track: tmr.track, minutes },
          ],
          timer: { ...dd.timer, accumulatedMs: 0, running: false, startTs: null },
        }));
        setMessage(`⏰ ${tmr.track.toUpperCase()} session complete — logged ${minutes} min.`);
      }
    }, 1000);
    return () => clearInterval(id);
  }, [beep]);

  function logSessionMinutes(minutes, track) {
    setData((d) => ({
      ...d,
      sessions: [...d.sessions, { id: "sess-" + Date.now(), date: todayStr(), track, minutes }],
    }));
  }

  function selectTrack(track) {
    if (timer.running) return;
    setData((d) => ({ ...d, timer: { ...d.timer, track } }));
  }

  function selectMode(mode) {
    if (timer.running) return;
    setData((d) => ({ ...d, timer: { ...d.timer, mode, accumulatedMs: 0 } }));
  }

  function setCustomMinutes(v) {
    const clamped = Math.max(1, Math.min(240, v));
    setData((d) => ({ ...d, timer: { ...d.timer, customMinutes: clamped } }));
  }

  function setSoundOn(v) {
    setData((d) => ({ ...d, timer: { ...d.timer, soundOn: v } }));
  }

  function startPause() {
    setData((d) => {
      if (d.timer.running) {
        const elapsed = d.timer.accumulatedMs + (Date.now() - d.timer.startTs);
        return { ...d, timer: { ...d.timer, accumulatedMs: elapsed, running: false, startTs: null } };
      }
      return { ...d, timer: { ...d.timer, running: true, startTs: Date.now() } };
    });
  }

  function resetTimer() {
    setData((d) => ({ ...d, timer: { ...d.timer, accumulatedMs: 0, running: false, startTs: null } }));
  }

  function logSession() {
    const ms = getElapsedMs();
    const minutes = Math.round(ms / 60000);
    if (minutes < 1) return;
    logSessionMinutes(minutes, timer.track);
    setData((d) => ({ ...d, timer: { ...d.timer, accumulatedMs: 0, running: false, startTs: null } }));
    setMessage(`Logged ${minutes} min · ${timer.track.toUpperCase()}.`);
  }

  function deleteSession(id) {
    setData((d) => ({ ...d, sessions: d.sessions.filter((s) => s.id !== id) }));
  }

  function toggleChecklist(id, checked) {
    setData((d) => ({ ...d, checklist: { ...d.checklist, [id]: checked } }));
  }

  function toggleVocab() {
    const t = todayStr();
    setData((d) => ({ ...d, vocab: { ...d.vocab, [t]: !d.vocab[t] } }));
  }

  function addSkill({ name, domain, tier, targetDate }) {
    setData((d) => ({
      ...d,
      skills: [...d.skills, { id: "skill-" + Date.now(), name, domain, tier, targetDate, createdAt: Date.now() }],
    }));
  }

  function deleteSkill(id) {
    setData((d) => ({ ...d, skills: d.skills.filter((s) => s.id !== id) }));
  }

  function toggleSkillTask(id, checked) {
    setData((d) => ({ ...d, skillChecklist: { ...d.skillChecklist, [id]: checked } }));
  }

  function setStartDate(v) {
    setData((d) => ({ ...d, startDate: v }));
  }

  // streak: consecutive active days, with a one-day grace for "today not logged yet"
  const activeDates = new Set();
  data.sessions.forEach((s) => activeDates.add(s.date));
  Object.keys(data.vocab).forEach((dt) => {
    if (data.vocab[dt]) activeDates.add(dt);
  });
  let streak = 0;
  let cursor = new Date();
  if (!activeDates.has(todayStr(cursor))) cursor.setDate(cursor.getDate() - 1);
  while (activeDates.has(todayStr(cursor))) {
    streak++;
    cursor.setDate(cursor.getDate() - 1);
  }

  if (!loaded) {
    return (
      <div className="max-w-[880px] mx-auto py-16 text-center text-dim font-mono">
        loading grind control…
      </div>
    );
  }

  return (
    <div className="max-w-[880px] mx-auto px-4 py-5 pb-12">
      <div className="flex justify-between items-end border-b border-line pb-3.5 mb-5 flex-wrap gap-2.5">
        <div>
          <div className="font-mono font-extrabold text-[22px] tracking-wide uppercase">
            GRIND <span className="text-amber">CONTROL</span>
          </div>
          <div className="text-dim text-[12.5px] mt-1">DSA · Qualcomm · GRE — 14 week panel</div>
        </div>
        <DayCounter
          startDate={data.startDate}
          onSetStart={setStartDate}
          onClear={() => setStartDate(null)}
        />
      </div>

      <div className="flex gap-1 mb-4.5 border-b border-line">
        <button
          onClick={() => setView("grind")}
          className={`font-mono text-xs tracking-wide uppercase font-bold py-2.5 px-1 mr-4.5 -mb-px border-b-2 ${
            view === "grind" ? "text-ink border-amber" : "text-dim border-transparent"
          }`}
        >
          📌 Grind panel
        </button>
        <button
          onClick={() => setView("build")}
          className={`font-mono text-xs tracking-wide uppercase font-bold py-2.5 px-1 mr-4.5 -mb-px border-b-2 ${
            view === "build" ? "text-ink border-amber" : "text-dim border-transparent"
          }`}
        >
          🧠 Skill Engine
        </button>
      </div>

      {view === "grind" && (
        <div>
          <TimerPanel
            timer={timer}
            elapsedMs={getElapsedMs()}
            targetMs={targetMs}
            onSelectTrack={selectTrack}
            onSelectMode={selectMode}
            onCustomMinutesChange={setCustomMinutes}
            onSoundToggle={setSoundOn}
            onStartPause={startPause}
            onReset={resetTimer}
            onLog={logSession}
            message={message}
          />

          <div className="mt-4.5">
            <StatCards
              sessions={data.sessions}
              streak={streak}
              vocabDoneToday={!!data.vocab[todayStr()]}
              onToggleVocab={toggleVocab}
            />
          </div>

          <SectionTitle>Daily DSA log · weeks 1–6</SectionTitle>
          {WEEK_ITEMS.map((w) => (
            <ChecklistCard
              key={w.title}
              title={w.title}
              items={w.items}
              checklist={data.checklist}
              onToggle={toggleChecklist}
            />
          ))}

          <SectionTitle>Phase milestones · weeks 1–14</SectionTitle>
          {PHASE_ITEMS.map((p) => (
            <ChecklistCard
              key={p.title}
              title={p.title}
              items={p.items}
              checklist={data.checklist}
              onToggle={toggleChecklist}
            />
          ))}

          <SectionTitle>Session log</SectionTitle>
          <SessionLog sessions={data.sessions} onDelete={deleteSession} />

          <div className="bg-raised border border-dashed border-line rounded-[10px] px-4 py-3.5 mt-5.5">
            <div className="font-mono text-[11px] tracking-wide uppercase text-dim mb-2">
              Sustainability rules
            </div>
            <ol className="pl-4.5 text-[12.5px] leading-relaxed text-dim list-decimal space-y-1">
              <li>
                <b className="text-ink">Vocab is non-negotiable</b>, everything else flexes. 20 words a
                day, no exceptions.
              </li>
              <li>
                <b className="text-ink">One rest half-day per week</b>, fixed. Not optional at 3–4
                hrs/day for 14 weeks.
              </li>
              <li>
                <b className="text-ink">Job-search deadline crushes a week?</b> Drop Qualcomm content
                review, not DSA or GRE.
              </li>
              <li>
                <b className="text-ink">Track cold, not by feeling.</b> That's what this panel is for.
              </li>
            </ol>
          </div>
        </div>
      )}

      {view === "build" && (
        <SkillRoadmap
          skills={data.skills}
          skillChecklist={data.skillChecklist}
          onAdd={addSkill}
          onDelete={deleteSkill}
          onToggleTask={toggleSkillTask}
        />
      )}
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <div className="font-mono text-[13px] tracking-wide uppercase text-dim mt-6 mb-2.5 flex items-center gap-2">
      {children}
      <span className="flex-1 h-px bg-line" />
    </div>
  );
}
