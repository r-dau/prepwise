/**
 * v4 — Hidden Insights
 *
 * Added a new "hiddenInsights" field: 4 short, personalised observations
 * that go beyond the standard match score / skill gap analysis. These
 * surface subtle signals a human recruiter might notice but that aren't
 * captured elsewhere in the structured output — e.g. missing metrics in
 * the CV, unstated but implied requirements in the job posting, or gaps
 * between listed skills and what's actually demonstrated.
 *
 * Each insight is tagged with an icon key so the UI can render a
 * distinct colored card per insight type.
 */

export function buildPromptV4(cv: string, jobDescription: string): string {
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
  ],
  "hiddenInsights": [
    { "icon": "star", "text": "Beobachtung zu fehlenden Kennzahlen oder Impact im Lebenslauf" },
    { "icon": "target", "text": "Unausgesprochene Anforderung aus der Stellenanzeige, die auffällt" },
    { "icon": "chat", "text": "Diskrepanz zwischen Profil und Stellenanzeige, auf die man sich vorbereiten sollte" },
    { "icon": "pen", "text": "Beobachtung zum Tech-Stack oder Stil, die auffällt" }
  ]
}

Wichtige Regeln für Labels:
- "label" bei strengths und skillGaps: maximal 20 Zeichen, kurz und prägnant
- Gute Beispiele: "React", "TypeScript", "AWS", "Testing", "Node.js", "GraphQL"
- Schlechte Beispiele: "Testing-Mindset (Jest)", "Kommunikationsfähigkeiten (nicht belegt)", "Agile Zusammenarbeit"
- Bei zusammengesetzten Begriffen: kürzen oder abkürzen, z.B. "Jest Testing" statt "Testing-Mindset (Jest)"
- "label" bei preparationTips: maximal 30 Zeichen

Wichtige Regeln für hiddenInsights:
- Genau 4 Insights, jeweils 1-2 Sätze
- "icon" muss genau einer dieser vier Werte sein: "star", "target", "chat", "pen"
- Fokus auf Beobachtungen die NICHT bereits in strengths, skillGaps oder preparationTips stehen
- Konkret und umsetzbar formulieren, keine generischen Aussagen
- Beispiel gut: "Dein CV zeigt starke Frontend-Skills, aber keine konkreten Ergebnisse oder Impact-Zahlen. Füge messbare Erfolge hinzu."
- Beispiel schlecht: "Achte auf gute Vorbereitung."`;
}
