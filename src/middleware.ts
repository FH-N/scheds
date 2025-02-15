import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  let accessToken = req.cookies.get("accessToken")?.value;
  const refreshToken = req.cookies.get("refreshToken")?.value;

  const protectedRoutes = ["/dashboard"];

  if (protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route))) {
    if (!accessToken && refreshToken) {
      const refreshResponse = await fetch(
        "http://localhost:3000/api/auth/refresh",
        {
          method: "POST",
          credentials: "include",
        }
      );

      if (refreshResponse.ok) {
        const data = await refreshResponse.json();
        accessToken = data.accessToken;
      }
    }

    if (!accessToken) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
