import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    try {
        return NextResponse.json({ message: "Backend Initialized" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Something Went Wrong" }, { status: 400 });
    }
}