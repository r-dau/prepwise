import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const client = new Anthropic();

export async function POST(request: NextRequest) {
  const { cv, jobDescription, password } = await request.json();

  if (password !== process.env.DEMO_PASSWORD) {
    return NextResponse.json({ error: "Falsches Passwort." }, { status: 401 });
  }

  if (!cv || !jobDescription) {
    return NextResponse.json(
      { error: "CV und Stellenanzeige sind erforderlich." },
      { status: 400 },
    );
  }

  const message = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 4096,
    messages: [
      {
        role: "user",
        content: `Du bist ein erfahrener Tech-Recruiter. Analysiere den folgenden Lebenslauf und die Stellenanzeige.

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
          - "label" bei preparationTips: maximal 30 Zeichen`,
      },
    ],
  });

  const raw = message.content[0].type === "text" ? message.content[0].text : "";
  const cleaned = raw
    .replace(/```json\n?/g, "")
    .replace(/```\n?/g, "")
    .trim();
  const result = JSON.parse(cleaned);

  return NextResponse.json(result);
}
