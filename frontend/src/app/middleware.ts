// app/middleware.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Protected routes start with these prefixes
const protectedPrefixes = ["/me"];

// Public routes where logged-in users shouldn't go again
const publicAuthPages = ["/login", "/register"];

// Function to check if path matches protected
function isProtectedRoute(pathname: string): boolean {
    return protectedPrefixes.some((prefix) =>
        pathname.startsWith(prefix)
    );
}

// Function to check if path is an auth page
function isAuthPage(pathname: string): boolean {
    return publicAuthPages.includes(pathname);
}

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const token = request.cookies.get("auth_token")?.value;

    // Case 1: Protected route and not authenticated
    if (isProtectedRoute(pathname) && !token) {
        const loginUrl = new URL("/login", request.url);
        loginUrl.searchParams.set("redirect", pathname);
        return NextResponse.redirect(loginUrl);
    }

    // Case 2: Auth route and already authenticated
    // if (isAuthPage(pathname) && token) {
    //     return NextResponse.redirect(new URL("/me/dashboard", request.url));
    // }

    // Allow request
    return NextResponse.next();
}

// Matcher to control which routes run through middleware
export const config = {
    matcher: ["/me/:path*", "/login", "/register"],
};
