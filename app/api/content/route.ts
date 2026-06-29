import { NextResponse } from "next/server";
import { readContent } from "@/lib/content-store";

export async function GET() {
  return NextResponse.json(readContent(), {
    headers: { "Cache-Control": "no-store" },
  });
}
