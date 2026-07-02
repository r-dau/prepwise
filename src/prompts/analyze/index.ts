/**
 * Active prompt versions used in production, organized by language.
 * Older versions are kept in this folder for reference and to
 * demonstrate iterative prompt engineering.
 */

import { buildPromptV5 as buildPromptDe } from "./de/v5";
import { buildPromptV5 as buildPromptEn } from "./en/v5";

export function buildAnalyzePrompt(
  cv: string,
  jobDescription: string,
  locale: string = "de",
): string {
  const currentDate =
    locale === "en"
      ? new Date().toLocaleDateString("en-US", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })
      : new Date().toLocaleDateString("de-DE", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        });

  return locale === "en"
    ? buildPromptEn(cv, jobDescription, currentDate)
    : buildPromptDe(cv, jobDescription, currentDate);
}
