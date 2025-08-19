import { NextResponse, NextRequest } from "next/server";
import { headers } from "next/headers";

export function middleware(req: NextRequest) {
  const currentHost = req.headers.get("host") || "unknown";
  const url = req.nextUrl.clone();
  url.pathname = "/test/multitenant";
  const response = NextResponse.rewrite(url);
  response.headers.set("x-site-host", currentHost);
  return response;
}
