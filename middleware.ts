import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isTokenExpired, getAccessToken } from "./lib/user";

export function middleware(request: NextRequest) {
  const token = getAccessToken()!.value;
  const is_expired = isTokenExpired(token);

  if (is_expired) {
    return NextResponse.redirect("http://localhost:3000/user/");
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/about/:path*"],
};
