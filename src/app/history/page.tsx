"use client";

import dynamic from "next/dynamic";

const HistoryList = dynamic(() => import("./HistoryList"), { ssr: false });

export default function HistoryPage() {
  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen">
      <main className="w-full mx-auto py-8 sm:py-12 px-6 sm:px-8 max-w-[1200px]">
        <h2
          className="mb-2"
          style={{ color: "#111827", fontSize: "28px", fontWeight: 600 }}
        >
          Meine Analysen
        </h2>
        <p className="mb-8" style={{ color: "#6B7280", fontSize: "16px" }}>
          Alle gespeicherten Bewerbungsanalysen auf einen Blick.
        </p>
        <HistoryList />
      </main>
    </div>
  );
}
