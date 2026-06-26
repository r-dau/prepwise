"use client";

import { useState } from "react";
import { BsChatLeftText } from "react-icons/bs";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

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

  return (
    <li
      className="p-4 rounded-lg flex items-start gap-4"
      style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E7EB" }}
    >
      {/* Number Badge */}
      <div
        className="flex-shrink-0 flex items-center justify-center rounded-full text-white text-sm font-bold"
        style={{
          width: "28px",
          height: "28px",
          backgroundColor: "#7C3AED",
          marginTop: "2px",
        }}
      >
        {index + 1}
      </div>

      {/* Question + Tip */}
      <div className="flex-1">
        <p style={{ color: "#111827", fontSize: "15px" }}>
          {question.question}
        </p>
        {open && (
          <p className="mt-2 text-sm" style={{ color: "#6B7280" }}>
            💡 {question.tip}
          </p>
        )}
      </div>

      {/* Mehr anzeigen Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex-shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-all"
        style={{
          border: "1px solid #E5E7EB",
          color: "#111827",
          backgroundColor: open ? "#F5F3FF" : "#FFFFFF",
        }}
      >
        {open ? "Weniger" : "Mehr anzeigen"}
        {open ? <IoChevronUp size={14} /> : <IoChevronDown size={14} />}
      </button>
    </li>
  );
}

export default function InterviewQuestionsCard({
  questions,
}: InterviewQuestionsCardProps) {
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? questions : questions.slice(0, INITIAL_COUNT);

  return (
    <div
      className="rounded-lg p-6 sm:p-8 border w-full"
      style={{ backgroundColor: "#FAFAFA", borderColor: "#E5E7EB" }}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <div
          className="flex rounded-full items-center justify-center bg-purple-100"
          style={{ width: "48px", height: "48px" }}
        >
          <BsChatLeftText size={18} color="#7C3AED" />
        </div>
        <h2 style={{ color: "#111827", fontSize: "24px", fontWeight: 600 }}>
          Mögliche Interviewfragen
        </h2>
      </div>

      {/* Questions */}
      <ul className="space-y-4 mb-6">
        {visible.map((item, index) => (
          <QuestionItem key={index} question={item} index={index} />
        ))}
      </ul>

      {/* Weitere Fragen anzeigen */}
      {questions.length > INITIAL_COUNT && (
        <div className="flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all"
            style={{
              border: "1px solid #E5E7EB",
              color: "#7C3AED",
              backgroundColor: "#FFFFFF",
            }}
          >
            {showAll ? "Weniger anzeigen" : "Weitere Fragen anzeigen"}
            {showAll ? <IoChevronUp size={16} /> : <IoChevronDown size={16} />}
          </button>
        </div>
      )}
    </div>
  );
}
