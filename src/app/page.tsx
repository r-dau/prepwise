"use client";

import { useState } from "react";

import { LuUpload } from "react-icons/lu";
import { IoMdLock } from "react-icons/io";
import { GiNestedHexagons } from "react-icons/gi";
import { BsShield } from "react-icons/bs";

import MatchScoreCard from "@/components/MatchScoreCard";
import SkillGapCard from "@/components/SkillGapCard";
import PreparationTipsCard from "@/components/PreparationTipsCard";
import AnalysisSkeleton from "@/components/AnalysisSkeleton";
import InterviewQuestionsCard from "@/components/InterviewQuestionsCard";

interface AnalysisResult {
  matchScore: number;
  matchSummary: string;
  strengths: { label: string; detail: string }[];
  skillGaps: { label: string; detail: string }[];
  preparationTips: { label: string; detail: string }[];
  interviewQuestions: { question: string; category: string; tip: string }[];
}

export default function Home() {
  const [cv, setCv] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [password, setPassword] = useState("");

  const handleAnalyze = async () => {
    if (!cv.trim() || !jobDescription.trim()) {
      setError("Bitte fülle beide Felder aus, um die Analyse zu starten.");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    setTimeout(() => {
      document
        .getElementById("analysis")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 500);

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cv, jobDescription, password }),
      });

      if (!response.ok) {
        throw new Error("Fehler bei der Analyse. Bitte versuche es erneut.");
      }

      const data: AnalysisResult = await response.json();
      setResult(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen flex flex-col items-center justify-center">
      <main className="w-full mx-auto py-8 sm:pt-8 lg:pt-12 sm:pb-4 lg:pb-4 px-6 sm:px-6 lg:px-8 flex flex-col items-center justify-center max-w-[1200px]">
        {/* Header Section */}
        <div className="mb-8 sm:mb-12 text-center w-full">
          <h2
            className="mb-4 sm:mb-6 text-text-secondary"
            style={{ color: "#111827", fontSize: "32px", fontWeight: 600 }}
          >
            Prepare smarter. Interview better.
          </h2>
          <p
            className="text-text-secondary mx-auto max-w-lg"
            style={{ color: "#6B7280", fontSize: "16px" }}
          >
            Analysiere deinen Lebenslauf und eine Stellenanzeige und erhalte
            personalisiertes Feedback, Skill Gaps und Interviewfragen.
          </p>
        </div>

        {/* Password Section */}
        <div
          className="flex w-full items-center justify-between bg-white rounded-lg border-3 border-[#E5E7EB] text-gray-700 gap-4 p-4 mb-6"
          role="alert"
        >
          <>
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E5E7EB]">
              <IoMdLock color="#6A7282" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold">Zugang</h3>
              <p>
                Diese Demo ist passwortgeschützt, um Missbrauch und unnötige
                API-Kosten zu vermeiden. Das Passwort wird nur zur Freigabe der
                Analyse verwendet.
              </p>
            </div>
          </>
          <div className="flex gap-2 ml-auto">
            <input
              type="password"
              placeholder="Demo-Passwort eingeben"
              className="flex p-2 min-w-60 rounded-lg border-2 border-[#E5E7EB] text-sm focus:outline-none focus:ring-2"
              style={{
                borderColor: "#E5E7EB",
                backgroundColor: "#FFFFFF",
                color: "#111827",
              }}
              value={password ?? ""}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="px-2 py-2 rounded-lg text-white font-semibold transition-all hover:opacity-90"
              style={{
                backgroundColor: "#7C3AED",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              Zugang bestätigen
            </button>
          </div>
        </div>

        {/* Alert Section */}
        <div
          className="flex bg-violet-50 rounded-lg border-3 border-violet-200 text-gray-700 gap-4 p-4 mb-6"
          role="alert"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-100">
            <BsShield size={24} color="#7C3AED" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold">Datenschutzhinweis</h3>
            <p>
              Die eingegebenen Inhalte werden ausschließlich für die Analyse
              verwendet und nicht dauerhaft gespeichert. Bitte verwende keine
              vertraulichen Informationen oder personenbezogenen Daten, die du
              nicht mit einem KI-Dienst teilen möchtest.
            </p>
          </div>
        </div>

        {/* Input Section */}
        <div className="mb-8 sm:mb-12 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div
              className="flex flex-col rounded-lg p-4 sm:p-6 border max-w-[550px] mx-auto w-full"
              style={{
                borderColor: "#E5E7EB",
                backgroundColor: "#FFFFFF",
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="flex rounded-full items-center justify-center text-white font-bold"
                  style={{
                    backgroundColor: "#7C3AED",
                    width: "32px",
                    height: "32px",
                  }}
                >
                  1
                </div>
                <label
                  style={{
                    color: "#111827",
                    fontSize: "16px",
                    fontWeight: 600,
                  }}
                  className="block mb-0"
                >
                  Dein Lebenslauf
                </label>
              </div>
              <textarea
                className="w-full h-32 p-4 rounded-lg border resize-none focus:outline-none focus:ring-2"
                style={{
                  borderColor: "#E5E7EB",
                  backgroundColor: "#FFFFFF",
                  color: "#111827",
                }}
                placeholder="Füge hier den Text deines Lebenslaufs ein"
                value={cv}
                onChange={(e) => setCv(e.target.value)}
              ></textarea>
              <div className="flex items-center gap-2 mt-4 ml-2 cursor-pointer">
                <LuUpload color="#7C3AED" />
                <p className="text-xs" style={{ color: "#7C3AED" }}>
                  oder Datei hochladen
                </p>
              </div>
            </div>
            <div
              className="flex flex-col rounded-lg p-4 sm:p-6 border max-w-[550px] mx-auto w-full"
              style={{
                borderColor: "#E5E7EB",
                backgroundColor: "#FFFFFF",
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="flex rounded-full items-center justify-center text-white font-bold"
                  style={{
                    backgroundColor: "#7C3AED",
                    width: "32px",
                    height: "32px",
                  }}
                >
                  2
                </div>
                <label
                  style={{
                    color: "#111827",
                    fontSize: "16px",
                    fontWeight: 600,
                  }}
                  className="block mb-0"
                >
                  Stellenanzeige
                </label>
              </div>
              <textarea
                className="w-full h-32 p-4 rounded-lg border resize-none focus:outline-none focus:ring-2"
                style={{
                  borderColor: "#E5E7EB",
                  backgroundColor: "#FFFFFF",
                  color: "#111827",
                }}
                placeholder="Füge hier den Text der Stellenanzeige ein"
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
              ></textarea>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <p
              className="text-center mb-4"
              style={{ color: "#EF4444", fontSize: "14px" }}
            >
              {error}
            </p>
          )}

          <div className="flex flex-col justify-center gap-4 sm:gap-6 items-center">
            <button
              onClick={handleAnalyze}
              disabled={loading}
              className="flex items-center gap-2 w-full sm:w-auto px-20 py-3 rounded-lg text-white font-semibold transition-all hover:opacity-90"
              style={{
                backgroundColor: "#7C3AED",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              <GiNestedHexagons size={24} />
              {loading ? "Analysiere..." : "Analyse starten"}
            </button>
            <div className="flex items-center gap-2 text-center">
              <IoMdLock color="#6A7282" />
              <p className="text-sm text-gray-500">
                Deine Daten werden nicht gespeichert und nur zur Analyse
                verwendet.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Results Section */}
      {loading && <AnalysisSkeleton />}

      {/* Results Section */}
      {result && (
        <section id="analysis" className="bg-[#F5F3FF] w-full">
          <div className="w-full mx-auto py-8 sm:py-12 lg:py-16 px-8 sm:px-6 lg:px-8 max-w-[1200px] flex flex-col items-center">
            <h2
              className="mb-6 sm:mb-8 w-full"
              style={{ color: "#111827", fontSize: "24px", fontWeight: 600 }}
            >
              Analyseergebnisse
            </h2>

            {/* Match Summary */}
            <div
              className="rounded-lg p-6 border w-full mb-6"
              style={{ backgroundColor: "#FFFFFF", borderColor: "#E5E7EB" }}
            >
              <p style={{ color: "#6B7280", fontSize: "16px" }}>
                {result.matchSummary}
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 mb-8 w-full">
              {/* Match Score Card */}
              <MatchScoreCard score={result.matchScore} />

              {/* Skill Gap Card */}
              <SkillGapCard
                skillGaps={result.skillGaps}
                strengths={result.strengths}
              />

              {/* Tips Card */}
              <PreparationTipsCard tips={result.preparationTips} />
            </div>

            {/* Interview Questions */}
            <InterviewQuestionsCard questions={result.interviewQuestions} />
          </div>
        </section>
      )}
    </div>
  );
}
