import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma/prisma";

export async function GET (request) {

    const todos = await prisma.todo.findMany();

    return NextResponse.json(todos, { status: 200 });
}