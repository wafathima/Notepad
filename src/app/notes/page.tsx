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
    fetchNotes();
  }, [fetchNotes]);

  const handleDelete = async (id: string) => {
    const prev = notes;
    setNotes((n) => n.filter((note) => note._id !== id));
    const res = await fetch(`/api/notes/${id}`, { method: "DELETE" });
    if (!res.ok) {
      setNotes(prev);
      setError("Could not delete that note. Please try again.");
    }
  };

  const filtered = notes.filter(
    (n) =>
      n.title.toLowerCase().includes(query.toLowerCase()) ||
      n.content.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative min-h-screen">
      {/* Hidden SVG Filter Definition */}
      <svg className="absolute h-0 w-0" aria-hidden="true">
        <defs>
          <filter id="torn-paper-edge" x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.03"
              numOctaves="4"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="12"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      <div className="mx-auto flex min-h-[calc(100vh-73px)] max-w-6xl flex-col justify-center px-5 py-12 sm:px-8 filter drop-shadow-[0_20px_25px_rgba(0,0,0,0.3)]">
        
        {/* BACKGROUND ONLY: Distorted Torn Paper Layer */}
        <div
          className="absolute inset-x-5 inset-y-12 sm:inset-x-8 bg-[#f4ede3]/90 border border-[#cfbea8]/40 backdrop-blur-[2px]"
          style={{
            filter: "url(#torn-paper-edge)",
            transform: "rotate(0.2deg)",
          }}
        />

        {/* CONTENT LAYER: Crisp Notebook Dashboard Elements */}
        <div className="relative z-10 p-6 sm:p-10 lg:p-14">
          
          {/* Vintage tape effect */}
          <div className="absolute -top-3 left-1/2 h-8 w-28 -translate-x-1/2 bg-[#e8dccc]/60 shadow-inner blur-[0.5px]" />

          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="font-mono-ui text-xs uppercase tracking-widest text-[#7a6553]">
                {user ? `${user.name.split(" ")[0]}'s notebook` : "your notebook"}
              </span>
              <h1 className="font-serif mt-2 text-3xl font-semibold text-[#2c241a]">Your notes</h1>
            </div>
            <Link
              href="/notes/new"
              className="rounded-full bg-[#2c241a] px-5 py-2.5 text-sm font-semibold text-[#f2ede5] transition hover:bg-[#1f1811] hover:scale-95 active:scale-90 shadow-md hover:shadow-lg"
            >
              ✎ New note
            </Link>
          </div>

          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search your notes…"
            className="input mt-6 max-w-sm bg-[#fcf5e8] border-[#cfbea8] focus:border-[#2c241a]"
            aria-label="Search notes"
          />

          {error && (
            <p role="alert" className="mt-4 rounded-md bg-[#B3462C]/10 px-3 py-2 text-sm text-[#B3462C] border border-[#B3462C]/20">
              {error}
            </p>
          )}

          {loading ? (
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-40 animate-pulse rounded-lg bg-[#d6c9b8]/30" />
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="mt-16 flex flex-col items-center rounded-lg border-2 border-dashed border-[#cfbea8] py-16 text-center">
              <p className="font-serif text-xl text-[#2c241a]">
                {notes.length === 0 ? "A blank page." : "No notes match your search."}
              </p>
              <p className="mt-2 max-w-sm text-sm text-[#4d3e2e]">
                {notes.length === 0
                  ? "Write your first note to start filling it in."
                  : "Try a different search term."}
              </p>
              {notes.length === 0 && (
                <Link
                  href="/notes/new"
                  className="mt-6 rounded-full bg-[#2c241a] px-5 py-2.5 text-sm font-semibold text-[#f2ede5] transition hover:bg-[#1f1811] hover:scale-95 active:scale-90"
                >
                  ✎ New note
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
      </div>
    </div>
  );
}