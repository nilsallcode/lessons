import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma/prisma";

export async function POST (request) {

    const todoData = await request.json();

    if (!todoData.task) {
        return NextResponse.json({ message: "Empty field task." }, { status: 401 });
    }

    const todo = await prisma.todo.create({
        data: {
            task: todoData.task
        }
    });

    return NextResponse.json({ message: "Successfully added todo item" }, { status: 200 });
}