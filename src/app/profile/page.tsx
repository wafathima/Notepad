"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function ProfilePage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();
  const [noteCount, setNoteCount] = useState<number | null>(null);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login?redirect=/profile");
    }
  }, [loading, user, router]);

  useEffect(() => {
    if (!user) return;
    fetch("/api/notes")
      .then((res) => res.json())
      .then((data) => setNoteCount(Array.isArray(data.notes) ? data.notes.length : 0))
      .catch(() => setNoteCount(null));
  }, [user]);

  const handleLogout = async () => {
    await logout();
    router.push("/");
    router.refresh();
  };

  if (loading || !user) {
    return (
      <div className="mx-auto max-w-2xl px-5 py-16 sm:px-8">
        <div className="h-40 animate-pulse rounded-xl bg-paper-line/50" />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-5 py-16 sm:px-8">
      <span className="font-mono-ui text-xs uppercase tracking-widest text-pencil">profile</span>
      <h1 className="font-display mt-2 text-3xl font-semibold text-ink">Your account</h1>

      <div className="mt-8 rounded-xl border border-paper-line bg-card p-6">
        <div className="flex items-center gap-4">
          <div className="font-display flex h-14 w-14 items-center justify-center rounded-full bg-highlight-soft text-xl font-semibold text-ink">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="font-display text-lg font-semibold text-ink">{user.name}</p>
            <p className="text-sm text-ink-soft">{user.email}</p>
          </div>
        </div>

        <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-paper-line pt-6">
          <div>
            <dt className="font-mono-ui text-xs uppercase tracking-wide text-pencil">Notes</dt>
            <dd className="font-display mt-1 text-2xl text-ink">
              {noteCount === null ? "—" : noteCount}
            </dd>
          </div>
          <div>
            <dt className="font-mono-ui text-xs uppercase tracking-wide text-pencil">Account</dt>
            <dd className="font-display mt-1 text-2xl text-ink">Personal</dd>
          </div>
        </dl>
      </div>

      <div className="mt-6 flex gap-3">
        <Link
          href="/notes"
          className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition hover:bg-ink/85"
        >
          Go to dashboard
        </Link>
        <button
          onClick={handleLogout}
          className="rounded-full border border-paper-line px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-ink"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
