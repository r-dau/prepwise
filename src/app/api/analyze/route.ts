import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";
import { buildAnalyzePrompt } from "@/prompts/analyze";

const client = new Anthropic();

export async function POST(request: NextRequest) {
  const { cv, jobDescription, password, locale } = await request.json();

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
        content: buildAnalyzePrompt(cv, jobDescription, locale ?? "de"),
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
