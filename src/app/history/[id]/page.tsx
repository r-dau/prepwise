"use client";

import { use } from "react";
import { loadHistory } from "@/lib/history";
import { useRouter } from "next/navigation";
import MatchScoreCard from "@/components/MatchScoreCard";
import SkillGapCard from "@/components/SkillGapCard";
import PreparationTipsCard from "@/components/PreparationTipsCard";
import InterviewQuestionsCard from "@/components/InterviewQuestionsCard";
import { FiArrowLeft } from "react-icons/fi";

export default function HistoryDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const entries = loadHistory();
  const entry = entries.find((e) => e.id === id);

  if (!entry) {
    return (
      <div className="w-full bg-[#FAFAFA] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p style={{ color: "#6B7280", fontSize: "16px" }}>
            Analyse nicht gefunden.
          </p>
          <button
            onClick={() => router.push("/history")}
            className="mt-6 px-6 py-3 rounded-lg text-white font-semibold"
            style={{ backgroundColor: "#7C3AED" }}
          >
            Zurück zur Historie
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen">
      <main className="w-full mx-auto py-8 sm:py-12 px-6 sm:px-8 max-w-[1200px]">
        {/* Back Button */}
        <button
          onClick={() => router.push("/history")}
          className="flex items-center gap-2 mb-6 text-sm font-medium hover:opacity-70 transition-all"
          style={{ color: "#7C3AED" }}
        >
          <FiArrowLeft size={16} />
          Zurück zur Historie
        </button>

        {/* Header */}
        <h2
          className="mb-1"
          style={{ color: "#111827", fontSize: "28px", fontWeight: 600 }}
        >
          {entry.jobTitle}
        </h2>
        <p className="mb-8" style={{ color: "#6B7280", fontSize: "14px" }}>
          {new Date(entry.date).toLocaleDateString("de-DE", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>

        {/* Match Summary */}
        <div
          className="rounded-lg p-6 border w-full mb-6"
          style={{ backgroundColor: "#FFFFFF", borderColor: "#E5E7EB" }}
        >
          <p style={{ color: "#6B7280", fontSize: "16px" }}>
            {entry.result.matchSummary}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 mb-8 w-full">
          <MatchScoreCard score={entry.result.matchScore} />
          <SkillGapCard
            skillGaps={entry.result.skillGaps}
            strengths={entry.result.strengths}
          />
          <PreparationTipsCard tips={entry.result.preparationTips} />
        </div>

        {/* Interview Questions */}
        <InterviewQuestionsCard questions={entry.result.interviewQuestions} />
      </main>
    </div>
  );
}
