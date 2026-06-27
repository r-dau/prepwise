"use client";

import { useState } from "react";
import { loadHistory, deleteFromHistory, HistoryEntry } from "@/lib/history";
import { useRouter } from "next/navigation";
import { TbTargetArrow } from "react-icons/tb";
import { FiTrash2 } from "react-icons/fi";

export default function HistoryList() {
  const [entries, setEntries] = useState<HistoryEntry[]>(() => loadHistory());
  const router = useRouter();

  const handleDelete = (id: string) => {
    deleteFromHistory(id);
    setEntries(loadHistory());
  };

  const getColor = (score: number) => {
    if (score >= 75) return "#22C55E";
    if (score >= 50) return "#F59E0B";
    return "#EF4444";
  };

  const getLabel = (score: number) => {
    if (score >= 75) return "Gut";
    if (score >= 50) return "Durchschnittlich";
    return "Verbesserungsbedarf";
  };

  if (entries.length === 0) {
    return (
      <div
        className="rounded-lg p-12 border text-center"
        style={{ backgroundColor: "#FFFFFF", borderColor: "#E5E7EB" }}
      >
        <p style={{ color: "#6B7280", fontSize: "16px" }}>
          Noch keine Analysen vorhanden. Starte deine erste Analyse auf der
          Hauptseite!
        </p>
        <button
          onClick={() => router.push("/")}
          className="mt-6 px-6 py-3 rounded-lg text-white font-semibold"
          style={{ backgroundColor: "#7C3AED" }}
        >
          Zur Hauptseite
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {entries.map((entry) => (
        <div
          key={entry.id}
          className="rounded-lg p-6 border flex items-center justify-between gap-4 cursor-pointer hover:shadow-md transition-all"
          style={{ backgroundColor: "#FFFFFF", borderColor: "#E5E7EB" }}
          onClick={() => router.push(`/history/${entry.id}`)}
        >
          <div className="flex items-center gap-4">
            <div
              className="flex rounded-full items-center justify-center bg-purple-100"
              style={{ width: "48px", height: "48px", flexShrink: 0 }}
            >
              <TbTargetArrow color="#7C3AED" size={24} />
            </div>
            <div>
              <p
                style={{ color: "#111827", fontSize: "16px", fontWeight: 600 }}
              >
                {entry.jobTitle}
              </p>
              <p style={{ color: "#6B7280", fontSize: "14px" }}>
                {new Date(entry.date).toLocaleDateString("de-DE", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-right">
              <p
                style={{
                  color: getColor(entry.matchScore),
                  fontSize: "24px",
                  fontWeight: 700,
                }}
              >
                {entry.matchScore}%
              </p>
              <p style={{ color: "#6B7280", fontSize: "12px" }}>
                {getLabel(entry.matchScore)}
              </p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(entry.id);
              }}
              className="p-2 rounded-lg hover:bg-red-50 transition-all"
              style={{ color: "#EF4444" }}
            >
              <FiTrash2 size={18} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
