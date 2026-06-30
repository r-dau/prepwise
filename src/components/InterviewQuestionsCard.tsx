"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { BsChatLeftText } from "react-icons/bs";
import { IoChevronDown } from "react-icons/io5";

interface Question {
  question: string;
  category: string;
  tip: string;
}

interface InterviewQuestionsCardProps {
  questions: Question[];
}

const INITIAL_COUNT = 3;

function QuestionItem({
  question,
  index,
}: {
  question: Question;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const t = useTranslations("results");

  return (
    <li
      className="p-4 rounded-lg flex flex-col sm:flex-row items-start gap-3"
      style={{
        backgroundColor: "var(--color-background)",
        border: "1px solid var(--color-border)",
      }}
    >
      <div
        className="flex-shrink-0 flex items-center justify-center rounded-full text-white text-sm font-bold"
        style={{
          width: "28px",
          height: "28px",
          backgroundColor: "var(--color-primary)",
          marginTop: "2px",
        }}
      >
        {index + 1}
      </div>

      <div className="flex flex-col gap-2">
        <p style={{ color: "var(--color-text-primary)", fontSize: "15px" }}>
          {question.question}
        </p>
        {open && (
          <p
            className="text-sm"
            style={{ color: "var(--color-text-secondary)" }}
          >
            💡 {question.tip}
          </p>
        )}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-all w-fit"
          style={{
            border: "1px solid var(--color-border)",
            color: "var(--color-text-primary)",
            backgroundColor: open
              ? "var(--color-background-light)"
              : "var(--color-background)",
          }}
        >
          {open ? t("showLess") : t("showMore")}
          <IoChevronDown
            size={14}
            style={{
              transform: open ? "rotate(180deg)" : "none",
              transition: "transform 0.2s",
            }}
          />
        </button>
      </div>
    </li>
  );
}

export default function InterviewQuestionsCard({
  questions,
}: InterviewQuestionsCardProps) {
  const [showAll, setShowAll] = useState(false);
  const t = useTranslations("results");

  const visible = showAll ? questions : questions.slice(0, INITIAL_COUNT);

  return (
    <div
      className="rounded-lg p-6 sm:p-8 border w-full"
      style={{
        backgroundColor: "var(--color-background)",
        borderColor: "var(--color-border)",
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div
          className="flex rounded-full items-center justify-center bg-purple-100 flex-shrink-0 mt-1"
          style={{ width: "40px", height: "40px" }}
        >
          <BsChatLeftText size={16} color="var(--color-primary)" />
        </div>
        <h2
          style={{
            color: "var(--color-text-primary)",
            fontSize: "22px",
            fontWeight: 600,
            lineHeight: 1.3,
          }}
        >
          {t("questions")}
        </h2>
      </div>

      <ul className="space-y-4 mb-6">
        {visible.map((item, index) => (
          <QuestionItem key={index} question={item} index={index} />
        ))}
      </ul>

      {questions.length > INITIAL_COUNT && (
        <div className="flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 px-6 py-2.5 rounded-lg border border-violet-200 text-sm font-medium transition-all"
            style={{
              color: "var(--color-primary)",
              backgroundColor: "var(--color-background)",
            }}
          >
            {showAll ? t("showFewerQuestions") : t("showAllQuestions")}
            <IoChevronDown
              size={16}
              style={{
                transform: showAll ? "rotate(180deg)" : "none",
                transition: "transform 0.2s",
              }}
            />
          </button>
        </div>
      )}
    </div>
  );
}
