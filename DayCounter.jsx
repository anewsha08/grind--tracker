"use client";

import { todayStr } from "@/lib/data";

export default function DayCounter({ startDate, onSetStart, onClear }) {
  if (!startDate) {
    return (
      <div className="flex gap-1.5 items-center">
        <input
          type="date"
          defaultValue={todayStr()}
          id="gc-datein"
          className="bg-raised border border-line text-ink rounded-md py-1.5 px-2 font-mono text-xs"
        />
        <button
          onClick={() => {
            const el = document.getElementById("gc-datein");
            onSetStart(el.value);
          }}
          className="bg-amber text-[#1a1300] border-none rounded-md py-1.5 px-3 font-bold text-xs cursor-pointer"
        >
          Set Day 1
        </button>
      </div>
    );
  }

  const start = new Date(startDate);
  const now = new Date();
  const dayNum = Math.floor((now - start) / 86400000) + 1;
  const weekNum = Math.max(1, Math.ceil(dayNum / 7));

  return (
    <div className="font-mono text-right text-[13px] text-dim">
      <b className="text-ink text-lg block">
        Day {dayNum} · Week {weekNum}
      </b>
      of 98 · 14 weeks
      <div className="mt-1">
        <button onClick={onClear} className="text-dim text-[10.5px] bg-transparent border-none cursor-pointer underline">
          change start date
        </button>
      </div>
    </div>
  );
}
