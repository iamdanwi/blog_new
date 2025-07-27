/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { email, password } = body;
        
        const res = await axios.post("http://localhost:3001/api/users/login", {
            email,
            password,
        });

        // Backend returns { message, token, data: { id, name, email } }
        const { token, data, message } = res.data;

        if (!token || !data) {
            throw new Error('Missing token or user data');
        }

        const cookieStore = await cookies();

        cookieStore.set("token", token, { 
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
        });
        cookieStore.set("name", data.name, {
            secure: process.env.NODE_ENV === "production",
        });
        cookieStore.set("email", data.email, {
            secure: process.env.NODE_ENV === "production",
        });

        return NextResponse.json({
            message,
            data: {
                name: data.name,
                email: data.email
            }
        });
    } catch (error: any) {
        const message = error?.response?.data?.message || 'An error occurred during login';
        const status = error?.response?.status || 500;

        return NextResponse.json({ message }, { status });
    }
}
       