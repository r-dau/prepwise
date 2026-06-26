"use client";

import { useState } from "react";
import { HiLightBulb } from "react-icons/hi";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

interface PreparationTipsCardProps {
  tips: { label: string; detail: string }[];
}

function AccordionItem({ label, detail }: { label: string; detail: string }) {
  const [open, setOpen] = useState(false);

  return (
    <li>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-left px-4 py-2 rounded-full"
        style={{
          backgroundColor: "#F5F3FF",
          border: "1px solid #E5E7EB",
        }}
      >
        <span style={{ color: "#7C3AED", fontSize: "14px", fontWeight: 500 }}>
          {label}
        </span>
        {open ? (
          <IoChevronUp size={14} color="#7C3AED" />
        ) : (
          <IoChevronDown size={14} color="#7C3AED" />
        )}
      </button>
      {open && (
        <p className="mt-2 px-2 text-sm" style={{ color: "#6B7280" }}>
          {detail}
        </p>
      )}
    </li>
  );
}

export default function PreparationTipsCard({
  tips,
}: PreparationTipsCardProps) {
  return (
    <div
      className="rounded-lg p-6 border w-full md:col-span-1"
      style={{ backgroundColor: "#FFFFFF", borderColor: "#E5E7EB" }}
    >
      <div className="flex items-center gap-2 mb-4">
        <div
          className="flex rounded-full items-center justify-center bg-purple-100"
          style={{ width: "48px", height: "42px" }}
        >
          <HiLightBulb size={24} color="#7C3AED" />
        </div>
        <h3 style={{ color: "#111827", fontSize: "18px", fontWeight: 600 }}>
          Vorbereitungstipps
        </h3>
      </div>
      <p className="mb-4" style={{ color: "#6B7280", fontSize: "14px" }}>
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
