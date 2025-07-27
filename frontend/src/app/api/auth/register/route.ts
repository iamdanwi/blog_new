/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
   try {
    const body = await req.json();
    const { name, email, password } = body;
    const res = await axios.post("http://localhost:3001/api/users/register", {
        name,
        email,
        password,
    });
    return NextResponse.json({
        data: res.data,
    });
   } catch (error: any) {
    const message = error?.response?.data?.message || "Internal server error";
    return NextResponse.json(
        { message },
        { status: error?.response?.status || 500 }
    );}
}