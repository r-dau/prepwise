export default function HeroSection() {
  return (
    <div className="mb-8 sm:mb-12 text-center w-full">
      <h2
        className="mb-4 sm:mb-6"
        style={{
          color: "var(--color-text-primary)",
          fontSize: "32px",
          fontWeight: 600,
        }}
      >
        Prepare smarter. Interview better.
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
