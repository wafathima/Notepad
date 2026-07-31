"use client";

import { useRef, useState } from "react";
import Image from "next/image";

interface ImageUploaderProps {
  images: string[];
  onChange: (images: string[]) => void;
}

export default function ImageUploader({ images, onChange }: ImageUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFiles = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setError(null);
    setUploading(true);

    try {
      const uploaded: string[] = [];
      for (const file of Array.from(files)) {
        const formData = new FormData();
        formData.append("file", file);

        const res = await fetch("/api/upload", { method: "POST", body: formData });
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || `Failed to upload ${file.name}`);
        }
        uploaded.push(data.url);
      }
      onChange([...images, ...uploaded]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  const removeImage = (url: string) => {
    onChange(images.filter((img) => img !== url));
  };

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {images.map((src) => (
          <div key={src} className="group relative h-24 w-24 overflow-hidden rounded-lg border border-paper-line">
            <Image src={src} alt="Note attachment" fill sizes="96px" className="object-cover" />
            <button
              type="button"
              onClick={() => removeImage(src)}
              aria-label="Remove image"
              className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-ink/80 text-xs text-paper opacity-0 transition group-hover:opacity-100"
            >
              ✕
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="flex h-24 w-24 flex-col items-center justify-center gap-1 rounded-lg border border-dashed border-paper-line text-pencil transition hover:border-ink hover:text-ink disabled:opacity-60"
        >
          <span className="text-xl leading-none">{uploading ? "…" : "+"}</span>
          <span className="font-mono-ui text-[10px]">{uploading ? "uploading" : "add image"}</span>
        </button>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp,image/gif"
        multiple
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
      />

      {error && <p className="mt-2 text-sm text-danger">{error}</p>}
    </div>
  );
}
