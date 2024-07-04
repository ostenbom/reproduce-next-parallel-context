import { NextResponse, type NextRequest } from "next/server";
export async function middleware(request: NextRequest) {
  console.log("hello from middleware", request.url);
  const rewriteURL = new URL("/thing1", getHost(request));
  console.log("host", getHost(request));
  console.log("rewriteURL", rewriteURL);
  return NextResponse.rewrite(rewriteURL);
}

function getHost(request: NextRequest) {
  const proto =
    request.headers.get("x-forwarded-proto") ??
    // Remove trailing colon
    request.nextUrl.protocol.slice(0, -1) ??
    "http";
  const host =
    request.headers.get("x-forwarded-host") ??
    request.nextUrl.host ??
    "localhost:8000";

  return `${proto}://${host}`;
}
