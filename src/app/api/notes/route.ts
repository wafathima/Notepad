import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import Note from "@/models/Note";
import { getCurrentUser } from "@/lib/getCurrentUser";
import { noteSchema } from "@/lib/validation";

// GET /api/notes - list all notes belonging to the logged-in user
export async function GET() {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await connectToDatabase();
  const notes = await Note.find({ owner: user.userId }).sort({ updatedAt: -1 });

  return NextResponse.json({ notes });
}

// POST /api/notes - create a new note for the logged-in user
export async function POST(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const parsed = noteSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? "Invalid input" },
        { status: 400 }
      );
    }

    await connectToDatabase();
    const note = await Note.create({
      ...parsed.data,
      owner: user.userId,
    });

    return NextResponse.json({ note }, { status: 201 });
  } catch (err) {
    console.error("Create note error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
