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
  "matchSummary": "Kurze Zusammenfassung der Übereinstimmung",
  "strengths": [
    { "label": "React", "detail": "Detaillierte Beschreibung der Stärke..." }
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
}`,
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
