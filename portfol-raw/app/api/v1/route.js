import { NextResponse } from "next/server";
// import { cookies } from "next/headers";

export const GET = async (req) => {
    try {
        // const { searchParams } = new URL(req.url);
        // console.log(searchParams);
        const reqData = req.nextUrl.searchParams;
        console.log(reqData.get('id') || "no-id")

        //Cookies
        // console.log(req.cookies);
        // const reqCookies = cookies()
        // console.log(reqCookies)

        return NextResponse.json({ "req": "GET" }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}

export const POST = async (req) => {
    try {
        // const reqHeaders = new Headers(req.headers);
        // console.log(reqHeaders);

        // const reqData = await req.json();
        // console.log("Body JSON Data : ", reqData);
        // const formData = await req.formData();
        // console.log("Form Data : ", formData);

        return NextResponse.json({ "req": "POST" }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
