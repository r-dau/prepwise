import { useTranslations } from "next-intl";
import MatchScoreCard from "@/components/MatchScoreCard";
import SkillGapCard from "@/components/SkillGapCard";
import PreparationTipsCard from "@/components/PreparationTipsCard";
import InterviewQuestionsCard from "@/components/InterviewQuestionsCard";
import { AnalysisResult } from "@/types/analysis";

interface AnalysisResultsProps {
  result: AnalysisResult;
}

export default function AnalysisResults({ result }: AnalysisResultsProps) {
  const t = useTranslations("results");

  return (
    <section
      id="analysis"
      className="w-full"
      style={{ backgroundColor: "var(--color-background-light)" }}
    >
      <div className="w-full mx-auto py-8 sm:py-12 lg:py-16 px-6 sm:px-8 lg:px-8 max-w-[1200px] flex flex-col items-center">
        <h2
          className="mb-6 sm:mb-8 w-full"
          style={{
            color: "var(--color-text-primary)",
            fontSize: "24px",
            fontWeight: 600,
          }}
        >
          {t("title")}
        </h2>

        {/* Match Summary */}
        <div
          className="rounded-lg p-6 border w-full mb-6"
          style={{
            backgroundColor: "var(--color-background)",
            borderColor: "var(--color-border)",
          }}
        >
          <p style={{ color: "var(--color-text-secondary)", fontSize: "16px" }}>
            {result.matchSummary}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 sm:gap-6 mb-8 w-full">
          <div className="lg:col-span-2">
            <MatchScoreCard score={result.matchScore} />
          </div>
          <div className="lg:col-span-3">
            <SkillGapCard
              skillGaps={result.skillGaps}
              strengths={result.strengths}
            />
          </div>
          <div className="lg:col-span-2">
            <PreparationTipsCard tips={result.preparationTips} />
          </div>
        </div>

        {/* Interview Questions */}
        <InterviewQuestionsCard questions={result.interviewQuestions} />
      </div>
    </section>
  );
}
