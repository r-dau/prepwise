import { NextRequest, NextResponse } from "next/server";

interface TextItem {
  str: string;
  x: number;
  y: number;
}

async function extractPdfText(arrayBuffer: ArrayBuffer): Promise<string> {
  const { getDocumentProxy } = await import("unpdf");
  const pdf = await getDocumentProxy(new Uint8Array(arrayBuffer));

  let fullText = "";

  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);
    const content = await page.getTextContent();

    const items: TextItem[] = content.items
      .filter((item) => "str" in item && item.str.trim() !== "")
      .map((item) => {
        const i = item as { str: string; transform: number[] };
        return { str: i.str, x: i.transform[4], y: i.transform[5] };
      });

    // Nach vertikaler Position sortieren (oben nach unten), dann horizontal
    items.sort((a, b) => b.y - a.y || a.x - b.x);

    // Elemente mit ähnlicher y-Position zu Zeilen gruppieren
    const LINE_THRESHOLD = 3;
    const lines: TextItem[][] = [];

    for (const item of items) {
      const lastLine = lines[lines.length - 1];
      if (lastLine && Math.abs(lastLine[0].y - item.y) < LINE_THRESHOLD) {
        lastLine.push(item);
      } else {
        lines.push([item]);
      }
    }

    const pageText = lines
      .map((line) =>
        line
          .sort((a, b) => a.x - b.x)
          .map((i) => i.str)
          .join(" "),
      )
      .join("\n");

    fullText += pageText + "\n\n";
  }

  return fullText.trim();
}

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
      const text = await extractPdfText(arrayBuffer);
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
