import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Check if the request is for a protected route
  if (request.nextUrl.pathname.startsWith("/me")) {
    // Get the token from cookies
    const token = request.cookies.get("token")?.value;
    
    // If no token is present, redirect to login
    if (!token) {
      const loginUrl = new URL("/login", request.url);
      return NextResponse.redirect(loginUrl);
    }

    try {
      // Allow the request to continue
      return NextResponse.next();
    } catch (error) {
      // If token validation fails, redirect to login
      const loginUrl = new URL("/login", request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  // For all other routes, continue normally
  return NextResponse.next();
}

// Configure which routes to run middleware on
export const config = {
  matcher: [
    '/me/:path*',
  ]
};
