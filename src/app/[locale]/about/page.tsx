import Image from "next/image";
import { useTranslations } from "next-intl";
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

export default function AboutPage() {
  const t = useTranslations("about");

  const features = [
    {
      icon: <TbTargetArrow size={20} color="var(--color-primary)" />,
      title: t("feature1Title"),
      description: t("feature1Description"),
    },
    {
      icon: <LuSquareCheckBig size={20} color="var(--color-primary)" />,
      title: t("feature2Title"),
      description: t("feature2Description"),
    },
    {
      icon: <HiLightBulb size={20} color="var(--color-primary)" />,
      title: t("feature3Title"),
      description: t("feature3Description"),
    },
    {
      icon: <BsChatLeftText size={20} color="var(--color-primary)" />,
      title: t("feature4Title"),
      description: t("feature4Description"),
    },
  ];

  return (
    <div
      className="w-full min-h-screen"
      style={{ backgroundColor: "var(--color-background-alt)" }}
    >
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
            style={{
              color: "var(--color-text-primary)",
              fontSize: "36px",
              fontWeight: 700,
            }}
          >
            {t("title")}
          </h1>
          <p
            style={{
              color: "var(--color-text-secondary)",
              fontSize: "18px",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            {t("subtitle")}
          </p>
        </div>

        {/* Why Prepwise */}
        <div
          className="rounded-lg p-8 border mb-8"
          style={{
            backgroundColor: "var(--color-background)",
            borderColor: "var(--color-border)",
          }}
        >
          <h2
            className="mb-4"
            style={{
              color: "var(--color-text-primary)",
              fontSize: "22px",
              fontWeight: 600,
            }}
          >
            {t("whyTitle")}
          </h2>
          <p
            style={{
              color: "var(--color-text-secondary)",
              fontSize: "16px",
              lineHeight: "1.8",
            }}
          >
            {t("whyText")}
          </p>
        </div>

        {/* Features */}
        <div
          className="rounded-lg p-8 border mb-8"
          style={{
            backgroundColor: "var(--color-background)",
            borderColor: "var(--color-border)",
          }}
        >
          <h2
            className="mb-6"
            style={{
              color: "var(--color-text-primary)",
              fontSize: "22px",
              fontWeight: 600,
            }}
          >
            {t("featuresTitle")}
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
                      color: "var(--color-text-primary)",
                      fontSize: "15px",
                      fontWeight: 600,
                    }}
                    className="mb-1"
                  >
                    {feature.title}
                  </p>
                  <p
                    style={{
                      color: "var(--color-text-secondary)",
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
          style={{
            backgroundColor: "var(--color-background)",
            borderColor: "var(--color-border)",
          }}
        >
          <h2
            className="mb-6"
            style={{
              color: "var(--color-text-primary)",
              fontSize: "22px",
              fontWeight: 600,
            }}
          >
            {t("techStackTitle")}
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1.5 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: "var(--color-background-light)",
                  color: "var(--color-primary)",
                  border: "1px solid var(--color-border)",
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
          style={{
            backgroundColor: "var(--color-background-light)",
            borderColor: "var(--color-border)",
          }}
        >
          <h2
            className="mb-4"
            style={{
              color: "var(--color-text-primary)",
              fontSize: "22px",
              fontWeight: 600,
            }}
          >
            {t("builtBy")}
          </h2>
          <p
            style={{
              color: "var(--color-text-secondary)",
              fontSize: "16px",
              lineHeight: "1.8",
              maxWidth: "560px",
              margin: "0 auto 24px",
            }}
          >
            {t("bio")}
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/r-dau"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all hover:opacity-80"
              style={{
                backgroundColor: "var(--color-text-primary)",
                color: "#FFFFFF",
              }}
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
