import { NextResponse } from "next/server";

export const GET = async (req, context) => {
    try {
        console.log("context ", context)
        return NextResponse.json({ "get": "sucess" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}

export const POST = async (req, { params }) => {
    try {
        console.log("params ", params)
        return NextResponse.json({ "get": "sucess" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}