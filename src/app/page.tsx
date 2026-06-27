"use client";

import { useState } from "react";
import { saveToHistory } from "@/lib/history";

import { LuUpload } from "react-icons/lu";
import { IoMdLock } from "react-icons/io";
import { GiNestedHexagons } from "react-icons/gi";
import { BsShield } from "react-icons/bs";
import { IoEye, IoEyeOff } from "react-icons/io5";

import MatchScoreCard from "@/components/MatchScoreCard";
import SkillGapCard from "@/components/SkillGapCard";
import PreparationTipsCard from "@/components/PreparationTipsCard";
import AnalysisSkeleton from "@/components/AnalysisSkeleton";
import InterviewQuestionsCard from "@/components/InterviewQuestionsCard";

interface AnalysisResult {
  jobTitle: string;
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
  const [passwordValid, setPasswordValid] = useState<boolean | null>(null);
  const [showPassword, setShowPassword] = useState(false);

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

      // Jobtitel prüfen
      if (!data.jobTitle || data.jobTitle.trim() === "") {
        const manualTitle = prompt("Kein Jobtitel gefunden. Bitte eingeben:");
        data.jobTitle = manualTitle || "Unbekannte Stelle";
      }

      saveToHistory(data.jobTitle, data);
      setResult(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordChange = async (value: string) => {
    setPassword(value);

    if (value.length < 3) {
      setPasswordValid(null);
      return;
    }

    const response = await fetch("/api/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: value }),
    });

    const { isValid } = await response.json();
    setPasswordValid(isValid);
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

          <div className="flex flex-col gap-2 w-fit mx-auto">
            <label className="text-sm font-medium" style={{ color: "#111827" }}>
              Demo-Passwort
            </label>

            {/* Input mit Eye-Icon */}
            <div className="flex items-center gap-2">
              <div className="relative w-72">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Passwort eingeben..."
                  className="w-full p-3 pr-10 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
                  style={{
                    borderColor:
                      passwordValid === false
                        ? "#EF4444"
                        : passwordValid === true
                          ? "#22C55E"
                          : "#E5E7EB",
                    backgroundColor: "#FFFFFF",
                    color: "#111827",
                  }}
                  value={password ?? ""}
                  onChange={(e) => handlePasswordChange(e.target.value)}
                />
                {/* Eye Icon */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  style={{ color: "#6B7280" }}
                >
                  {showPassword ? <IoEyeOff size={18} /> : <IoEye size={18} />}
                </button>
              </div>

              <button
                onClick={handleAnalyze}
                disabled={loading || passwordValid !== true}
                className="flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold transition-all hover:opacity-90 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: "#7C3AED",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                <GiNestedHexagons size={20} />
                {loading ? "Analysiere..." : "Analyse starten"}
              </button>
            </div>

            {/* Live Feedback */}
            {passwordValid === false && (
              <p style={{ color: "#EF4444", fontSize: "13px" }}>
                ❌ Falsches Passwort
              </p>
            )}
            {passwordValid === true && (
              <p style={{ color: "#22C55E", fontSize: "13px" }}>
                ✅ Passwort korrekt
              </p>
            )}
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
