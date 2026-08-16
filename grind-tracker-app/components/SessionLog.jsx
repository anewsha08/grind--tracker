"use client";

import { TRACKS } from "@/lib/data";

export default function SessionLog({ sessions, onDelete }) {
  const sorted = [...sessions].sort((a, b) => (b.date + b.id).localeCompare(a.date + a.id));

  if (sorted.length === 0) {
    return (
      <div className="bg-panel border border-line rounded-[10px] p-5 text-center text-dim text-[12.5px]">
        No sessions logged yet. Start the timer above.
      </div>
    );
  }

  return (
    <div className="bg-panel border border-line rounded-[10px] overflow-hidden">
      {sorted.slice(0, 40).map((s, idx) => (
        <div
          key={s.id}
          className={`flex items-center gap-2.5 px-3.5 py-2.5 text-[12.5px] ${
            idx !== 0 ? "border-t border-line" : ""
          }`}
        >
          <div className="w-2 h-2 rounded-full shrink-0" style={{ background: TRACKS[s.track].color }} />
          <div className="font-mono text-dim w-[78px] shrink-0">{s.date}</div>
          <div className="flex-1 uppercase tracking-wide text-[11px] font-bold text-dim">
            {TRACKS[s.track].label}
          </div>
          <div className="font-mono font-bold">{s.minutes}m</div>
          <button
            onClick={() => onDelete(s.id)}
            className="text-dim text-[15px] px-1 cursor-pointer bg-transparent border-none"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
}
