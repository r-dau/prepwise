"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavBar() {
  const pathname = usePathname();

  const linkStyle = (path: string) => ({
    color: pathname === path ? "#7C3AED" : "#111827",
    fontWeight: pathname === path ? 700 : 500,
  });

  const linkClass = (path: string) =>
    `px-3 sm:px-4 py-2 text-sm sm:text-base transition-all relative ${
      pathname === path
        ? "after:absolute after:bottom-[-17px] after:left-0 after:w-full after:h-[2px] after:bg-[#7C3AED]"
        : "hover:text-[#7C3AED]"
    }`;

  return (
    <nav
      className="w-full border-b"
      style={{ backgroundColor: "#FFFFFF", borderColor: "#E5E7EB" }}
    >
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <div
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center font-bold text-white text-xs sm:text-sm"
              style={{ backgroundColor: "#7C3AED" }}
            >
              PW
            </div>
            <span
              className="font-bold text-sm sm:text-base hidden sm:inline"
              style={{ color: "#111827" }}
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
