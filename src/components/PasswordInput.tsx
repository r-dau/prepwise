"use client";

import { GiNestedHexagons } from "react-icons/gi";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";

interface PasswordInputProps {
  password: string;
  passwordValid: boolean | null;
  showPassword: boolean;
  loading: boolean;
  onPasswordChange: (value: string) => void;
  onTogglePassword: () => void;
  onAnalyze: () => void;
}

export default function PasswordInput({
  password,
  passwordValid,
  showPassword,
  loading,
  onPasswordChange,
  onTogglePassword,
  onAnalyze,
}: PasswordInputProps) {
  return (
    <div className="flex flex-col gap-2 w-full max-w-[550px] mx-auto sm:w-fit">
      <div className="flex items-center gap-2">
        <label
          className="text-sm font-medium"
          style={{ color: "var(--color-text-primary)" }}
        >
          Demo-Passwort
        </label>
        <div className="relative inline-block group">
          {/* Info Icon */}
          <IoIosInformationCircleOutline className="h-5 w-5 cursor-pointer text-gray-500" />

          {/* Tooltip */}
          <div className="absolute left-1/2 bottom-full z-10 mb-2 w-56 -translate-x-1/2 rounded-md bg-gray-900 px-3 py-2 text-sm text-white shadow-lg opacity-0 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none">
            Diese Demo ist passwortgeschützt, um Missbrauch und unnötige
            API-Kosten zu vermeiden. Das Passwort wird nur zur Freigabe der
            Analyse verwendet.
          </div>
        </div>
      </div>

      {/* Input + Button: untereinander auf Mobile, nebeneinander auf Desktop */}
      <div className="flex flex-col sm:flex-row items-stretch gap-2">
        <div className="relative w-full sm:w-72">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Passwort eingeben..."
            className="w-full p-3 pr-10 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
            style={{
              borderColor:
                passwordValid === false
                  ? "var(--color-error)"
                  : passwordValid === true
                    ? "var(--color-success)"
                    : "var(--color-border)",
              backgroundColor: "var(--color-background)",
              color: "var(--color-text-primary)",
            }}
            value={password ?? ""}
            onChange={(e) => onPasswordChange(e.target.value)}
          />
          <button
            type="button"
            onClick={onTogglePassword}
            className="absolute right-3 top-1/2 -translate-y-1/2"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {showPassword ? <IoEyeOff size={18} /> : <IoEye size={18} />}
          </button>
        </div>

        <button
          onClick={onAnalyze}
          disabled={loading || passwordValid !== true}
          className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-lg text-white font-semibold transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            backgroundColor: "var(--color-primary)",
            fontSize: "16px",
            fontWeight: 600,
          }}
        >
          <GiNestedHexagons size={20} />
          {loading ? "Analysiere..." : "Analyse starten"}
        </button>
      </div>

      {/* Live Feedback */}
      {passwordValid === false && (
        <p style={{ color: "var(--color-error)", fontSize: "13px" }}>
          ❌ Falsches Passwort
        </p>
      )}
      {passwordValid === true && (
        <p style={{ color: "var(--color-success)", fontSize: "13px" }}>
          ✅ Passwort korrekt
        </p>
      )}
    </div>
  );
}
