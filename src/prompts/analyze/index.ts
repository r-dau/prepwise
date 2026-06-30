/**
 * Active prompt versions used in production, organized by language.
 * Older versions are kept in this folder for reference and to
 * demonstrate iterative prompt engineering.
 */
import { buildPromptV3 as buildPromptDe } from "./de/v3";
import { buildPromptV3 as buildPromptEn } from "./en/v3";

export function buildAnalyzePrompt(
  cv: string,
  jobDescription: string,
  locale: string = "de",
): string {
  return locale === "en"
    ? buildPromptEn(cv, jobDescription)
    : buildPromptDe(cv, jobDescription);
}
