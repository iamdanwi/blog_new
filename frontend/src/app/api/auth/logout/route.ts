// logout code
// app/api/auth/logout/route.ts

import { NextResponse } from "next/server";

export async function POST() {
    const response = NextResponse.json(
        { success: true, message: "Logged out successfully" },
        { status: 200 }
    );

    // Destroy the auth_token cookie
    response.cookies.set("auth_token", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        expires: new Date(0), // Expire the cookie immediately
        path: "/",
    });

    return response;
}
