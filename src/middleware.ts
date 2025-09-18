import { NextResponse } from "next/server"

export function middleware() {
  // Không cần xử lý locale routing, chỉ cần pass through
  return NextResponse.next()
}

export const config = {
  // Áp dụng middleware cho tất cả các route trừ static files và API routes
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
}
