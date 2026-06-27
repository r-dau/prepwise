import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { password } = await request.json();

  const isValid = password === process.env.DEMO_PASSWORD;

  return NextResponse.json({ isValid });
}
