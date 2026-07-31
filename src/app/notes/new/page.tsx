"use client";

import Link from "next/link";
import NoteEditor from "@/components/NoteEditor";

export default function NewNotePage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-12 sm:px-8">
      <Link href="/notes" className="font-mono-ui text-xs text-pencil hover:text-ink">
        ← back to notebook
      </Link>
      <h1 className="font-display mt-3 text-3xl font-semibold text-ink">New note</h1>
      <div className="mt-8">
        <NoteEditor mode="create" />
      </div>
    </div>
  );
}
