import { NextResponse } from "next/server";

export const POST = async (req) => {
    try {
        const postData = await fetch("https://jsonplaceholder.typicode.com/posts");
        const postJSON = await postData.json();

        return NextResponse.json(postJSON, { status: 200 });

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}