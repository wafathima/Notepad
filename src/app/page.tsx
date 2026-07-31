"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function HomePage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  const handleCreateNote = () => {
    if (loading) return;
    router.push(user ? "/notes" : "/login?redirect=/notes");
  };

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="font-mono-ui inline-block rounded-full bg-highlight-soft px-3 py-1 text-xs uppercase tracking-widest text-ink-soft">
            page 01 — a place to think
          </span>
          <h1 className="font-display mt-6 text-5xl font-semibold leading-[1.05] text-ink sm:text-6xl">
            Notes that stay
            <br />
            exactly where you
            <br />
            left them.
          </h1>
          <p className="mt-6 max-w-md text-lg text-ink-soft">
            Mini Notepad is a fast, private notebook for the things you don&apos;t
            want to lose — quick ideas, longer drafts, and photos of the
            whiteboard. Yours alone, synced wherever you sign in.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button
              onClick={handleCreateNote}
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition hover:bg-ink/85"
            >
              + Create a note
            </button>
            {!user && !loading && (
              <Link
                href="/register"
                className="rounded-full border border-paper-line px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink"
              >
                Create a free account
              </Link>
            )}
          </div>
        </div>

        {/* Signature visual: a small stack of "index card" notes */}
        <div className="relative mx-auto h-72 w-full max-w-sm sm:h-80">
          <div className="dogear absolute inset-x-6 top-8 rounded-lg border border-paper-line bg-card p-5 shadow-sm rotate-[-4deg]">
            <p className="font-mono-ui text-xs text-pencil">grocery-list.note</p>
            <p className="font-display mt-2 text-lg text-ink">Oat milk, eggs, basil, coffee…</p>
          </div>
          <div className="dogear absolute inset-x-2 top-20 rounded-lg border border-paper-line bg-card p-5 shadow-md rotate-[3deg]">
            <p className="font-mono-ui text-xs text-pencil">launch-ideas.note</p>
            <p className="font-display mt-2 text-lg text-ink">Ship the dashboard redesign by Friday.</p>
          </div>
          <div className="dogear absolute inset-x-8 top-32 rounded-lg border border-paper-line bg-card p-5 shadow-lg rotate-[-1deg]">
            <p className="font-mono-ui text-xs text-pencil">recipe.note</p>
            <p className="font-display mt-2 text-lg text-ink">Grandma&apos;s lemon cake — 350°F, 40 min.</p>
          </div>
        </div>
      </div>

      <div className="mt-24 grid gap-8 border-t border-paper-line pt-14 sm:grid-cols-3">
        <Feature
          label="02"
          title="Write freely"
          body="A clean writing surface with autosave-friendly editing — no clutter, no distractions."
        />
        <Feature
          label="03"
          title="Drop in images"
          body="Attach photos of receipts, whiteboards, or sketches right inside a note."
        />
        <Feature
          label="04"
          title="Yours alone"
          body="Every note is private to your account — sign in and it's exactly as you left it."
        />
      </div>
    </div>
  );
}

function Feature({ label, title, body }: { label: string; title: string; body: string }) {
  return (
    <div>
      <span className="font-mono-ui text-xs text-pencil">{label}</span>
      <h3 className="font-display mt-2 text-xl font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{body}</p>
    </div>
  );
}
