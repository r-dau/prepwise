"use client";

import { use } from "react";
import { useTranslations } from "next-intl";
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
  const t = useTranslations("history");
  const entries = loadHistory();
  const entry = entries.find((e) => e.id === id);

  if (!entry) {
    return (
      <div
        className="w-full min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "var(--color-background-alt)" }}
      >
        <div className="text-center">
          <p style={{ color: "var(--color-text-secondary)", fontSize: "16px" }}>
            Analyse nicht gefunden.
          </p>
          <button
            onClick={() => router.push("/history")}
            className="mt-6 px-6 py-3 rounded-lg text-white font-semibold"
            style={{ backgroundColor: "var(--color-primary)" }}
          >
            {t("back")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="w-full min-h-screen"
      style={{ backgroundColor: "var(--color-background-alt)" }}
    >
      <main className="w-full mx-auto py-8 sm:py-12 px-6 sm:px-8 max-w-[1200px]">
        {/* Back Button */}
        <button
          onClick={() => router.push("/history")}
          className="flex items-center gap-2 mb-6 text-sm font-medium hover:opacity-70 transition-all"
          style={{ color: "var(--color-primary)" }}
        >
          <FiArrowLeft size={16} />
          {t("back")}
        </button>

        {/* Header */}
        <h2
          className="mb-1"
          style={{
            color: "var(--color-text-primary)",
            fontSize: "28px",
            fontWeight: 600,
          }}
        >
          {entry.jobTitle}
        </h2>
        <p
          className="mb-8"
          style={{ color: "var(--color-text-secondary)", fontSize: "14px" }}
        >
          {new Date(entry.date).toLocaleDateString("de-DE", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>

        {/* Match Summary */}
        <div
          className="rounded-lg p-6 border w-full mb-6"
          style={{
            backgroundColor: "var(--color-background)",
            borderColor: "var(--color-border)",
          }}
        >
          <p style={{ color: "var(--color-text-secondary)", fontSize: "16px" }}>
            {entry.result.matchSummary}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 sm:gap-6 mb-8 w-full">
          <div className="lg:col-span-2">
            <MatchScoreCard score={entry.result.matchScore} />
          </div>
          <div className="lg:col-span-3">
            <SkillGapCard
              skillGaps={entry.result.skillGaps}
              strengths={entry.result.strengths}
            />
          </div>
          <div className="lg:col-span-2">
            <PreparationTipsCard tips={entry.result.preparationTips} />
          </div>
        </div>

        {/* Interview Questions */}
        <InterviewQuestionsCard questions={entry.result.interviewQuestions} />
      </main>
    </div>
  );
}
