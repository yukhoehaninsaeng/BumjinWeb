import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken, COOKIE_NAME } from "@/lib/admin-auth";
import { readContent, writeContent, ensureUploadDir, UPLOAD_DIR } from "@/lib/content-store";
import { writeFileSync } from "fs";
import path from "path";

export async function POST(req: Request) {
  const store = await cookies();
  const token = store.get(COOKIE_NAME)?.value;
  if (!token || !verifyToken(token))
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const formData = await req.formData();
  const file = formData.get("file") as File | null;
  const productId = (formData.get("productId") as string) || `img_${Date.now()}`;

  if (!file) {
    return NextResponse.json({ error: "파일이 없습니다." }, { status: 400 });
  }

  const ext = file.name.split(".").pop()?.toLowerCase() ?? "jpg";
  const filename = `${productId}.${ext}`;
  ensureUploadDir();
  writeFileSync(path.join(UPLOAD_DIR, filename), Buffer.from(await file.arrayBuffer()));

  const url = `/uploads/${filename}`;

  // Update content.images
  const content = readContent();
  content.images[productId] = url;
  writeContent(content);

  return NextResponse.json({ ok: true, url });
}
