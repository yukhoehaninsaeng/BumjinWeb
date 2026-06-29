import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken, COOKIE_NAME } from "@/lib/admin-auth";
import { readContent, writeContent } from "@/lib/content-store";
import { revalidatePath } from "next/cache";

async function checkAuth(): Promise<boolean> {
  const store = await cookies();
  const token = store.get(COOKIE_NAME)?.value;
  return !!token && verifyToken(token);
}

export async function GET() {
  if (!(await checkAuth()))
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  return NextResponse.json(readContent());
}

export async function PUT(req: Request) {
  if (!(await checkAuth()))
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  writeContent(body);

  revalidatePath("/");
  revalidatePath("/company");
  revalidatePath("/business/electronics");
  revalidatePath("/business/molding");
  revalidatePath("/business/startup");

  return NextResponse.json({ ok: true });
}
