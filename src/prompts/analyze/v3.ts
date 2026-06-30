/**
 * v3 — Label length constraints + job title extraction
 *
 * Added explicit max-length rules for labels (20 chars for
 * strengths/skillGaps, 30 chars for preparationTips) after observing
 * that the LLM defaulted to long, descriptive phrases that broke the
 * card UI. Added good/bad examples to steer the model more reliably
 * than a length constraint alone.
 *
 * Also added jobTitle extraction to auto-populate the history entry
 * title, removing the need for users to manually name each analysis.
 */

export function buildPromptV3(cv: string, jobDescription: string): string {
  return `Du bist ein erfahrener Tech-Recruiter. Analysiere den folgenden Lebenslauf und die Stellenanzeige.

LEBENSLAUF:
${cv}

STELLENANZEIGE:
${jobDescription}

Antworte NUR als JSON mit exakt dieser Struktur, ohne Markdown oder Erklärungen:
{
  "jobTitle": "Extrahierter Jobtitel aus der Stellenanzeige, z.B. 'Frontend Developer'",
  "matchScore": 85,
  "matchSummary": "2-3 Sätze Zusammenfassung der Übereinstimmung",
  "strengths": [
    { "label": "React", "detail": "Ausführliche Beschreibung der Stärke" }
  ],
  "skillGaps": [
    { "label": "AWS", "detail": "Ausführliche Beschreibung des Gaps" }
  ],
  "preparationTips": [
    { "label": "AWS Grundlagen", "detail": "Konkreter Tipp zur Vorbereitung" }
  ],
  "interviewQuestions": [
    { "question": "Frage 1", "category": "Technical", "tip": "Kurzer Hinweis wie man diese Frage am besten beantwortet" },
    { "question": "Frage 2", "category": "Behavioural", "tip": "Kurzer Hinweis wie man diese Frage am besten beantwortet" },
    { "question": "Frage 3", "category": "Skill Gap", "tip": "Kurzer Hinweis wie man diese Frage am besten beantwortet" }
  ]
}

Wichtige Regeln für Labels:
- "label" bei strengths und skillGaps: maximal 20 Zeichen, kurz und prägnant
- Gute Beispiele: "React", "TypeScript", "AWS", "Testing", "Node.js", "GraphQL"
- Schlechte Beispiele: "Testing-Mindset (Jest)", "Kommunikationsfähigkeiten (nicht belegt)", "Agile Zusammenarbeit"
- Bei zusammengesetzten Begriffen: kürzen oder abkürzen, z.B. "Jest Testing" statt "Testing-Mindset (Jest)"
- "label" bei preparationTips: maximal 30 Zeichen`;
}
