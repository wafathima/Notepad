"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import ImageUploader from "@/components/ImageUploader";
import { Note } from "@/types/note";

interface NoteEditorProps {
  mode: "create" | "edit";
  initialNote?: Note;
}

export default function NoteEditor({ mode, initialNote }: NoteEditorProps) {
  const router = useRouter();
  const [title, setTitle] = useState(initialNote?.title ?? "");
  const [content, setContent] = useState(initialNote?.content ?? "");
  const [images, setImages] = useState<string[]>(initialNote?.images ?? []);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const handleSave = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!title.trim()) {
      setError("Give your note a title before saving.");
      return;
    }

    setSaving(true);
    try {
      const payload = { title: title.trim(), content, images };
      const res =
        mode === "create"
          ? await fetch("/api/notes", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(payload),
            })
          : await fetch(`/api/notes/${initialNote!._id}`, {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(payload),
            });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Could not save note");

      router.push("/notes");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not save note");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!initialNote) return;
    if (!confirm("Delete this note? This cannot be undone.")) return;

    setDeleting(true);
    try {
      const res = await fetch(`/api/notes/${initialNote._id}`, { method: "DELETE" });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Could not delete note");
      }
      router.push("/notes");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not delete note");
      setDeleting(false);
    }
  };

  return (
    <form onSubmit={handleSave} className="space-y-6" noValidate>
      <div>
        <label htmlFor="title" className="mb-1.5 block text-sm font-medium text-ink">
          Title
        </label>
        <input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What's this note about?"
          className="input font-display text-lg"
        />
      </div>

      <div>
        <label htmlFor="content" className="mb-1.5 block text-sm font-medium text-ink">
          Content
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Start writing…"
          rows={10}
          className="input"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">Images</label>
        <ImageUploader images={images} onChange={setImages} />
      </div>

      {error && (
        <p role="alert" className="rounded-md bg-danger/10 px-3 py-2 text-sm text-danger">
          {error}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-3 border-t border-paper-line pt-6">
        <button
          type="submit"
          disabled={saving}
          className="rounded-full bg-ink px-6 py-2.5 text-sm font-semibold text-paper transition hover:bg-ink/85 disabled:opacity-60"
        >
          {saving ? "Saving…" : "Save note"}
        </button>
        <button
          type="button"
          onClick={() => router.push("/notes")}
          className="rounded-full border border-paper-line px-6 py-2.5 text-sm font-semibold text-ink transition hover:border-ink"
        >
          Cancel
        </button>

        {mode === "edit" && (
          <button
            type="button"
            onClick={handleDelete}
            disabled={deleting}
            className="ml-auto rounded-full px-4 py-2.5 text-sm font-semibold text-danger transition hover:bg-danger/10 disabled:opacity-60"
          >
            {deleting ? "Deleting…" : "Delete note"}
          </button>
        )}
      </div>
    </form>
  );
}
