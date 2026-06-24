interface MatchScoreCardProps {
  score: number; // 0-100
}

export default function MatchScoreCard({ score }: MatchScoreCardProps) {
  // Determine color based on score
  const getColor = () => {
    if (score >= 75) return "#22C55E"; // Green
    if (score >= 50) return "#F59E0B"; // Amber
    return "#EF4444"; // Red
  };

  const getLabel = () => {
    if (score >= 75) return "Gut";
    if (score >= 50) return "Durchschnittlich";
    return "Verbesserungsbedarf";
  };

  // Calculate circle progress
  const circumference = 2 * Math.PI * 54; // radius = 54
  const strokeDasharray = (circumference * score) / 100;

  const color = getColor();

  return (
    <div
      className="rounded-lg p-6 border max-w-[450px] mx-auto w-full md:col-span-1"
      style={{
        backgroundColor: "#FFFFFF",
        borderColor: "#E5E7EB",
      }}
    >
      <div className="flex items-center gap-2 mb-6">
        <div
          className="flex rounded-full items-center justify-center bg-purple-100"
          style={{ width: "48px", height: "48px" }}
        >
          <span className="text-purple-800 text-lg font-bold">MS</span>
        </div>
        <h3
          className="font-semibold"
          style={{ color: "#111827", fontSize: "18px" }}
        >
          Match Score
        </h3>
      </div>
      <p
        style={{ color: "#6B7280", fontSize: "14px" }}
        className="text-center mb-6"
      >
        Platzhalter für die Auswertung der Übereinstimmung zwischen Lebenslauf
        und Stellenanzeige.
      </p>
      <div className="flex flex-col items-center">
        <svg width="120" height="120" viewBox="0 0 120 120">
          {/* Background Circle */}
          <circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="8"
          />
          {/* Progress Circle */}
          <circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeDasharray={`${strokeDasharray} ${circumference}`}
            strokeLinecap="round"
            style={{
              transform: "rotate(-90deg)",
              transformOrigin: "60px 60px",
              transition: "stroke-dasharray 0.5s ease, stroke 0.5s ease",
            }}
          />
        </svg>
        <span
          className="mt-4 font-bold"
          style={{
            color: color,
            fontSize: "28px",
            fontWeight: 700,
          }}
        >
          {score}%
        </span>
        <p className="text-sm mt-2" style={{ color: "#6B7280" }}>
          {getLabel()}
        </p>
      </div>
    </div>
  );
}
