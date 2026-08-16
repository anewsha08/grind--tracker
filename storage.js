import { DEFAULT_DATA, STORAGE_KEY } from "./data";

export function loadData() {
  if (typeof window === "undefined") return DEFAULT_DATA;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_DATA;
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_DATA,
      ...parsed,
      timer: { ...DEFAULT_DATA.timer, ...(parsed.timer || {}) },
      checklist: parsed.checklist || {},
      vocab: parsed.vocab || {},
      skills: parsed.skills || [],
      skillChecklist: parsed.skillChecklist || {},
      sessions: parsed.sessions || [],
    };
  } catch (e) {
    console.error("Failed to load saved data", e);
    return DEFAULT_DATA;
  }
}

export function saveData(data) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error("Failed to save data", e);
  }
}
