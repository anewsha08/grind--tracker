"use client";

import { useState } from "react";
import { buildDomainRoadmap, DOMAINS, LEVELS, TIERS, TIER_COLORS, domainMeta } from "@/lib/data";

function AddSkillForm({ onAdd }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [domain, setDomain] = useState("software");
  const [tier, setTier] = useState(0);
  const [targetDate, setTargetDate] = useState("");

  function reset() {
    setName("");
    setDomain("software");
    setTier(0);
    setTargetDate("");
    setOpen(false);
  }

  function save() {
    const trimmed = name.trim();
    if (!trimmed) return;
    onAdd({ name: trimmed, domain, tier, targetDate: targetDate || null });
    reset();
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="bg-panel border border-dashed border-line text-ink rounded-xl p-3 w-full text-center font-bold text-[13px] cursor-pointer hover:border-amber hover:text-amber mb-3.5"
      >
        + New skill / project
      </button>
    );
  }

  return (
    <div className="bg-panel border border-line rounded-xl p-4 mb-3.5 flex flex-col gap-3">
      <div>
        <label className="text-[11px] text-dim uppercase tracking-wide font-bold">
          What are you building / learning?
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Intraday Trading, Figma Smart Animate, Verilog FSMs, Next.js"
          className="w-full bg-raised border border-line rounded-lg py-2 px-2.5 text-[13px] text-ink mt-1"
        />
      </div>

      <div>
        <label className="text-[11px] text-dim uppercase tracking-wide font-bold">Domain</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-1.5">
          {DOMAINS.map((d) => (
            <button
              key={d.key}
              type="button"
              onClick={() => setDomain(d.key)}
              className={`flex items-center gap-2 rounded-lg border py-2 px-2.5 text-left text-[12px] font-semibold cursor-pointer ${
                domain === d.key
                  ? "bg-amber/10 border-amber text-ink"
                  : "bg-raised border-line text-dim"
              }`}
            >
              <span className="text-base leading-none">{d.icon}</span>
              <span className="leading-tight">{d.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-2.5 flex-wrap">
        <div className="flex-1 min-w-[140px]">
          <label className="text-[11px] text-dim uppercase tracking-wide font-bold">Complexity tier</label>
          <select
            value={tier}
            onChange={(e) => setTier(parseInt(e.target.value, 10))}
            className="w-full bg-raised border border-line rounded-lg py-2 px-2.5 text-[13px] text-ink mt-1"
          >
            {TIERS.map((t, i) => (
              <option key={i} value={i}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1 min-w-[140px]">
          <label className="text-[11px] text-dim uppercase tracking-wide font-bold">
            Target date (optional)
          </label>
          <input
            type="date"
            value={targetDate}
            onChange={(e) => setTargetDate(e.target.value)}
            className="w-full bg-raised border border-line rounded-lg py-2 px-2.5 text-[13px] text-ink mt-1"
          />
        </div>
      </div>

      <div className="flex gap-2 mt-1">
        <button
          onClick={reset}
          className="flex-1 border border-line bg-raised text-ink rounded-lg py-2 font-bold text-[12.5px] cursor-pointer"
        >
          Cancel
        </button>
        <button
          onClick={save}
          className="flex-1 border border-amber bg-amber text-[#1a1300] rounded-lg py-2 font-bold text-[12.5px] cursor-pointer"
        >
          Generate roadmap
        </button>
      </div>
    </div>
  );
}

function LevelBlock({ skillId, levelKey, levelLabel, level, skillChecklist, onToggleTask }) {
  return (
    <div className="mt-3">
      <div className="text-[11px] tracking-wide uppercase font-bold text-dim mb-1.5">{levelLabel}</div>

      {level.tasks.map((task, i) => {
        const id = `${skillId}-${levelKey}-task-${i}`;
        const checked = !!skillChecklist[id];
        return (
          <div
            key={id}
            className={`flex gap-2.5 items-start py-1.5 text-[13px] ${i !== 0 ? "border-t border-line" : ""}`}
          >
            <input
              type="checkbox"
              id={`sk-${id}`}
              checked={checked}
              onChange={(e) => onToggleTask(id, e.target.checked)}
              className="mt-[3px] w-[15px] h-[15px] cursor-pointer shrink-0"
            />
            <label htmlFor={`sk-${id}`} className={`cursor-pointer leading-snug ${checked ? "text-dim line-through" : ""}`}>
              {task}
            </label>
          </div>
        );
      })}

      {level.resources && level.resources.length > 0 && (
        <div className="mt-2 pl-[25px] text-[12px] text-dim leading-relaxed">
          <span className="font-semibold text-dim">Resources: </span>
          {level.resources.join(" · ")}
        </div>
      )}

      {level.milestone && (
        (() => {
          const mid = `${skillId}-${levelKey}-milestone`;
          const checked = !!skillChecklist[mid];
          return (
            <div className="mt-2 flex gap-2.5 items-start py-2 px-2.5 rounded-lg border border-dashed border-line bg-raised/40">
              <input
                type="checkbox"
                id={`sk-${mid}`}
                checked={checked}
                onChange={(e) => onToggleTask(mid, e.target.checked)}
                className="mt-[3px] w-[15px] h-[15px] cursor-pointer shrink-0"
              />
              <label htmlFor={`sk-${mid}`} className={`cursor-pointer leading-snug text-[12.5px] ${checked ? "text-dim line-through" : ""}`}>
                <span className="text-amber font-bold">🏁 Milestone — </span>
                {level.milestone}
              </label>
            </div>
          );
        })()
      )}
    </div>
  );
}

function SkillCard({ skill, skillChecklist, onToggleTask, onDelete }) {
  const [open, setOpen] = useState(false);
  const roadmap = buildDomainRoadmap(skill.domain, skill.name);
  const dMeta = domainMeta(skill.domain);

  let total = 0,
    done = 0;
  LEVELS.forEach(([key]) => {
    const level = roadmap[key];
    level.tasks.forEach((_, i) => {
      total++;
      if (skillChecklist[`${skill.id}-${key}-task-${i}`]) done++;
    });
    total++; // milestone counts as one checkable item
    if (skillChecklist[`${skill.id}-${key}-milestone`]) done++;
  });
  const pct = total ? Math.round((done / total) * 100) : 0;
  const color = TIER_COLORS[skill.tier];

  return (
    <div className="bg-panel border border-line rounded-xl mb-2.5 overflow-hidden">
      <div className="px-3.5 py-3.5 cursor-pointer" onClick={() => setOpen((o) => !o)}>
        <div className="flex justify-between items-center gap-2 flex-wrap">
          <div>
            <div className="font-bold text-[14px]">{skill.name}</div>
            <div className="text-[11px] text-dim mt-0.5">
              {dMeta.icon} {dMeta.label}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="text-[10px] tracking-wide uppercase font-bold px-2 py-0.5 rounded-full border whitespace-nowrap"
              style={{ color, borderColor: color }}
            >
              {TIERS[skill.tier]}
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete(skill.id);
              }}
              className="text-dim text-[15px] px-1 cursor-pointer bg-transparent border-none"
            >
              ×
            </button>
            <div className="text-dim transition-transform" style={{ transform: open ? "rotate(90deg)" : "" }}>
              ▶
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2.5 mt-2.5">
          <div className="flex-1 h-1.5 rounded-full bg-raised overflow-hidden">
            <div className="h-full rounded-full" style={{ width: `${pct}%`, background: color }} />
          </div>
          <div className="font-mono text-[11px] text-dim shrink-0">
            {pct}%{skill.targetDate ? ` · by ${skill.targetDate}` : ""}
          </div>
        </div>
      </div>
      {open && (
        <div className="px-3.5 pb-4">
          {LEVELS.map(([key, label]) => (
            <LevelBlock
              key={key}
              skillId={skill.id}
              levelKey={key}
              levelLabel={label}
              level={roadmap[key]}
              skillChecklist={skillChecklist}
              onToggleTask={onToggleTask}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function SkillRoadmap({ skills, skillChecklist, onAdd, onDelete, onToggleTask }) {
  const sorted = [...skills].sort((a, b) => a.tier - b.tier || a.createdAt - b.createdAt);

  return (
    <div>
      <div className="text-[12.5px] text-dim mb-3.5 leading-relaxed">
        Add any skill — design, trading, hardware, 3D, code, or anything else — and pick its domain.
        Each one gets a 4-level roadmap tailored to that domain: Foundations → Intermediate → Advanced
        → Mastery, each with checkable tasks, named resources, and a milestone to prove you're ready
        for the next tier.
      </div>
      <AddSkillForm onAdd={onAdd} />
      {sorted.length === 0 ? (
        <div className="bg-panel border border-line rounded-[10px] p-5 text-center text-dim text-[12.5px]">
          No skills yet. Add one above — start basic, stack complexity later.
        </div>
      ) : (
        sorted.map((sk) => (
          <SkillCard
            key={sk.id}
            skill={sk}
            skillChecklist={skillChecklist}
            onToggleTask={onToggleTask}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
}
