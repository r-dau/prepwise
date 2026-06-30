"use client";

import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";

const HistoryList = dynamic(() => import("./HistoryList"), { ssr: false });

export default function HistoryPage() {
  const t = useTranslations("history");

  return (
    <div
      className="w-full min-h-screen"
      style={{ backgroundColor: "var(--color-background-alt)" }}
    >
      <main className="w-full mx-auto py-8 sm:py-12 px-6 sm:px-8 max-w-[1200px]">
        <h2
          className="mb-2"
          style={{
            color: "var(--color-text-primary)",
            fontSize: "28px",
            fontWeight: 600,
          }}
        >
          {t("title")}
        </h2>
        <p
          className="mb-8"
          style={{ color: "var(--color-text-secondary)", fontSize: "16px" }}
        >
          {t("description")}
        </p>
        <HistoryList />
      </main>
    </div>
  );
}
