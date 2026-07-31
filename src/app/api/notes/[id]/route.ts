import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectToDatabase } from "@/lib/db";
import Note from "@/models/Note";
import { getCurrentUser } from "@/lib/getCurrentUser";
import { noteSchema } from "@/lib/validation";

interface RouteParams {
  params: Promise<{ id: string }>;
}

function isValidId(id: string) {
  return mongoose.Types.ObjectId.isValid(id);
}

// GET /api/notes/:id
export async function GET(_req: NextRequest, { params }: RouteParams) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  if (!isValidId(id)) {
    return NextResponse.json({ error: "Invalid note id" }, { status: 400 });
  }

  await connectToDatabase();
  const note = await Note.findOne({ _id: id, owner: user.userId });

  if (!note) {
    return NextResponse.json({ error: "Note not found" }, { status: 404 });
  }

  return NextResponse.json({ note });
}

// PUT /api/notes/:id - update title/content/images
export async function PUT(req: NextRequest, { params }: RouteParams) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  if (!isValidId(id)) {
    return NextResponse.json({ error: "Invalid note id" }, { status: 400 });
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
    const note = await Note.findOneAndUpdate(
      { _id: id, owner: user.userId },
      { $set: parsed.data },
      { new: true }
    );

    if (!note) {
      return NextResponse.json({ error: "Note not found" }, { status: 404 });
    }

    return NextResponse.json({ note });
  } catch (err) {
    console.error("Update note error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}

// DELETE /api/notes/:id
export async function DELETE(_req: NextRequest, { params }: RouteParams) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  if (!isValidId(id)) {
    return NextResponse.json({ error: "Invalid note id" }, { status: 400 });
  }

  await connectToDatabase();
  const note = await Note.findOneAndDelete({ _id: id, owner: user.userId });

  if (!note) {
    return NextResponse.json({ error: "Note not found" }, { status: 404 });
  }

  return NextResponse.json({ ok: true });
}
