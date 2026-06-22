import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/webadmin777/dashboard")) {
    const token = req.cookies.get("bj_admin")?.value;
    if (!token) {
      return NextResponse.redirect(new URL("/webadmin777", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/webadmin777/dashboard/:path*"],
};
