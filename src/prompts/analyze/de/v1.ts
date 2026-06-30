/**
 * v1 — Initial prompt
 *
 * First working version of the analysis prompt. Returns a structured
 * JSON with match score, strengths, skill gaps, preparation tips and
 * interview questions.
 *
 * Known issue: labels for strengths/skillGaps/preparationTips could be
 * arbitrarily long (e.g. "Testing-Mindset (Jest)"), causing text overflow
 * and broken layouts in the UI cards. Fixed in v2.
 */

export function buildPromptV1(cv: string, jobDescription: string): string {
  return `Du bist ein erfahrener Tech-Recruiter. Analysiere den folgenden Lebenslauf und die Stellenanzeige.

LEBENSLAUF:
${cv}

STELLENANZEIGE:
${jobDescription}

Antworte NUR als JSON mit exakt dieser Struktur, ohne Markdown oder Erklärungen:
{
  "matchScore": 85,
  "matchSummary": "Kurze Zusammenfassung der Übereinstimmung",
  "strengths": ["Stärke 1", "Stärke 2", "Stärke 3"],
  "skillGaps": ["Gap 1", "Gap 2"],
  "interviewQuestions": [
    { "question": "Frage 1", "category": "Technical" },
    { "question": "Frage 2", "category": "Behavioural" },
    { "question": "Frage 3", "category": "Skill Gap" }
  ]
}`;
}
