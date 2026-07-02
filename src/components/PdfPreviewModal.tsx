"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import {
  LuBold,
  LuItalic,
  LuUnderline,
  LuList,
  LuListOrdered,
} from "react-icons/lu";

interface PdfPreviewModalProps {
  initialText: string;
  onConfirm: (text: string) => void;
  onCancel: () => void;
}

function textToHtml(text: string): string {
  return text
    .split("\n")
    .map((line) => `<p>${line || "<br>"}</p>`)
    .join("");
}

function htmlToPlainText(html: string): string {
  const container = document.createElement("div");
  container.innerHTML = html;

  // Listen in "- Punkt" umwandeln
  container.querySelectorAll("li").forEach((li) => {
    li.textContent = `- ${li.textContent}`;
  });

  // Block-Elemente durch Zeilenumbrüche trennen
  const blocks = container.querySelectorAll("p, div, li, br");
  blocks.forEach((el) => {
    el.insertAdjacentText("afterend", "\n");
  });

  return (container.textContent || "")
    .split("\n")
    .map((line) => line.trim())
    .filter((line, i, arr) => !(line === "" && arr[i - 1] === ""))
    .join("\n")
    .trim();
}

export default function PdfPreviewModal({
  initialText,
  onConfirm,
  onCancel,
}: PdfPreviewModalProps) {
  const t = useTranslations("pdfPreviewModal");
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = textToHtml(initialText);
    }
  }, [initialText]);

  const exec = (command: string) => {
    document.execCommand(command);
    editorRef.current?.focus();
  };

  const handleConfirm = () => {
    const html = editorRef.current?.innerHTML ?? "";
    onConfirm(htmlToPlainText(html));
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div
        className="rounded-lg w-full max-w-2xl flex flex-col"
        style={{
          backgroundColor: "var(--color-background)",
          maxHeight: "85vh",
        }}
      >
        {/* Header */}
        <div className="p-6 pb-4">
          <h3
            className="mb-1 font-semibold"
            style={{ color: "var(--color-text-primary)", fontSize: "18px" }}
          >
            {t("title")}
          </h3>
          <p style={{ color: "var(--color-text-secondary)", fontSize: "14px" }}>
            {t("description")}
          </p>
        </div>

        {/* Toolbar */}
        <div
          className="flex items-center gap-1 px-6 py-2 border-t border-b"
          style={{ borderColor: "var(--color-border)" }}
        >
          <button
            type="button"
            title={t("bold")}
            onClick={() => exec("bold")}
            className="p-2 rounded-lg hover:opacity-70 transition-all"
            style={{ color: "var(--color-text-primary)" }}
          >
            <LuBold size={16} />
          </button>
          <button
            type="button"
            title={t("italic")}
            onClick={() => exec("italic")}
            className="p-2 rounded-lg hover:opacity-70 transition-all"
            style={{ color: "var(--color-text-primary)" }}
          >
            <LuItalic size={16} />
          </button>
          <button
            type="button"
            title={t("underline")}
            onClick={() => exec("underline")}
            className="p-2 rounded-lg hover:opacity-70 transition-all"
            style={{ color: "var(--color-text-primary)" }}
          >
            <LuUnderline size={16} />
          </button>
          <div
            className="w-px h-5 mx-1"
            style={{ backgroundColor: "var(--color-border)" }}
          />
          <button
            type="button"
            title={t("bulletList")}
            onClick={() => exec("insertUnorderedList")}
            className="p-2 rounded-lg hover:opacity-70 transition-all"
            style={{ color: "var(--color-text-primary)" }}
          >
            <LuList size={16} />
          </button>
          <button
            type="button"
            title={t("numberedList")}
            onClick={() => exec("insertOrderedList")}
            className="p-2 rounded-lg hover:opacity-70 transition-all"
            style={{ color: "var(--color-text-primary)" }}
          >
            <LuListOrdered size={16} />
          </button>
        </div>

        {/* Editable Content */}
        <div
          ref={editorRef}
          contentEditable
          suppressContentEditableWarning
          className="flex-1 overflow-y-auto px-6 py-4 focus:outline-none"
          style={{
            color: "var(--color-text-primary)",
            fontSize: "14px",
            lineHeight: 1.7,
            minHeight: "300px",
          }}
        />

        {/* Footer */}
        <div
          className="flex items-center justify-end gap-3 p-6 pt-4 border-t"
          style={{ borderColor: "var(--color-border)" }}
        >
          <button
            onClick={onCancel}
            className="px-5 py-2.5 rounded-lg font-medium text-sm transition-all hover:opacity-70"
            style={{
              border: "1px solid var(--color-border)",
              color: "var(--color-text-primary)",
            }}
          >
            {t("cancel")}
          </button>
          <button
            onClick={handleConfirm}
            className="px-5 py-2.5 rounded-lg text-white font-semibold text-sm transition-all hover:opacity-90"
            style={{ backgroundColor: "var(--color-primary)" }}
          >
            {t("confirm")}
          </button>
        </div>
      </div>
    </div>
  );
}
