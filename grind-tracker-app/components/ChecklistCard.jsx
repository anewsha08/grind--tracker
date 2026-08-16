"use client";

import { useState } from "react";

export default function ChecklistCard({ title, items, checklist, onToggle }) {
  const [open, setOpen] = useState(false);
  const doneCount = items.filter((it) => checklist[it.id]).length;

  return (
    <div className="bg-panel border border-line rounded-[10px] mb-2 overflow-hidden">
      <div
        className="px-3.5 py-3 flex justify-between items-center cursor-pointer"
        onClick={() => setOpen((o) => !o)}
      >
        <div className="font-bold text-[13.5px]">{title}</div>
        <div className="flex items-center gap-2">
          <div className="font-mono text-[11px] text-dim">
            {doneCount}/{items.length}
          </div>
          <div
            className="text-dim transition-transform"
            style={{ transform: open ? "rotate(90deg)" : "rotate(0deg)" }}
          >
            ▶
          </div>
        </div>
      </div>
      {open && (
        <div className="px-3.5 pb-3">
          {items.map((it, idx) => {
            const checked = !!checklist[it.id];
            return (
              <div
                key={it.id}
                className={`flex gap-2.5 items-start py-1.5 text-[13px] ${
                  idx !== 0 ? "border-t border-line" : ""
                }`}
              >
                <input
                  type="checkbox"
                  id={it.id}
                  checked={checked}
                  onChange={(e) => onToggle(it.id, e.target.checked)}
                  className="mt-[3px] w-[15px] h-[15px] cursor-pointer shrink-0"
                />
                <label
                  htmlFor={it.id}
                  className={`cursor-pointer leading-snug ${
                    checked ? "text-dim line-through" : ""
                  }`}
                >
                  {it.tag && <span className="text-dim font-mono text-[11px] mr-1">{it.tag}</span>}
                  {it.label}
                </label>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
