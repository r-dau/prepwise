"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

interface JobTitleModalProps {
  onConfirm: (title: string) => void;
}

export default function JobTitleModal({ onConfirm }: JobTitleModalProps) {
  const [title, setTitle] = useState("");
  const t = useTranslations("jobTitleModal");

  const handleConfirm = () => {
    onConfirm(title.trim() || t("defaultTitle"));
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div
        className="rounded-lg p-6 w-full max-w-md"
        style={{ backgroundColor: "var(--color-background)" }}
      >
        <h3
          className="mb-2 font-semibold"
          style={{ color: "var(--color-text-primary)", fontSize: "18px" }}
        >
          {t("title")}
        </h3>
        <p
          className="mb-4"
          style={{ color: "var(--color-text-secondary)", fontSize: "14px" }}
        >
          {t("description")}
        </p>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={t("placeholder")}
          autoFocus
          onKeyDown={(e) => e.key === "Enter" && handleConfirm()}
          className="w-full p-3 rounded-lg border text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-purple-300"
          style={{
            borderColor: "var(--color-border)",
            backgroundColor: "var(--color-background)",
            color: "var(--color-text-primary)",
          }}
        />
        <button
          onClick={handleConfirm}
          className="w-full py-3 rounded-lg text-white font-semibold transition-all hover:opacity-90"
          style={{ backgroundColor: "var(--color-primary)" }}
        >
          {t("confirm")}
        </button>
      </div>
    </div>
  );
}
