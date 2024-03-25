import { decodeJwt } from "jose";
import { cookies } from "next/headers";

export function isTokenExpired(accessToken: string) {
  const payload = decodeJwt(accessToken);
  const expiry_time = payload.exp;
  const current_time = Date.now();
  if (expiry_time && current_time >= expiry_time * 1000) {
    return true;
  } else {
    return false;
  }
}

export function getAccessToken() {
  return cookies().get("access");
}

export function getRefreshToken() {
  return cookies().get("refresh");
}

export function setTokens(access: string, refresh: string) {
  cookies().set("access", access, {
    httpOnly: true,
  });
  cookies().set("refresh", refresh, {
    httpOnly: true,
  });
  return;
}
