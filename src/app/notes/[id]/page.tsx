// // //src/app/notes/[id]/page.tsx
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

      <div className="mx-auto flex min-h-[calc(100vh-73px)] max-w-2xl flex-col justify-center px-5 py-12 sm:px-8 filter drop-shadow-[0_20px_25px_rgba(0,0,0,0.3)]">
        
        {/* BACKGROUND ONLY: Distorted Torn Paper Layer */}
        <div 
          className="absolute inset-x-5 inset-y-12 sm:inset-x-8 bg-[#f4ede3]/90 border border-[#cfbea8]/40 backdrop-blur-[2px]"
          style={{
            filter: "url(#torn-paper-edge)",
            transform: 'rotate(0.2deg)',
          }}
        />

        {/* CONTENT LAYER: Crisp Form & Interactive Editor Elements */}
        <div className="relative z-10 p-6 sm:p-10">
          
          {/* Vintage tape effect */}
          <div className="absolute -top-3 left-1/2 h-8 w-28 -translate-x-1/2 bg-[#e8dccc]/60 shadow-inner blur-[0.5px]" />

          <Link 
            href="/notes" 
            className="font-mono-ui text-xs text-[#7a6553] hover:text-[#2c241a] transition-colors inline-flex items-center gap-2 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span> back to notebook
          </Link>

          {loading ? (
            <div className="mt-8 h-64 animate-pulse rounded-lg bg-[#d6c9b8]/30" />
          ) : error || !note ? (
            <div className="mt-8 rounded-lg border-2 border-dashed border-[#cfbea8] py-16 text-center">
              <p className="font-serif text-xl text-[#2c241a]">{error || "Note not found"}</p>
              <button
                onClick={() => router.push("/notes")}
                className="mt-6 rounded-full bg-[#2c241a] px-5 py-2.5 text-sm font-semibold text-[#f2ede5] transition hover:bg-[#1f1811] hover:scale-95 active:scale-90"
              >
                Back to notebook
              </button>
            </div>
          ) : (
            <>
              <h1 className="font-serif mt-3 text-3xl font-semibold text-[#2c241a]">Edit note</h1>
              <div className="mt-8">
                <NoteEditor mode="edit" initialNote={note} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}