/**
 * v2 — Structured strengths/gaps + preparation tips
 *
 * Changed strengths and skillGaps from plain strings to { label, detail }
 * objects, enabling expandable UI cards (accordion pattern) instead of
 * dumping long explanations directly in the layout. Added preparationTips
 * and per-question tips for interviewQuestions.
 *
 * Known issue: no length constraint on labels, so the LLM still returned
 * long compound phrases like "Kommunikationsfähigkeiten (nicht belegt)",
 * breaking the card layout on smaller screens. Fixed in v3.
 */

export function buildPromptV2(cv: string, jobDescription: string): string {
  return `Du bist ein erfahrener Tech-Recruiter. Analysiere den folgenden Lebenslauf und die Stellenanzeige.

LEBENSLAUF:
${cv}

STELLENANZEIGE:
${jobDescription}

Antworte NUR als JSON mit exakt dieser Struktur, ohne Markdown oder Erklärungen:
{
  "matchScore": 85,
  "matchSummary": "Kurze Zusammenfassung der Übereinstimmung",
  "strengths": [
    { "label": "AWS", "detail": "AWS-Kenntnisse fehlen vollständig..." }
  ],
  "skillGaps": [
    { "label": "AWS", "detail": "AWS-Kenntnisse fehlen vollständig..." }
  ],
  "preparationTips": [
    { "label": "AWS Grundlagen", "detail": "Mindestens AWS-Kernservices wie S3, EC2..." }
  ],
  "interviewQuestions": [
    { "question": "Frage 1", "category": "Technical", "tip": "Kurzer Hinweis wie man diese Frage am besten beantwortet" },
    { "question": "Frage 2", "category": "Behavioural", "tip": "Kurzer Hinweis wie man diese Frage am besten beantwortet" },
    { "question": "Frage 3", "category": "Skill Gap", "tip": "Kurzer Hinweis wie man diese Frage am besten beantwortet" }
  ]
}`;
}
