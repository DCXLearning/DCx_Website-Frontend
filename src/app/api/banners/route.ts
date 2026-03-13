import { NextResponse } from "next/server";

export async function GET(
    _request: Request,
    { params }: { params: { id: string; lang: string } }
) {
    try {
        const res = await fetch(
            `http://31.97.188.135:8000/api/v1/banners/${params.id}/${params.lang}`,
            { cache: "no-store" }
        );

        const data = await res.json();

        return NextResponse.json(data, { status: res.status });
    } catch (error) {
        return NextResponse.json(
            { message: "Failed to fetch banner", error },
            { status: 500 }
        );
    }
}