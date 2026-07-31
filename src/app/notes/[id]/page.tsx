"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import NoteEditor from "@/components/NoteEditor";
import { Note } from "@/types/note";

export default function NoteDetailPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const [note, setNote] = useState<Note | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const res = await fetch(`/api/notes/${params.id}`, { cache: "no-store" });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Note not found");
        if (!cancelled) setNote(data.note);
      } catch (err) {
        if (!cancelled) setError(err instanceof Error ? err.message : "Note not found");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [params.id]);

  return (
    <div className="mx-auto max-w-2xl px-5 py-12 sm:px-8">
      <Link href="/notes" className="font-mono-ui text-xs text-pencil hover:text-ink">
        ← back to notebook
      </Link>

      {loading ? (
        <div className="mt-8 h-64 animate-pulse rounded-xl bg-paper-line/50" />
      ) : error || !note ? (
        <div className="mt-8 rounded-xl border border-dashed border-paper-line py-16 text-center">
          <p className="font-display text-xl text-ink">{error || "Note not found"}</p>
          <button
            onClick={() => router.push("/notes")}
            className="mt-6 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper"
          >
            Back to notebook
          </button>
        </div>
      ) : (
        <>
          <h1 className="font-display mt-3 text-3xl font-semibold text-ink">Edit note</h1>
          <div className="mt-8">
            <NoteEditor mode="edit" initialNote={note} />
          </div>
        </>
      )}
    </div>
  );
}
