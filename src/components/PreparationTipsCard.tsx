"use client";

import { useState } from "react";
import { HiLightBulb } from "react-icons/hi";
import { IoChevronDown } from "react-icons/io5";

interface PreparationTipsCardProps {
  tips: { label: string; detail: string }[];
}

function AccordionItem({ label, detail }: { label: string; detail: string }) {
  const [open, setOpen] = useState(false);

  return (
    <li>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-left px-3 py-2 rounded-lg"
        style={{
          backgroundColor: "var(--color-background-light)",
          border: "1px solid var(--color-border)",
        }}
      >
        <span
          className="flex-1 pr-2"
          style={{
            color: "var(--color-primary)",
            fontSize: "13px",
            fontWeight: 500,
            lineHeight: 1.4,
          }}
        >
          {label}
        </span>
        <span className="flex-shrink-0">
          <IoChevronDown
            size={14}
            color="var(--color-primary)"
            style={{
              transform: open ? "rotate(180deg)" : "none",
              transition: "transform 0.2s",
            }}
          />
        </span>
      </button>

      {/* Detail innerhalb des Chip-Containers */}
      {open && (
        <div
          className="px-3 py-2 rounded-b-lg -mt-1"
          style={{
            backgroundColor: "var(--color-background-light)",
            border: "1px solid var(--color-border)",
            borderTop: "none",
          }}
        >
          <p
            style={{
              color: "var(--color-text-secondary)",
              fontSize: "13px",
              lineHeight: 1.5,
            }}
          >
            {detail}
          </p>
        </div>
      )}
    </li>
  );
}

export default function PreparationTipsCard({
  tips,
}: PreparationTipsCardProps) {
  return (
    <div
      className="rounded-lg p-4 border w-full h-full"
      style={{
        backgroundColor: "var(--color-background)",
        borderColor: "var(--color-border)",
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div
          className="flex rounded-full items-center justify-center bg-purple-100 flex-shrink-0"
          style={{ width: "40px", height: "40px" }}
        >
          <HiLightBulb size={20} color="var(--color-primary)" />
        </div>
        <h3
          style={{
            color: "var(--color-text-primary)",
            fontSize: "16px",
            fontWeight: 600,
            lineHeight: 1.3,
          }}
        >
          Vorbereitungstipps
        </h3>
      </div>

      <p
        className="mb-3"
        style={{ color: "var(--color-text-secondary)", fontSize: "13px" }}
      >
        Basierend auf dieser Stelle solltest du dich besonders mit folgenden
        Themen beschäftigen:
      </p>

      <ul className="flex flex-col gap-2">
        {tips.map((tip, index) => (
          <AccordionItem key={index} label={tip.label} detail={tip.detail} />
        ))}
      </ul>
    </div>
  );
}
