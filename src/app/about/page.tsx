import Image from "next/image";

import { FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import { HiLightBulb } from "react-icons/hi";
import { BsChatLeftText } from "react-icons/bs";
import { LuSquareCheckBig } from "react-icons/lu";

const skills = [
  "React & Next.js (App Router)",
  "TypeScript",
  "Anthropic API & Prompt Engineering",
  "REST API Routes",
  "localStorage & State Management",
  "Responsive Design mit Tailwind CSS",
  "Git Workflow mit Feature Branches & PRs",
  "Deployment mit Vercel",
];

const features = [
  {
    icon: <TbTargetArrow size={20} color="#7C3AED" />,
    title: "Match Score Analyse",
    description:
      "AI-gestützte Bewertung wie gut dein Profil zur Stelle passt – mit konkretem Prozentwert und Zusammenfassung.",
  },
  {
    icon: <LuSquareCheckBig size={20} color="#7C3AED" />,
    title: "Skill Gap Analyse",
    description:
      "Identifikation fehlender Kompetenzen und deiner Stärken im direkten Vergleich mit der Stellenanzeige.",
  },
  {
    icon: <HiLightBulb size={20} color="#7C3AED" />,
    title: "Vorbereitungstipps",
    description:
      "Personalisierte Empfehlungen was du vor dem Interview vertiefen oder vorbereiten solltest.",
  },
  {
    icon: <BsChatLeftText size={20} color="#7C3AED" />,
    title: "Interviewfragen",
    description:
      "Mögliche Fragen die im Interview auf dich zukommen könnten – mit Tipps wie du sie am besten beantwortest.",
  },
];

export default function AboutPage() {
  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen">
      <main className="w-full mx-auto py-8 sm:py-12 px-6 sm:px-8 max-w-[900px]">
        {/* Hero */}
        <div className="mb-12 text-center">
          <Image
            src="/logo-icon.svg"
            alt="Prepwise"
            width={56}
            height={56}
            className="mx-auto mb-4"
          />

          <h1
            className="mb-4"
            style={{ color: "#111827", fontSize: "36px", fontWeight: 700 }}
          >
            Über Prepwise
          </h1>
          <p
            style={{
              color: "#6B7280",
              fontSize: "18px",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            A portfolio project built to demonstrate modern full-stack
            development skills — and to solve a real problem I faced during my
            own job search.
          </p>
        </div>

        {/* Warum Prepwise */}
        <div
          className="rounded-lg p-8 border mb-8"
          style={{ backgroundColor: "#FFFFFF", borderColor: "#E5E7EB" }}
        >
          <h2
            className="mb-4"
            style={{ color: "#111827", fontSize: "22px", fontWeight: 600 }}
          >
            🇩🇪 Warum Prepwise?
          </h2>
          <p style={{ color: "#6B7280", fontSize: "16px", lineHeight: "1.8" }}>
            Während meiner eigenen Jobsuche als Frontend Developer habe ich
            gemerkt: Es ist schwer einzuschätzen, wie gut das eigene Profil
            wirklich zu einer Stelle passt – und noch schwerer, sich gezielt auf
            die richtigen Fragen vorzubereiten. Prepwise löst genau dieses
            Problem. Mit KI-Unterstützung analysiert es deinen Lebenslauf und
            eine Stellenanzeige und gibt dir konkretes, personalisiertes
            Feedback – damit du besser vorbereitet ins Interview gehst.
          </p>
        </div>

        <div
          className="rounded-lg p-8 border mb-8"
          style={{ backgroundColor: "#FFFFFF", borderColor: "#E5E7EB" }}
        >
          <h2
            className="mb-4"
            style={{ color: "#111827", fontSize: "22px", fontWeight: 600 }}
          >
            🇬🇧 Why Prepwise?
          </h2>
          <p style={{ color: "#6B7280", fontSize: "16px", lineHeight: "1.8" }}>
            During my own job search as a Frontend Developer, I realized how
            hard it is to objectively assess how well your profile matches a job
            posting — and even harder to know which interview questions to
            prepare for. Prepwise solves exactly that. Using AI, it analyses
            your CV and a job description and gives you concrete, personalised
            feedback — so you walk into your next interview better prepared and
            more confident.
          </p>
        </div>

        {/* Features */}
        <div
          className="rounded-lg p-8 border mb-8"
          style={{ backgroundColor: "#FFFFFF", borderColor: "#E5E7EB" }}
        >
          <h2
            className="mb-6"
            style={{ color: "#111827", fontSize: "22px", fontWeight: 600 }}
          >
            Was Prepwise kann
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div
                  className="flex rounded-full items-center justify-center bg-purple-100 flex-shrink-0"
                  style={{ width: "40px", height: "40px" }}
                >
                  {feature.icon}
                </div>
                <div>
                  <p
                    style={{
                      color: "#111827",
                      fontSize: "15px",
                      fontWeight: 600,
                    }}
                    className="mb-1"
                  >
                    {feature.title}
                  </p>
                  <p
                    style={{
                      color: "#6B7280",
                      fontSize: "14px",
                      lineHeight: "1.6",
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div
          className="rounded-lg p-8 border mb-8"
          style={{ backgroundColor: "#FFFFFF", borderColor: "#E5E7EB" }}
        >
          <h2
            className="mb-6"
            style={{ color: "#111827", fontSize: "22px", fontWeight: 600 }}
          >
            Tech Stack & Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1.5 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: "#F5F3FF",
                  color: "#7C3AED",
                  border: "1px solid #E5E7EB",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* About Me + CTA */}
        <div
          className="rounded-lg p-8 border mb-8 text-center"
          style={{ backgroundColor: "#F5F3FF", borderColor: "#E5E7EB" }}
        >
          <h2
            className="mb-4"
            style={{ color: "#111827", fontSize: "22px", fontWeight: 600 }}
          >
            Built by Richard Dau
          </h2>
          <p
            style={{
              color: "#6B7280",
              fontSize: "16px",
              lineHeight: "1.8",
              maxWidth: "560px",
              margin: "0 auto 24px",
            }}
          >
            Frontend Developer with a passion for building clean, user-friendly
            products. Currently looking for new opportunities — feel free to
            reach out!
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/r-dau"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all hover:opacity-80"
              style={{ backgroundColor: "#111827", color: "#FFFFFF" }}
            >
              <FiGithub size={18} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/richard-dau/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all hover:opacity-80"
              style={{ backgroundColor: "#0A66C2", color: "#FFFFFF" }}
            >
              <FaLinkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
