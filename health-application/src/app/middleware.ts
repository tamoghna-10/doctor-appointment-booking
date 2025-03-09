import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("authToken"); // Retrieve auth token from cookies

  // If user is NOT authenticated, redirect them to login
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next(); // Allow the request to proceed if authenticated
}

// Apply the middleware to the homepage (`/`)
export const config = {
  matcher: "/",
};
