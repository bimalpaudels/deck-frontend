import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  isTokenExpired,
  getAccessToken,
  getRefreshToken,
  setTokens,
} from "./lib/user";
import { getNewToken } from "./app/user/actions";

export async function middleware(request: NextRequest) {
  const token = getAccessToken()!.value;
  const reftoken = getRefreshToken()!.value;
  const is_expired = isTokenExpired(token);

  if (is_expired) {
    const res = await getNewToken(getRefreshToken()!.value);

    const resp = NextResponse.next();
    if (res && res.access) {
      console.log("Original");
      console.log(token);
      console.log("Re-gotten");
      console.log(res.access);
      console.log("Original ref");
      console.log(reftoken);
      console.log("Second ref");
      console.log(res.refresh);
      // setTokens(res.access, res.refresh)
      resp.cookies.set("access", res.access);
      resp.cookies.set("refresh", res.refresh);
    } else {
      return NextResponse.redirect("http://localhost:3000/user/");
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/about/:path*"],
};
