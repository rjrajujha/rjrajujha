import { NextResponse } from "next/server";
import db from '../../lib/mongo';
// import pool from '../../lib/mysql';

export const GET = async (req: Request) => {
    try {
        // pool
        await db(); // Connect to MongoDB and MySQL databases.
        return NextResponse.json({ message: "Backend Initialized" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Something Went Wrong" }, { status: 400 });
    }
}

export const POST = async (req: Request) => {
    try {
        return NextResponse.json({ message: "Backend Initialized" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Something Went Wrong" }, { status: 400 });
    }
}