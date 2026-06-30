import { useTranslations } from "next-intl";
import { BsShield } from "react-icons/bs";

export default function PrivacyBanner() {
  const t = useTranslations("privacy");

  return (
    <div
      className="flex bg-violet-50 rounded-lg border border-violet-200 text-gray-700 gap-4 p-4 mb-6 w-full"
      role="alert"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-100">
        <BsShield size={24} color="var(--color-primary)" />
      </div>
      <div className="flex flex-col gap-2">
        <h3
          className="font-semibold"
          style={{ color: "var(--color-text-primary)", fontSize: "16px" }}
        >
          {t("title")}
        </h3>
        <p style={{ color: "var(--color-text-secondary)", fontSize: "14px" }}>
          {t("description")}
        </p>
      </div>
    </div>
  );
}
