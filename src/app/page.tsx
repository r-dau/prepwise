import { LuUpload } from "react-icons/lu";
import { IoMdLock } from "react-icons/io";
import { GiNestedHexagons } from "react-icons/gi";
import { HiLightBulb } from "react-icons/hi";
import MatchScoreCard from "@/components/MatchScoreCard";

export default function Home() {
  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen flex flex-col items-center justify-center">
      <main className="w-full mx-auto py-8 sm:pt-8 lg:pt-12 sm:pb-4 lg:pb-4 px-6 sm:px-6 lg:px-8 flex flex-col items-center justify-center max-w-[1200px]">
        {/* Header Section */}
        <div className="mb-8 sm:mb-12 text-center w-full">
          <h2
            className="mb-4 sm:mb-6 text-text-secondary"
            style={{ color: "#111827", fontSize: "32px", fontWeight: 600 }}
          >
            Prepare smarter. Interview better.
          </h2>
          <p
            className="text-text-secondary mx-auto max-w-lg"
            style={{ color: "#6B7280", fontSize: "16px" }}
          >
            Analysiere deinen Lebenslauf und eine Stellenanzeige und erhalte
            personalisiertes Feedback, Skill Gaps und Interviewfragen.
          </p>
        </div>

        {/* Input Section */}
        <div className="mb-8 sm:mb-12 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div
              className="flex flex-col rounded-lg p-4 sm:p-6 border max-w-[550px] mx-auto w-full"
              style={{
                borderColor: "#E5E7EB",
                backgroundColor: "#FFFFFF",
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="flex rounded-full items-center justify-center text-white font-bold"
                  style={{
                    backgroundColor: "#7C3AED",
                    width: "32px",
                    height: "32px",
                  }}
                >
                  1
                </div>
                <label
                  style={{
                    color: "#111827",
                    fontSize: "16px",
                    fontWeight: 600,
                  }}
                  className="block mb-0"
                >
                  Dein Lebenslauf
                </label>
              </div>
              <textarea
                className="w-full h-32 p-4 rounded-lg border resize-none focus:outline-none focus:ring-2"
                style={{
                  borderColor: "#E5E7EB",
                  backgroundColor: "#FFFFFF",
                  color: "#111827",
                }}
                placeholder="Füge hier den Text deines Lebenslaufs ein"
              ></textarea>
              <div className="flex items-center gap-2 mt-4 ml-2 cursor-pointer">
                <LuUpload color="#7C3AED" />
                <p className="text-xs" style={{ color: "#7C3AED" }}>
                  oder Datei hochladen
                </p>
              </div>
            </div>
            <div
              className="flex flex-col rounded-lg p-4 sm:p-6 border max-w-[550px] mx-auto w-full"
              style={{
                borderColor: "#E5E7EB",
                backgroundColor: "#FFFFFF",
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="flex rounded-full items-center justify-center text-white font-bold"
                  style={{
                    backgroundColor: "#7C3AED",
                    width: "32px",
                    height: "32px",
                  }}
                >
                  2
                </div>
                <label
                  style={{
                    color: "#111827",
                    fontSize: "16px",
                    fontWeight: 600,
                  }}
                  className="block mb-0"
                >
                  Stellenanzeige
                </label>
              </div>
              <textarea
                className="w-full h-32 p-4 rounded-lg border resize-none focus:outline-none focus:ring-2"
                style={{
                  borderColor: "#E5E7EB",
                  backgroundColor: "#FFFFFF",
                  color: "#111827",
                }}
                placeholder="Füge hier den Text der Stellenanzeige ein"
              ></textarea>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4 sm:gap-6 items-center">
            <button
              className="flex items-center gap-2 w-full sm:w-auto px-20 py-3 rounded-lg text-white font-semibold transition-all hover:opacity-90"
              style={{
                backgroundColor: "#7C3AED",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              <GiNestedHexagons size={24} />
              Analyse starten
            </button>
            <div className="flex items-center gap-2 text-center">
              <IoMdLock color="#6A7282" />
              <p className="text-sm text-gray-500">
                Deine Daten werden nicht gespeichert und nur zur Analyse
                verwendet.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Results Section */}
      <section className="bg-[#F5F3FF] w-full">
        <div className="w-full mx-auto py-8 sm:py-12 lg:py-16 px-8 sm:px-6 lg:px-8 max-w-[1200px] flex flex-col items-center">
          <h2
            className="mb-6 sm:mb-8 w-full"
            style={{ color: "#111827", fontSize: "24px", fontWeight: 600 }}
          >
            Analyseergebnisse
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 mb-8 w-full">
            {/* Match Score Card */}
            <MatchScoreCard score={5} />

            {/* Skill Gap Card */}
            <div
              className="rounded-lg p-6 border max-w-none w-full md:col-span-2"
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "#E5E7EB",
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="flex rounded-full items-center justify-center bg-purple-100 mb-6"
                  style={{ width: "48px", height: "48px" }}
                >
                  <span className="text-purple-800 text-lg font-bold py-2 px-4 rounded-full">
                    SG
                  </span>
                </div>
                <h3
                  className="mb-6 font-semibold text-center"
                  style={{ color: "#111827", fontSize: "18px" }}
                >
                  Skill Gap Analyse
                </h3>
              </div>
              <p
                style={{ color: "#6B7280", fontSize: "14px" }}
                className="text-center mb-4"
              >
                Platzhalter für die Analyse fehlender Kompetenzen und
                empfohlener Entwicklungspfade.
              </p>
              <div className="p-4 bg-white rounded-lg text-center">
                <span
                  style={{
                    color: "#F59E0B",
                    fontSize: "24px",
                    fontWeight: 700,
                  }}
                >
                  🟡 3 Gaps
                </span>
              </div>
            </div>

            {/* Tips Card */}
            <div
              className="rounded-lg p-6 border max-w-[450px] mx-auto w-full md:col-span-1"
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "#E5E7EB",
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="flex rounded-full items-center justify-center bg-purple-100 mb-6"
                  style={{ width: "48px", height: "42px" }}
                >
                  <HiLightBulb size={18} color="#7C3AED" />
                </div>
                <h3
                  className="mb-6 font-semibold text-center"
                  style={{ color: "#111827", fontSize: "18px" }}
                >
                  Vorbereitungstipps
                </h3>
              </div>
              <p
                style={{ color: "#6B7280", fontSize: "14px" }}
                className="text-center mb-4"
              >
                Platzhalter für passende Tipps zur Vorbereitung auf das
                Vorstellungsgespräch.
              </p>
              <div className="p-4 bg-white rounded-lg text-center">
                <span
                  style={{
                    color: "#7C3AED",
                    fontSize: "18px",
                    fontWeight: 600,
                  }}
                >
                  5 Tipps verfügbar
                </span>
              </div>
            </div>
          </div>

          {/* Interview Questions */}
          <div
            className="rounded-lg p-6 sm:p-8 border w-full max-w-[1200px]"
            style={{
              backgroundColor: "#FAFAFA",
              borderColor: "#E5E7EB",
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <div
                className="flex rounded-full items-center justify-center bg-purple-100 mb-6"
                style={{ width: "48px", height: "48px" }}
              >
                <span className="text-purple-800 text-lg font-bold py-2 px-4 rounded-full">
                  MI
                </span>
              </div>
              <h2
                className="mb-6"
                style={{ color: "#111827", fontSize: "24px", fontWeight: 600 }}
              >
                Mögliche Interviewfragen
              </h2>
            </div>
            <ul className="space-y-4">
              <li
                className="p-4 rounded-lg"
                style={{
                  backgroundColor: "#FFFFFF",
                  color: "#6B7280",
                  fontSize: "16px",
                }}
              >
                <span style={{ color: "#7C3AED", fontWeight: 600 }}>•</span>
                <span className="ml-3">
                  Beschreibe eine Situation, in der du ein Problem erfolgreich
                  gelöst hast.
                </span>
              </li>
              <li
                className="p-4 rounded-lg"
                style={{
                  backgroundColor: "#FFFFFF",
                  color: "#6B7280",
                  fontSize: "16px",
                }}
              >
                <span style={{ color: "#7C3AED", fontWeight: 600 }}>•</span>
                <span className="ml-3">
                  Wie gehst du mit unerwarteten Herausforderungen im
                  Projektverlauf um?
                </span>
              </li>
              <li
                className="p-4 rounded-lg"
                style={{
                  backgroundColor: "#FFFFFF",
                  color: "#6B7280",
                  fontSize: "16px",
                }}
              >
                <span style={{ color: "#7C3AED", fontWeight: 600 }}>•</span>
                <span className="ml-3">
                  Welche Technologien oder Methoden möchtest du noch vertiefen?
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
