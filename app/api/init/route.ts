import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
    try {
        return NextResponse.json({ "req": "GET", message: "Backend Initialized" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ "req": "GET", error: "Something Went Wrong" }, { status: 400 });
    }
}

export const POST = async (req: Request) => {
    try {
        return NextResponse.json({ "req": "POST", message: "Backend Initialized" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ "req": "POST", error: "Something Went Wrong" }, { status: 400 });
    }
}