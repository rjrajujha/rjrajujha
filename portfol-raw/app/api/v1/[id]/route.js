import { NextResponse } from "next/server";

export const GET = async (req, context) => {
    try {
        return NextResponse.json({ "req": "GET", "context ": context }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}

export const POST = async (req, { params }) => {
    try {
        return NextResponse.json({ "req": "POST", "params ": params }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}