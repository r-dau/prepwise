"use client";

import { useTranslations } from "next-intl";

export default function AnalysisSkeleton() {
  const t = useTranslations("skeleton");

  return (
    <section
      id="analysis"
      className="w-full relative"
      style={{ backgroundColor: "var(--color-background-light)" }}
    >
      {/* Centered Loading Overlay */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="flex items-center gap-2">
          <span
            className="text-xl font-semibold"
            style={{ color: "var(--color-primary)" }}
          >
            {t("analyzing")}
          </span>
          <span className="flex gap-1">
            <span
              className="w-2.5 h-2.5 rounded-full animate-bounce"
              style={{
                backgroundColor: "var(--color-primary)",
                animationDelay: "0ms",
              }}
            />
            <span
              className="w-2.5 h-2.5 rounded-full animate-bounce"
              style={{
                backgroundColor: "var(--color-primary)",
                animationDelay: "150ms",
              }}
            />
            <span
              className="w-2.5 h-2.5 rounded-full animate-bounce"
              style={{
                backgroundColor: "var(--color-primary)",
                animationDelay: "300ms",
              }}
            />
          </span>
        </div>
      </div>

      <div className="w-full mx-auto py-8 sm:py-12 lg:py-16 px-8 sm:px-6 lg:px-8 max-w-[1200px] flex flex-col items-center opacity-40">
        {/* Summary Skeleton */}
        <div
          className="rounded-lg p-6 border w-full mb-6"
          style={{
            backgroundColor: "var(--color-background)",
            borderColor: "var(--color-border)",
          }}
        >
          <div
            className="h-4 rounded w-full mb-2 animate-pulse"
            style={{ backgroundColor: "var(--color-background-light)" }}
          />
          <div
            className="h-4 rounded w-3/4 animate-pulse"
            style={{ backgroundColor: "var(--color-background-light)" }}
          />
        </div>

        {/* Cards Grid Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 sm:gap-6 mb-8 w-full">
          {/* Match Score Skeleton */}
          <div
            className="rounded-lg p-6 border lg:col-span-2"
            style={{
              backgroundColor: "var(--color-background)",
              borderColor: "var(--color-border)",
            }}
          >
            <div
              className="h-5 w-28 rounded mb-6 animate-pulse"
              style={{ backgroundColor: "var(--color-background-light)" }}
            />
            <div className="flex flex-col items-center gap-4">
              <div
                className="w-[120px] h-[120px] rounded-full animate-pulse"
                style={{ backgroundColor: "var(--color-background-light)" }}
              />
              <div
                className="h-6 w-16 rounded animate-pulse"
                style={{ backgroundColor: "var(--color-background-light)" }}
              />
            </div>
          </div>

          {/* Skill Gap Skeleton */}
          <div
            className="rounded-lg p-6 border lg:col-span-3"
            style={{
              backgroundColor: "var(--color-background)",
              borderColor: "var(--color-border)",
            }}
          >
            <div
              className="h-5 w-36 rounded mb-6 animate-pulse"
              style={{ backgroundColor: "var(--color-background-light)" }}
            />
            <div className="flex flex-wrap gap-2">
              {[100, 80, 120, 90].map((w, i) => (
                <div
                  key={i}
                  className="h-7 rounded-full animate-pulse"
                  style={{
                    width: `${w}px`,
                    backgroundColor: "var(--color-background-light)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Preparation Tips Skeleton */}
          <div
            className="rounded-lg p-6 border lg:col-span-2"
            style={{
              backgroundColor: "var(--color-background)",
              borderColor: "var(--color-border)",
            }}
          >
            <div
              className="h-5 w-24 rounded mb-6 animate-pulse"
              style={{ backgroundColor: "var(--color-background-light)" }}
            />
            <div className="flex flex-col gap-2">
              {[80, 100, 70].map((w, i) => (
                <div
                  key={i}
                  className="h-7 rounded-lg animate-pulse"
                  style={{
                    width: "100%",
                    backgroundColor: "var(--color-background-light)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Interview Questions Skeleton */}
        <div
          className="rounded-lg p-6 sm:p-8 border w-full"
          style={{
            backgroundColor: "var(--color-background-alt)",
            borderColor: "var(--color-border)",
          }}
        >
          <div
            className="h-7 w-56 rounded mb-6 animate-pulse"
            style={{ backgroundColor: "var(--color-background-light)" }}
          />
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="p-4 rounded-lg border"
                style={{
                  backgroundColor: "var(--color-background)",
                  borderColor: "var(--color-border)",
                }}
              >
                <div
                  className="h-4 rounded w-full mb-2 animate-pulse"
                  style={{ backgroundColor: "var(--color-background-light)" }}
                />
                <div
                  className="h-4 rounded w-2/3 animate-pulse"
                  style={{ backgroundColor: "var(--color-background-light)" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
