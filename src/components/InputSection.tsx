import { LuUpload } from "react-icons/lu";

interface InputSectionProps {
  cv: string;
  jobDescription: string;
  cvFileName: string | null;
  uploadError: string | null;
  onCvChange: (value: string) => void;
  onJobDescriptionChange: (value: string) => void;
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputSection({
  cv,
  jobDescription,
  cvFileName,
  uploadError,
  onCvChange,
  onJobDescriptionChange,
  onFileUpload,
}: InputSectionProps) {
  return (
    <div className="mb-4 sm:mb-6 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-4">
        {/* CV Input */}
        <div
          className="flex flex-col rounded-lg p-4 sm:p-6 border max-w-[550px] mx-auto w-full"
          style={{
            borderColor: "var(--color-border)",
            backgroundColor: "var(--color-background)",
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <div
              className="flex rounded-full items-center justify-center text-white font-bold"
              style={{
                backgroundColor: "var(--color-primary)",
                width: "32px",
                height: "32px",
              }}
            >
              1
            </div>
            <label
              style={{
                color: "var(--color-text-primary)",
                fontSize: "16px",
                fontWeight: 600,
              }}
            >
              Dein Lebenslauf
            </label>
          </div>
          <textarea
            className="w-full h-32 p-4 rounded-lg border resize-none focus:outline-none focus:ring-2"
            style={{
              borderColor: "var(--color-border)",
              backgroundColor: "var(--color-background)",
              color: "var(--color-text-primary)",
            }}
            placeholder="Füge hier den Text deines Lebenslaufs ein"
            value={cv}
            onChange={(e) => onCvChange(e.target.value)}
          />
          {/* Upload Button */}
          <div className="mt-4 ml-2">
            <label className="flex items-center gap-2 cursor-pointer w-fit">
              <LuUpload color="var(--color-primary)" />
              <p className="text-xs" style={{ color: "var(--color-primary)" }}>
                oder Datei hochladen
              </p>
              <input
                type="file"
                accept=".pdf,.docx"
                className="hidden"
                onChange={onFileUpload}
              />
            </label>
            {cvFileName && (
              <p
                className="text-xs mt-1 ml-6"
                style={{ color: "var(--color-success)" }}
              >
                ✅ {cvFileName} geladen
              </p>
            )}
            {uploadError && (
              <p
                className="text-xs mt-1 ml-6"
                style={{ color: "var(--color-error)" }}
              >
                ❌ {uploadError}
              </p>
            )}
          </div>
        </div>

        {/* Job Description Input */}
        <div
          className="flex flex-col rounded-lg p-4 sm:p-6 border max-w-[550px] mx-auto w-full"
          style={{
            borderColor: "var(--color-border)",
            backgroundColor: "var(--color-background)",
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <div
              className="flex rounded-full items-center justify-center text-white font-bold"
              style={{
                backgroundColor: "var(--color-primary)",
                width: "32px",
                height: "32px",
              }}
            >
              2
            </div>
            <label
              style={{
                color: "var(--color-text-primary)",
                fontSize: "16px",
                fontWeight: 600,
              }}
            >
              Stellenanzeige
            </label>
          </div>
          <textarea
            className="w-full h-32 p-4 rounded-lg border resize-none focus:outline-none focus:ring-2"
            style={{
              borderColor: "var(--color-border)",
              backgroundColor: "var(--color-background)",
              color: "var(--color-text-primary)",
            }}
            placeholder="Füge hier den Text der Stellenanzeige ein"
            value={jobDescription}
            onChange={(e) => onJobDescriptionChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
