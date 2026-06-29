import { TbTargetArrow } from "react-icons/tb";

interface MatchScoreCardProps {
  score: number;
}

export default function MatchScoreCard({ score }: MatchScoreCardProps) {
  const getColor = () => {
    if (score >= 90) return "#16A34A";
    if (score >= 75) return "#22C55E";
    if (score >= 60) return "#FDD017";
    if (score >= 40) return "#F97316";
    return "#EF4444";
  };

  const getLabel = () => {
    if (score >= 75) return "Gute Übereinstimmung";
    if (score >= 50) return "Mittlere Übereinstimmung";
    return "Geringe Übereinstimmung";
  };

  const getMotivation = () => {
    if (score >= 75) return "Du passt gut zu dieser Stelle! 💪";
    if (score >= 50) return "Mit etwas Vorbereitung bist du dabei! 📚";
    return "Fokussiere dich auf die Skill Gaps! 🎯";
  };

  const circumference = 2 * Math.PI * 54;
  const strokeDasharray = (circumference * score) / 100;
  const color = getColor();

  return (
    <div
      className="rounded-lg p-6 border w-full h-full"
      style={{
        backgroundColor: "var(--color-background)",
        borderColor: "var(--color-border)",
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <div
          className="flex rounded-full items-center justify-center bg-purple-100 flex-shrink-0"
          style={{ width: "42px", height: "42px" }}
        >
          <TbTargetArrow color="var(--color-primary)" size={22} />
        </div>
        <h3
          className="font-semibold whitespace-nowrap"
          style={{ color: "var(--color-text-primary)", fontSize: "18px" }}
        >
          Match Score
        </h3>
      </div>

      {/* Ring */}
      <div className="flex flex-col items-center">
        <div className="relative flex items-center justify-center">
          <svg width="140" height="140" viewBox="0 0 120 120">
            <circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="8"
            />
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
          {/* Score inside ring */}
          <div className="absolute flex items-center justify-center">
            <span
              style={{
                color: "#111827",
                fontSize: "26px",
                fontWeight: 700,
                lineHeight: 1,
              }}
            >
              {score}
            </span>
            <span style={{ color: "#6B7280", fontSize: "12px" }}>%</span>
          </div>
        </div>

        {/* Label */}
        <p className="mt-4 font-semibold" style={{ color, fontSize: "16px" }}>
          {getLabel()}
        </p>

        {/* Motivation */}
        <p className="mt-2 text-center text-sm" style={{ color: "#6B7280" }}>
          {getMotivation()}
        </p>
      </div>
    </div>
  );
}
