import Image from "next/image";
import { FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="w-full border-t mt-auto py-6 px-6"
      style={{
        backgroundColor: "var(--color-background)",
        borderColor: "var(--color-border)",
      }}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Logo + Copyright */}
        <div className="flex items-center gap-3">
          <Image src="/logo-icon.svg" alt="Prepwise" width={36} height={36} />
          <p style={{ color: "var(--color-text-secondary)", fontSize: "13px" }}>
            © {new Date().getFullYear()} PrepWise · Built by Richard Dau
          </p>
        </div>

        {/* Right: Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/r-dau"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-opacity hover:opacity-70"
            style={{ color: "var(--color-text-secondary)", fontSize: "13px" }}
          >
            <FiGithub size={16} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/richard-dau/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-opacity hover:opacity-70"
            style={{ color: "var(--color-text-secondary)", fontSize: "13px" }}
          >
            <FaLinkedin size={16} />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
