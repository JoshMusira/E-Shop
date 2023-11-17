import prismadb from "@/lib/prismadb";

import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server"


export async function POST(req: Request) {

    try {
        const { userId } = auth();
        const body = await req.json();

        const { name } = body;

        if (!userId) {
            return new NextResponse("Anuthorized", { status: 401 });
        }

        if (!name) {
            return new NextResponse("Name is required", { status: 400 });
        }

        const store = await prismadb.store.create({
            data: {
                name,
                userId
            }
        })

        return NextResponse.json(store);
        // return new NextResponse(JSON.stringify(store), { status: 200 });

    } catch (error) {
        console.log("[Create Store]", error)
        return new NextResponse("Internal Server Error", { status: 500 })
    }

}