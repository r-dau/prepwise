export default function HeroSection() {
  return (
    <div className="mb-8 sm:mb-12 text-center w-full">
      <h2
        className="mb-4 sm:mb-6"
        style={{
          color: "var(--color-text-primary)",
          fontSize: "clamp(22px, 5vw, 32px)",
          fontWeight: 600,
          lineHeight: 1.3,
        }}
      >
        Prepare smarter.{" "}
        <span className="block sm:inline">Interview better.</span>
      </h2>
      <p
        className="mx-auto max-w-lg"
        style={{
          color: "var(--color-text-secondary)",
          fontSize: "16px",
        }}
      >
        Analysiere deinen Lebenslauf und eine Stellenanzeige und erhalte
        personalisiertes Feedback, Skill Gaps und Interviewfragen.
      </p>
    </div>
  );
}
