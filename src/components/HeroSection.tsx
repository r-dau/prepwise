import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <div className="mb-8 sm:mb-12 text-center w-full">
      <h2
        className="mb-4 sm:mb-6"
        style={{
          color: "var(--color-text-primary)",
          fontSize: "clamp(22px, 5vw, 32px)",
          fontWeight: 600,
        }}
      >
        {t("title")}
      </h2>
      <p
        className="mx-auto max-w-lg"
        style={{
          color: "var(--color-text-secondary)",
          fontSize: "16px",
        }}
      >
        {t("description")}
      </p>
    </div>
  );
}
