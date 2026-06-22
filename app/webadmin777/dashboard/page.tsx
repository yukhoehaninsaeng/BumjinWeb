import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { verifyToken, COOKIE_NAME } from "@/lib/admin-auth";
import { readContent } from "@/lib/content-store";
import AdminDashboard from "./AdminDashboard";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const store = await cookies();
  const token = store.get(COOKIE_NAME)?.value;
  if (!token || !verifyToken(token)) redirect("/webadmin777");

  const content = readContent();
  return <AdminDashboard initialContent={content} />;
}
