/**
 * v5 — Date context
 *
 * Added the current date as an explicit parameter passed into the
 * prompt. Without it, the model has no reliable sense of "today" and
 * cannot judge whether dates mentioned in the CV (e.g. "current role
 * ends April 2026") lie in the past or future — leading to incorrect
 * or misleading interview question suggestions.
 *
 * The current date is now injected as plain context so the model can
 * reason correctly about employment timelines, notice periods, and
 * whether a candidate is currently employed.
 */
export function buildPromptV5(
  cv: string,
  jobDescription: string,
  currentDate: string,
): string {
  return `Du bist ein erfahrener Tech-Recruiter. Der heutige Tag ist ${currentDate}. Analysiere den folgenden Lebenslauf und die Stellenanzeige unter Berücksichtigung des aktuellen Datums.

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
- Beispiel schlecht: "Achte auf gute Vorbereitung."

Wichtige Regeln für Datumsangaben:
- Vergleiche alle Datumsangaben im Lebenslauf (z.B. Enddatum der aktuellen Anstellung) mit dem heutigen Datum
- Liegt ein genanntes Enddatum in der Zukunft, bedeutet das der Kandidat ist aktuell noch angestellt und kündigt regulär – das ist normal und kein Grund für eine kritische Anmerkung
- Erwähne Datumsthemen nur wenn sie wirklich auffällig oder unklar sind (z.B. große Lücken, widersprüchliche Angaben)`;
}
