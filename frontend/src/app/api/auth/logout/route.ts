// logout code
// app/api/auth/logout/route.ts

import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
    const cookieStore = await cookies();
    
    // Clear all auth-related cookies
    cookieStore.delete("token");
    cookieStore.delete("name");
    cookieStore.delete("email");

    const response = NextResponse.json(
        { success: true, message: "Logged out successfully" },
        { status: 200 }
    );

    return response;
}
