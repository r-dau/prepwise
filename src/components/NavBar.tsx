"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export default function NavBar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const router = useRouter();

  // Aktuelle Sprache aus dem Pfad lesen
  const currentLocale = pathname.startsWith("/en") ? "en" : "de";

  // Pfad für die andere Sprache generieren
  const toggleLocale = () => {
    const newLocale = currentLocale === "de" ? "en" : "de";
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPath);
  };

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/de" || pathname === "/en";
    }

    return pathname.includes(path);
  };

  const linkStyle = (path: string) => ({
    color: isActive(path)
      ? "var(--color-primary)"
      : "var(--color-text-primary)",
    fontWeight: isActive(path) ? 700 : 500,
  });

  const linkClass = (path: string) =>
    `px-3 sm:px-4 py-2 text-sm sm:text-base transition-all relative ${
      isActive(path)
        ? "after:absolute after:bottom-[-17px] after:left-0 after:w-full after:h-[2px] after:bg-[var(--color-primary)]"
        : "hover:text-[var(--color-primary)] hover:after:absolute hover:after:bottom-[-17px] hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-[var(--color-primary)] after:transition-all"
    }`;

  return (
    <nav
      className="w-full border-b"
      style={{
        backgroundColor: "var(--color-background)",
        borderColor: "var(--color-border)",
      }}
    >
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <Image src="/logo-icon.svg" alt="Prepwise" width={36} height={36} />
            <span
              className="font-bold text-sm sm:text-base hidden sm:inline"
              style={{ color: "var(--color-text-primary)" }}
            >
              PrepWise | Portfolio Projekt
            </span>
          </Link>

          <div className="flex items-center gap-2 sm:gap-6">
            <Link href="/" className={linkClass("/")} style={linkStyle("/")}>
              {t("dashboard")}
            </Link>
            <Link
              href="/history"
              className={linkClass("/history")}
              style={linkStyle("/history")}
            >
              {t("history")}
            </Link>
            <Link
              href="/about"
              className={linkClass("/about")}
              style={linkStyle("/about")}
            >
              {t("about")}
            </Link>

            {/* Language Switcher */}
            <button
              onClick={toggleLocale}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all hover:opacity-70"
              style={{
                border: "1px solid var(--color-border)",
                color: "var(--color-text-secondary)",
                backgroundColor: "var(--color-background)",
              }}
            >
              {currentLocale === "de" ? "🇬🇧 EN" : "🇩🇪 DE"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
