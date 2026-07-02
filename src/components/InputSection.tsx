"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { LuUpload } from "react-icons/lu";

interface InputSectionProps {
  cv: string;
  jobDescription: string;
  cvFileName: string | null;
  uploadError: string | null;
  onCvChange: (value: string) => void;
  onJobDescriptionChange: (value: string) => void;
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MIN_HEIGHT = 128; // entspricht h-32
const MAX_HEIGHT = MIN_HEIGHT * 3; // 384px

function adjustHeight(el: HTMLTextAreaElement | null, isFocused: boolean) {
  if (!el) return;

  if (isFocused) {
    el.style.height = "auto";
    const newHeight = Math.min(
      Math.max(el.scrollHeight, MIN_HEIGHT),
      MAX_HEIGHT,
    );
    el.style.height = `${newHeight}px`;
    el.style.overflowY = el.scrollHeight > MAX_HEIGHT ? "auto" : "hidden";
  } else {
    el.style.height = `${MIN_HEIGHT}px`;
    el.style.overflowY = "auto"; // weiterhin scrollbar, damit der Inhalt einsehbar bleibt
  }
}

export default function InputSection({
  cv,
  jobDescription,
  cvFileName,
  uploadError,
  onCvChange,
  onJobDescriptionChange,
  onFileUpload,
}: InputSectionProps) {
  const t = useTranslations("input");
  const cvRef = useRef<HTMLTextAreaElement>(null);
  const jobRef = useRef<HTMLTextAreaElement>(null);
  const [cvFocused, setCvFocused] = useState(false);
  const [jobFocused, setJobFocused] = useState(false);

  useEffect(() => {
    adjustHeight(cvRef.current, cvFocused);
  }, [cv, cvFocused]);

  useEffect(() => {
    adjustHeight(jobRef.current, jobFocused);
  }, [jobDescription, jobFocused]);

  return (
    <div className="mb-4 sm:mb-6 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-4">
        {/* CV Input */}
        <div
          className="flex flex-col rounded-lg p-4 sm:p-6 border max-w-[550px] mx-auto w-full"
          style={{
            borderColor: "var(--color-border)",
            backgroundColor: "var(--color-background)",
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <div
              className="flex rounded-full items-center justify-center text-white font-bold"
              style={{
                backgroundColor: "var(--color-primary)",
                width: "32px",
                height: "32px",
              }}
            >
              1
            </div>
            <label
              style={{
                color: "var(--color-text-primary)",
                fontSize: "16px",
                fontWeight: 600,
              }}
            >
              {t("cv")}
            </label>
          </div>
          <textarea
            ref={cvRef}
            className="w-full p-4 rounded-lg border resize-none focus:outline-none focus:ring-2 transition-[height] duration-400"
            style={{
              height: `${MIN_HEIGHT}px`,
              maxHeight: `${MAX_HEIGHT}px`,
              borderColor: "var(--color-border)",
              backgroundColor: "var(--color-background)",
              color: "var(--color-text-primary)",
            }}
            placeholder={t("cvPlaceholder")}
            value={cv}
            onChange={(e) => onCvChange(e.target.value)}
            onFocus={() => setCvFocused(true)}
            onBlur={() => setCvFocused(false)}
          />
          <div className="mt-4 ml-2">
            <label className="flex items-center gap-2 cursor-pointer w-fit">
              <LuUpload color="var(--color-primary)" />
              <p className="text-xs" style={{ color: "var(--color-primary)" }}>
                {t("uploadLabel")}
              </p>
              <input
                type="file"
                accept=".pdf,.docx"
                className="hidden"
                onChange={onFileUpload}
              />
            </label>
            {cvFileName && (
              <p
                className="text-xs mt-1 ml-6"
                style={{ color: "var(--color-success)" }}
              >
                ✅ {cvFileName}
              </p>
            )}
            {uploadError && (
              <p
                className="text-xs mt-1 ml-6"
                style={{ color: "var(--color-error)" }}
              >
                ❌ {uploadError}
              </p>
            )}
          </div>
        </div>

        {/* Job Description Input */}
        <div
          className="flex flex-col rounded-lg p-4 sm:p-6 border max-w-[550px] mx-auto w-full"
          style={{
            borderColor: "var(--color-border)",
            backgroundColor: "var(--color-background)",
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <div
              className="flex rounded-full items-center justify-center text-white font-bold"
              style={{
                backgroundColor: "var(--color-primary)",
                width: "32px",
                height: "32px",
              }}
            >
              2
            </div>
            <label
              style={{
                color: "var(--color-text-primary)",
                fontSize: "16px",
                fontWeight: 600,
              }}
            >
              {t("job")}
            </label>
          </div>
          <textarea
            ref={jobRef}
            className="w-full p-4 rounded-lg border resize-none focus:outline-none focus:ring-2 transition-[height] duration-400"
            style={{
              height: `${MIN_HEIGHT}px`,
              maxHeight: `${MAX_HEIGHT}px`,
              borderColor: "var(--color-border)",
              backgroundColor: "var(--color-background)",
              color: "var(--color-text-primary)",
            }}
            placeholder={t("jobPlaceholder")}
            value={jobDescription}
            onChange={(e) => onJobDescriptionChange(e.target.value)}
            onFocus={() => setJobFocused(true)}
            onBlur={() => setJobFocused(false)}
          />
        </div>
      </div>
    </div>
  );
}
