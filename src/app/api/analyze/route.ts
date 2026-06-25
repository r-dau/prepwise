import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const client = new Anthropic();

export async function POST(request: NextRequest) {
  const { cv, jobDescription } = await request.json();

  if (!cv || !jobDescription) {
    return NextResponse.json(
      { error: "CV und Stellenanzeige sind erforderlich." },
      { status: 400 },
    );
  }

  const message = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 1024,
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
  "matchScore": 85,
  "matchSummary": "Kurze Zusammenfassung der Übereinstimmung",
  "strengths": ["Stärke 1", "Stärke 2", "Stärke 3"],
  "skillGaps": ["Gap 1", "Gap 2"],
  "interviewQuestions": [
    { "question": "Frage 1", "category": "Technical" },
    { "question": "Frage 2", "category": "Behavioural" },
    { "question": "Frage 3", "category": "Skill Gap" }
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
