"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavBar() {
  const pathname = usePathname();

  const linkStyle = (path: string) => ({
    color:
      pathname === path ? "var(--color-primary)" : "var(--color-text-primary)",
    fontWeight: pathname === path ? 700 : 500,
  });

  const linkClass = (path: string) =>
    `px-3 sm:px-4 py-2 text-sm sm:text-base transition-all relative ${
      pathname === path
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

          {/* Navigation Links */}
          <div className="flex items-center gap-2 sm:gap-6">
            <Link href="/" className={linkClass("/")} style={linkStyle("/")}>
              Dashboard
            </Link>
            <Link
              href="/history"
              className={linkClass("/history")}
              style={linkStyle("/history")}
            >
              Historie
            </Link>
            <Link
              href="/about"
              className={linkClass("/about")}
              style={linkStyle("/about")}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
