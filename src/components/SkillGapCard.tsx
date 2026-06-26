"use client";

import { useState } from "react";
import { LuSquareCheckBig } from "react-icons/lu";
import { FaCheckCircle } from "react-icons/fa";
import { IoWarning, IoChevronDown, IoChevronUp } from "react-icons/io5";

interface SkillGapCardProps {
  skillGaps: { label: string; detail: string }[];
  strengths: { label: string; detail: string }[];
}

export default function SkillGapCard({
  skillGaps,
  strengths,
}: SkillGapCardProps) {
  const [openStrength, setOpenStrength] = useState<number | null>(null);
  const [openGap, setOpenGap] = useState<number | null>(null);

  const toggleStrength = (index: number) =>
    setOpenStrength(openStrength === index ? null : index);

  const toggleGap = (index: number) =>
    setOpenGap(openGap === index ? null : index);

  return (
    <div
      className="rounded-lg p-6 border w-full md:col-span-2"
      style={{ backgroundColor: "#FFFFFF", borderColor: "#E5E7EB" }}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <div
          className="flex rounded-full items-center justify-center bg-purple-100"
          style={{ width: "42px", height: "42px" }}
        >
          <LuSquareCheckBig size={18} color="#7C3AED" />
        </div>
        <h3 style={{ color: "#111827", fontSize: "18px", fontWeight: 600 }}>
          Skill Gap Analyse
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Strengths */}
        <div className="bg-[#FAFAFA] border border-[#E5E7EB] p-4 rounded-lg">
          <p
            className="text-sm font-semibold mb-3"
            style={{ color: "#111827" }}
          >
            Deine Stärken
          </p>
          <ul className="space-y-3">
            {strengths.map((strength, index) => (
              <li key={index}>
                <button
                  onClick={() => toggleStrength(index)}
                  className="flex items-center justify-between w-full text-left gap-2"
                >
                  <div className="flex items-center gap-2">
                    <FaCheckCircle
                      size={16}
                      color="#22C55E"
                      className="flex-shrink-0"
                    />
                    <span style={{ color: "#111827", fontSize: "14px" }}>
                      {strength.label}
                    </span>
                  </div>
                  {openStrength === index ? (
                    <IoChevronUp
                      size={14}
                      color="#6B7280"
                      className="flex-shrink-0"
                    />
                  ) : (
                    <IoChevronDown
                      size={14}
                      color="#6B7280"
                      className="flex-shrink-0"
                    />
                  )}
                </button>
                {openStrength === index && (
                  <p className="mt-2 ml-6 text-sm" style={{ color: "#6B7280" }}>
                    {strength.detail}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Skill Gaps */}
        <div className="bg-[#FAFAFA] border border-[#E5E7EB] p-4 rounded-lg">
          <p
            className="text-sm font-semibold mb-3"
            style={{ color: "#111827" }}
          >
            Potenzielle Skill Gaps
          </p>
          <ul className="space-y-3">
            {skillGaps.map((gap, index) => (
              <li key={index}>
                <button
                  onClick={() => toggleGap(index)}
                  className="flex items-center justify-between w-full text-left gap-2"
                >
                  <div className="flex items-center gap-2">
                    <IoWarning
                      size={16}
                      color="#F59E0B"
                      className="flex-shrink-0"
                    />
                    <span style={{ color: "#111827", fontSize: "14px" }}>
                      {gap.label}
                    </span>
                  </div>
                  {openGap === index ? (
                    <IoChevronUp
                      size={14}
                      color="#6B7280"
                      className="flex-shrink-0"
                    />
                  ) : (
                    <IoChevronDown
                      size={14}
                      color="#6B7280"
                      className="flex-shrink-0"
                    />
                  )}
                </button>
                {openGap === index && (
                  <p className="mt-2 ml-6 text-sm" style={{ color: "#6B7280" }}>
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
