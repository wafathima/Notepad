// //src/app/notes/page.tsx

// "use client";

// import { useCallback, useEffect, useState } from "react";
// import Link from "next/link";
// import { useAuth } from "@/context/AuthContext";
// import NoteCard from "@/components/NoteCard";
// import { Note } from "@/types/note";

// export default function NotesDashboardPage() {
//   const { user } = useAuth();
//   const [notes, setNotes] = useState<Note[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [query, setQuery] = useState("");

//   const fetchNotes = useCallback(async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const res = await fetch("/api/notes", { cache: "no-store" });
//       const data = await res.json();
//       if (!res.ok) throw new Error(data.error || "Could not load notes");
//       setNotes(data.notes);
//     } catch (err) {
//       setError(err instanceof Error ? err.message : "Could not load notes");
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchNotes();
//   }, [fetchNotes]);

//   const handleDelete = async (id: string) => {
//     const prev = notes;
//     setNotes((n) => n.filter((note) => note._id !== id));
//     const res = await fetch(`/api/notes/${id}`, { method: "DELETE" });
//     if (!res.ok) {
//       setNotes(prev); 
//       setError("Could not delete that note. Please try again.");
//     }
//   };

//   const filtered = notes.filter(
//     (n) =>
//       n.title.toLowerCase().includes(query.toLowerCase()) ||
//       n.content.toLowerCase().includes(query.toLowerCase())
//   );

//   return (

//     <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 ">
//       <div className="flex flex-wrap items-end justify-between gap-4 ">
//         <div>
//           <span className="font-mono-ui text-xs uppercase tracking-widest text-pencil bg-[#FFFF]">
//             {user ? `${user.name.split(" ")[0]}'s notebook` : "your notebook"}
//           </span>
//           <h1 className="font-display mt-2 text-3xl font-semibold text-ink">Your notes</h1>
//         </div>
//         <Link
//           href="/notes/new"
//           className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition hover:bg-ink/85"
//         >
//           + New note
//         </Link>
//       </div>

//       <input
//         type="search"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Search your notes…"
//         className="input mt-6 max-w-sm"
//         aria-label="Search notes"
//       />

//       {error && (
//         <p role="alert" className="mt-4 rounded-md bg-danger/10 px-3 py-2 text-sm text-danger">
//           {error}
//         </p>
//       )}

//       {loading ? (
//         <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
//           {[...Array(3)].map((_, i) => (
//             <div key={i} className="h-40 animate-pulse rounded-lg bg-paper-line/50" />
//           ))}
//         </div>
//       ) : filtered.length === 0 ? (
//         <div className="mt-16 flex flex-col items-center rounded-xl border border-dashed border-paper-line py-16 text-center">
//           <p className="font-display text-xl text-ink">
//             {notes.length === 0 ? "A blank page." : "No notes match your search."}
//           </p>
//           <p className="mt-2 max-w-sm text-sm text-ink-soft">
//             {notes.length === 0
//               ? "Write your first note to start filling it in."
//               : "Try a different search term."}
//           </p>
//           {notes.length === 0 && (
//             <Link
//               href="/notes/new"
//               className="mt-6 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition hover:bg-ink/85"
//             >
//               + New note
//             </Link>
//           )}
//         </div>
//       ) : (
//         <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
//           {filtered.map((note) => (
//             <NoteCard key={note._id} note={note} onDelete={handleDelete} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }


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
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="relative bg-[#f4ede3]/90 backdrop-blur-[2px] p-6 sm:p-10 lg:p-14 border border-[#cfbea8]/40 shadow-2xl"
          style={{
            /* 4-Side Ripped Paper Polygon Effect */
            clipPath: `polygon(
              /* Top Edge Jagged Points */
              0% 1.5%, 3% 0.5%, 6% 2%, 9% 0.8%, 12% 1.8%, 15% 0.3%, 18% 1.5%, 21% 0.6%, 24% 2%, 
              27% 0.5%, 30% 1.7%, 33% 0.4%, 36% 1.8%, 39% 0.2%, 42% 1.5%, 45% 0.8%, 48% 2%, 
              51% 0.3%, 54% 1.6%, 57% 0.5%, 60% 1.9%, 63% 0.4%, 66% 1.7%, 69% 0.3%, 72% 1.8%, 
              75% 0.6%, 78% 2%, 81% 0.4%, 84% 1.6%, 87% 0.3%, 90% 1.9%, 93% 0.5%, 96% 1.8%, 98% 0.4%, 100% 1.5%,
              
              /* Right Edge Jagged Points */
              98.5% 4%, 99.5% 8%, 98.2% 12%, 99.8% 16%, 98.4% 20%, 99.6% 24%, 98.1% 28%, 
              99.7% 32%, 98.3% 36%, 99.5% 40%, 98.2% 44%, 99.8% 48%, 98.4% 52%, 99.6% 56%, 
              98.1% 60%, 99.7% 64%, 98.3% 68%, 99.5% 72%, 98.2% 76%, 99.8% 80%, 98.4% 84%, 
              99.6% 88%, 98.1% 92%, 99.5% 96%, 98.5% 98.5%,
              
              /* Bottom Edge Jagged Points */
              97% 99.5%, 94% 98.2%, 91% 99.8%, 88% 98.4%, 85% 99.6%, 82% 98.1%, 79% 99.7%, 
              76% 98.3%, 73% 99.5%, 70% 98.2%, 67% 99.8%, 64% 98.4%, 61% 99.6%, 58% 98.1%, 
              55% 99.7%, 52% 98.3%, 49% 99.5%, 46% 98.2%, 43% 99.8%, 40% 98.4%, 37% 99.6%, 
              34% 98.1%, 31% 99.7%, 28% 98.3%, 25% 99.5%, 22% 98.2%, 19% 99.8%, 16% 98.4%, 
              13% 99.6%, 10% 98.1%, 7% 99.7%, 4% 98.3%, 1.5% 99.5%,
              
              /* Left Edge Jagged Points */
              0.5% 96%, 1.8% 92%, 0.2% 88%, 1.6% 84%, 0.4% 80%, 1.9% 76%, 0.3% 72%, 
              1.7% 68%, 0.4% 64%, 1.8% 60%, 0.2% 56%, 1.6% 52%, 0.3% 48%, 1.9% 44%, 
              0.5% 40%, 1.7% 36%, 0.3% 32%, 1.8% 28%, 0.4% 24%, 1.6% 20%, 0.2% 16%, 
              1.9% 12%, 0.5% 8%, 1.7% 4%
            )`,
            transform: 'rotate(0.2deg)',
          }}
        >
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