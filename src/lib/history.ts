export interface HistoryEntry {
  id: string;
  date: string;
  jobTitle: string;
  matchScore: number;
  result: {
    matchScore: number;
    matchSummary: string;
    strengths: { label: string; detail: string }[];
    skillGaps: { label: string; detail: string }[];
    preparationTips: { label: string; detail: string }[];
    interviewQuestions: { question: string; category: string; tip: string }[];
  };
}

const STORAGE_KEY = "prepwise_history";

export const saveToHistory = (
  jobTitle: string,
  result: HistoryEntry["result"],
): void => {
  const existing = loadHistory();
  const entry: HistoryEntry = {
    id: crypto.randomUUID(),
    date: new Date().toISOString(),
    jobTitle,
    matchScore: result.matchScore,
    result,
  };
  const updated = [entry, ...existing].slice(0, 20); // max 20 Einträge
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};

export const loadHistory = (): HistoryEntry[] => {
  if (typeof window === "undefined") return [];
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
};

export const deleteFromHistory = (id: string): void => {
  const updated = loadHistory().filter((e) => e.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};
