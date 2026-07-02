"use client";

import { useTranslations } from "next-intl";
import { ReactNode } from "react";
import { FaStar } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import { BsChatLeftText } from "react-icons/bs";
import { FiEdit3 } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";

interface HiddenInsightsCardProps {
  insights: { icon: string; text: string }[];
}

const iconConfig: Record<string, { icon: ReactNode; bg: string }> = {
  star: {
    icon: <FaStar size={128} />,
    bg: "#F5F3FF",
  },
  target: {
    icon: <TbTargetArrow size={128} />,
    bg: "#FEF2F2",
  },
  chat: {
    icon: <BsChatLeftText size={128} />,
    bg: "#FFFBEB",
  },
  pen: {
    icon: <FiEdit3 size={128} />,
    bg: "#EFF6FF",
  },
};

export default function HiddenInsightsCard({
  insights,
}: HiddenInsightsCardProps) {
  const t = useTranslations("results");

  if (!insights || insights.length === 0) {
    return null;
  }

  return (
    <div
      className="rounded-lg p-6 sm:p-8 border w-full"
      style={{
        backgroundColor: "var(--color-background)",
        borderColor: "var(--color-border)",
      }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div
          className="flex rounded-full items-center justify-center bg-purple-100 flex-shrink-0"
          style={{ width: "40px", height: "40px" }}
        >
          <IoEyeOutline size={20} color="var(--color-primary)" />
        </div>
        <h2
          style={{
            color: "var(--color-text-primary)",
            fontSize: "20px",
            fontWeight: 600,
          }}
        >
          {t("hiddenInsights")}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {insights.map((insight, index) => {
          const config = iconConfig[insight.icon] ?? iconConfig.star;
          return (
            <div
              key={index}
              className="relative rounded-lg p-5 overflow-hidden flex items-center justify-center"
              style={{
                backgroundColor: config.bg,
                minHeight: "180px",
              }}
            >
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                style={{ color: "#FFFFFF" }}
              >
                {config.icon}
              </div>

              <p
                className="relative z-10 text-center"
                style={{
                  color: "var(--color-text-primary)",
                  fontSize: "14px",
                  lineHeight: 1.6,
                }}
              >
                {insight.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
