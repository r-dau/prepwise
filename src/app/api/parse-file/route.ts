import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get("file") as File;

  if (!file) {
    return NextResponse.json(
      { error: "Keine Datei gefunden." },
      { status: 400 },
    );
  }

  const fileName = file.name.toLowerCase();
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  try {
    if (fileName.endsWith(".pdf")) {
      const { extractText } = await import("unpdf");
      const { text } = await extractText(new Uint8Array(arrayBuffer));
      return NextResponse.json({ text });
    }

    if (fileName.endsWith(".docx")) {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const mammoth = require("mammoth");
      const result = await mammoth.extractRawText({ buffer });
      return NextResponse.json({ text: result.value });
    }

    return NextResponse.json(
      { error: "Nicht unterstütztes Format. Bitte PDF oder .docx verwenden." },
      { status: 400 },
    );
  } catch (err) {
    console.error("Parse error:", err);
    return NextResponse.json(
      { error: "Datei konnte nicht gelesen werden." },
      { status: 500 },
    );
  }
}
