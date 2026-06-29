import crypto from "crypto";

const SECRET = process.env.ADMIN_SECRET ?? "bj-admin-2024-secret-key";
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "bumjin2024!";
export const COOKIE_NAME = "bj_admin";

export function createToken(): string {
  const ts = Date.now().toString();
  const sig = crypto.createHmac("sha256", SECRET).update(ts).digest("hex");
  return `${ts}.${sig}`;
}

export function verifyToken(token: string): boolean {
  try {
    const dot = token.indexOf(".");
    if (dot === -1) return false;
    const ts = token.slice(0, dot);
    const sig = token.slice(dot + 1);
    const expected = crypto
      .createHmac("sha256", SECRET)
      .update(ts)
      .digest("hex");
    if (sig.length !== expected.length) return false;
    if (
      !crypto.timingSafeEqual(
        Buffer.from(sig, "hex"),
        Buffer.from(expected, "hex")
      )
    )
      return false;
    return Date.now() - parseInt(ts) < 86_400_000; // 24h
  } catch {
    return false;
  }
}
