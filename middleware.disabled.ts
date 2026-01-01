import { NextRequest, NextResponse } from "next/server"

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // ✅ Allow admin login page always
  if (pathname === "/admin/login") {
    return NextResponse.next()
  }

  const adminKey = req.cookies.get("admin_key")?.value
  const expectedKey = process.env.ADMIN_KEY

  if (pathname.startsWith("/admin")) {
    if (!adminKey || adminKey !== expectedKey) {
      return NextResponse.redirect(new URL("/", req.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}
