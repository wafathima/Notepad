"use client";

import Link from "next/link";
import Image from "next/image";
import { Note } from "@/types/note";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function NoteCard({
  note,
  onDelete,
}: {
  note: Note;
  onDelete: (id: string) => void;
}) {
  return (
    <div className="dogear group relative flex flex-col rounded-lg border border-paper-line bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <Link href={`/notes/${note._id}`} className="flex flex-1 flex-col">
        <p className="font-mono-ui text-xs text-pencil">{formatDate(note.updatedAt)}</p>
        <h3 className="font-display mt-2 line-clamp-2 text-lg font-semibold text-ink">
          {note.title || "Untitled note"}
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm text-ink-soft">
          {note.content || "No content yet."}
        </p>

        {note.images.length > 0 && (
          <div className="mt-3 flex gap-2">
            {note.images.slice(0, 3).map((src) => (
              <div key={src} className="relative h-14 w-14 overflow-hidden rounded-md border border-paper-line">
                <Image src={src} alt="" fill sizes="56px" className="object-cover" />
              </div>
            ))}
            {note.images.length > 3 && (
              <div className="flex h-14 w-14 items-center justify-center rounded-md border border-paper-line bg-paper font-mono-ui text-xs text-pencil">
                +{note.images.length - 3}
              </div>
            )}
          </div>
        )}
      </Link>

      <button
        onClick={(e) => {
          e.preventDefault();
          onDelete(note._id);
        }}
        aria-label={`Delete ${note.title || "note"}`}
        className="absolute right-3 top-3 rounded-full p-1.5 text-pencil opacity-0 transition hover:bg-danger/10 hover:text-danger group-hover:opacity-100"
      >
        ✕
      </button>
    </div>
  );
}
