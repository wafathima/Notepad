"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import NoteCard from "@/components/NoteCard";
import { Note } from "@/types/note";

export default function NotesDashboardPage() {
  const { user } = useAuth();
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const fetchNotes = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/notes", { cache: "no-store" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Could not load notes");
      setNotes(data.notes);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not load notes");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- initial data load on mount
    fetchNotes();
  }, [fetchNotes]);

  const handleDelete = async (id: string) => {
    const prev = notes;
    setNotes((n) => n.filter((note) => note._id !== id));
    const res = await fetch(`/api/notes/${id}`, { method: "DELETE" });
    if (!res.ok) {
      setNotes(prev); // revert on failure
      setError("Could not delete that note. Please try again.");
    }
  };

  const filtered = notes.filter(
    (n) =>
      n.title.toLowerCase().includes(query.toLowerCase()) ||
      n.content.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="font-mono-ui text-xs uppercase tracking-widest text-pencil">
            {user ? `${user.name.split(" ")[0]}'s notebook` : "your notebook"}
          </span>
          <h1 className="font-display mt-2 text-3xl font-semibold text-ink">Your notes</h1>
        </div>
        <Link
          href="/notes/new"
          className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition hover:bg-ink/85"
        >
          + New note
        </Link>
      </div>

      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search your notes…"
        className="input mt-6 max-w-sm"
        aria-label="Search notes"
      />

      {error && (
        <p role="alert" className="mt-4 rounded-md bg-danger/10 px-3 py-2 text-sm text-danger">
          {error}
        </p>
      )}

      {loading ? (
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-40 animate-pulse rounded-lg bg-paper-line/50" />
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div className="mt-16 flex flex-col items-center rounded-xl border border-dashed border-paper-line py-16 text-center">
          <p className="font-display text-xl text-ink">
            {notes.length === 0 ? "A blank page." : "No notes match your search."}
          </p>
          <p className="mt-2 max-w-sm text-sm text-ink-soft">
            {notes.length === 0
              ? "Write your first note to start filling it in."
              : "Try a different search term."}
          </p>
          {notes.length === 0 && (
            <Link
              href="/notes/new"
              className="mt-6 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition hover:bg-ink/85"
            >
              + New note
            </Link>
          )}
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((note) => (
            <NoteCard key={note._id} note={note} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
}
