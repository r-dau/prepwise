"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { LuSquareCheckBig } from "react-icons/lu";
import { FaCheckCircle } from "react-icons/fa";
import { IoWarning, IoChevronDown } from "react-icons/io5";

interface SkillGapCardProps {
  skillGaps: { label: string; detail: string }[];
  strengths: { label: string; detail: string }[];
}

export default function SkillGapCard({
  skillGaps,
  strengths,
}: SkillGapCardProps) {
  const t = useTranslations("results");
  const [openStrength, setOpenStrength] = useState<number | null>(null);
  const [openGap, setOpenGap] = useState<number | null>(null);

  const toggleStrength = (index: number) =>
    setOpenStrength(openStrength === index ? null : index);

  const toggleGap = (index: number) =>
    setOpenGap(openGap === index ? null : index);

  return (
    <div
      className="rounded-lg p-6 border w-full h-full md:col-span-2"
      style={{
        backgroundColor: "var(--color-background)",
        borderColor: "var(--color-border)",
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <div
          className="flex rounded-full items-center justify-center bg-purple-100"
          style={{ width: "42px", height: "42px" }}
        >
          <LuSquareCheckBig size={18} color="var(--color-primary)" />
        </div>
        <h3
          style={{
            color: "var(--color-text-primary)",
            fontSize: "18px",
            fontWeight: 600,
          }}
        >
          {t("skillGap")}
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Strengths */}
        <div
          className="rounded-lg p-3"
          style={{
            backgroundColor: "var(--color-background-alt)",
            border: "1px solid var(--color-border)",
          }}
        >
          <p
            className="text-sm font-semibold mb-3"
            style={{ color: "var(--color-text-primary)" }}
          >
            {t("strengths")}
          </p>
          <ul className="space-y-3">
            {strengths.map((strength, index) => (
              <li key={index}>
                <button
                  onClick={() => toggleStrength(index)}
                  className="flex items-center justify-between w-full text-left gap-2"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <FaCheckCircle
                      size={16}
                      color="var(--color-success)"
                      className="flex-shrink-0"
                    />
                    <span
                      className="text-sm"
                      style={{
                        color: "var(--color-text-primary)",
                        lineHeight: 1.4,
                      }}
                    >
                      {strength.label}
                    </span>
                  </div>
                  <IoChevronDown
                    size={14}
                    color="var(--color-text-secondary)"
                    className="flex-shrink-0"
                    style={{
                      transform:
                        openStrength === index ? "rotate(180deg)" : "none",
                      transition: "transform 0.2s",
                    }}
                  />
                </button>
                {openStrength === index && (
                  <p
                    className="mt-2 ml-6 text-sm"
                    style={{
                      color: "var(--color-text-secondary)",
                      lineHeight: 1.5,
                    }}
                  >
                    {strength.detail}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Skill Gaps */}
        <div
          className="rounded-lg p-3"
          style={{
            backgroundColor: "var(--color-background-alt)",
            border: "1px solid var(--color-border)",
          }}
        >
          <p
            className="text-sm font-semibold mb-3"
            style={{ color: "var(--color-text-primary)" }}
          >
            {t("gaps")}
          </p>
          <ul className="space-y-3">
            {skillGaps.map((gap, index) => (
              <li key={index}>
                <button
                  onClick={() => toggleGap(index)}
                  className="flex items-center justify-between w-full text-left gap-2"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <IoWarning
                      size={16}
                      color="var(--color-warning)"
                      className="flex-shrink-0"
                    />
                    <span
                      className="text-sm"
                      style={{
                        color: "var(--color-text-primary)",
                        lineHeight: 1.4,
                      }}
                    >
                      {gap.label}
                    </span>
                  </div>
                  <IoChevronDown
                    size={14}
                    color="var(--color-text-secondary)"
                    className="flex-shrink-0"
                    style={{
                      transform: openGap === index ? "rotate(180deg)" : "none",
                      transition: "transform 0.2s",
                    }}
                  />
                </button>
                {openGap === index && (
                  <p
                    className="mt-2 ml-6 text-sm"
                    style={{
                      color: "var(--color-text-secondary)",
                      lineHeight: 1.5,
                    }}
                  >
                    {gap.detail}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
