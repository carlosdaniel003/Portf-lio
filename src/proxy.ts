import { type NextRequest, NextResponse } from "next/server";

const privateHeaders = {
  "Cache-Control": "no-store, max-age=0",
  "X-Robots-Tag": "noindex, nofollow, noarchive, nosnippet",
};

function notFound() {
  return new NextResponse(null, {
    status: 404,
    headers: privateHeaders,
  });
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only the build assets required to render the maintenance page remain public.
  if (pathname.startsWith("/_next/static/")) {
    return NextResponse.next();
  }

  if (request.method !== "GET" && request.method !== "HEAD") {
    return notFound();
  }

  if (pathname === "/") {
    const response = NextResponse.next();
    Object.entries(privateHeaders).forEach(([key, value]) => {
      response.headers.set(key, value);
    });
    return response;
  }

  // Block former API endpoints, images, metadata files and internal endpoints.
  if (
    pathname.startsWith("/api/") ||
    pathname.startsWith("/_next/") ||
    pathname.includes(".")
  ) {
    return notFound();
  }

  // Any old page URL leads only to the maintenance screen.
  const destination = request.nextUrl.clone();
  destination.pathname = "/";
  destination.search = "";

  const response = NextResponse.redirect(destination, 307);
  Object.entries(privateHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });
  return response;
}

export const config = {
  matcher: ["/:path*"],
};
