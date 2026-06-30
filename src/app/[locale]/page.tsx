"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { saveToHistory } from "@/lib/history";
import { extractTextFromFile } from "@/lib/fileParser";

import { AnalysisResult } from "@/types/analysis";
import HeroSection from "@/components/HeroSection";
import PrivacyBanner from "@/components/PrivacyBanner";
import InputSection from "@/components/InputSection";
import PasswordInput from "@/components/PasswordInput";
import AnalysisSkeleton from "@/components/AnalysisSkeleton";
import AnalysisResults from "@/components/AnalysisResults";

export default function Home() {
  const t = useTranslations("errors");
  const [cv, setCv] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState<boolean | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [cvFileName, setCvFileName] = useState<string | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    if (!String(cv).trim() || !String(jobDescription).trim()) {
      setError(t("fillBothFields"));
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
        throw new Error(t("analysisFailed"));
      }

      const data: AnalysisResult = await response.json();

      if (!data.jobTitle || data.jobTitle.trim() === "") {
        const manualTitle = prompt("Kein Jobtitel gefunden. Bitte eingeben:");
        data.jobTitle = manualTitle || "Unbekannte Stelle";
      }

      saveToHistory(data.jobTitle, data);
      setResult(data);
    } catch (err) {
      setError((err as Error).message || t("genericError"));
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

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploadError(null);
      const text = await extractTextFromFile(file);
      setCv(String(text));
      setCvFileName(file.name);
    } catch (err) {
      setUploadError((err as Error).message);
    }
  };

  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-center"
      style={{ backgroundColor: "var(--color-background-alt)" }}
    >
      <main className="w-full mx-auto py-8 sm:pt-8 lg:pt-8 sm:pb-6 lg:pb-6 px-6 sm:px-6 lg:px-8 flex flex-col items-center justify-center max-w-[1200px]">
        <HeroSection />
        <PrivacyBanner />
        <InputSection
          cv={cv}
          jobDescription={jobDescription}
          cvFileName={cvFileName}
          uploadError={uploadError}
          onCvChange={setCv}
          onJobDescriptionChange={setJobDescription}
          onFileUpload={handleFileUpload}
        />
        <PasswordInput
          password={password}
          passwordValid={passwordValid}
          showPassword={showPassword}
          loading={loading}
          onPasswordChange={handlePasswordChange}
          onTogglePassword={() => setShowPassword(!showPassword)}
          onAnalyze={handleAnalyze}
        />
        {error && (
          <p
            className="text-center mt-4"
            style={{ color: "var(--color-error)", fontSize: "14px" }}
          >
            {error}
          </p>
        )}
      </main>

      {loading && <AnalysisSkeleton />}
      {result && <AnalysisResults result={result} />}
    </div>
  );
}
