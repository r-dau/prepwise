"use client";

export default function NavBar() {
  return (
    <nav
      className="w-full border-b"
      style={{
        backgroundColor: "#FFFFFF",
        borderColor: "#E5E7EB",
      }}
    >
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Name - Left */}
          <div className="flex items-center gap-2 sm:gap-3">
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
              PrepWise
            </span>
          </div>

          {/* Navigation Links - Right */}
          <div className="flex items-center gap-2 sm:gap-6">
            <a
              href="#dashboard"
              className="px-3 sm:px-4 py-2 rounded-lg transition-all text-sm sm:text-base font-medium"
              style={{
                color: "#111827",
                borderColor: "#E5E7EB",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#F5F3FF";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              Dashboard
            </a>
            <a
              href="#history"
              className="px-3 sm:px-4 py-2 rounded-lg transition-all text-sm sm:text-base font-medium"
              style={{
                color: "#111827",
                borderColor: "#E5E7EB",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#F5F3FF";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              Historie
            </a>
            <a
              href="#about"
              className="px-3 sm:px-4 py-2 rounded-lg border transition-all text-sm sm:text-base font-medium"
              style={{
                color: "#111827",
                borderColor: "#E5E7EB",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#F5F3FF";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
