"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/");
    router.refresh();
  };

  return (
    <header className="sticky top-0 z-40 border-b border-paper-line bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight text-ink"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-ink text-paper text-sm font-mono-ui">
            m
          </span>
          Mini Notepad
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          {loading ? (
            <div className="h-8 w-24 animate-pulse rounded-full bg-paper-line" />
          ) : user ? (
            <>
              <Link
                href="/notes"
                className="hidden rounded-full px-4 py-2 text-sm font-medium text-ink-soft transition hover:text-ink sm:inline-block"
              >
                Dashboard
              </Link>
              <Link
                href="/profile"
                className="rounded-full px-4 py-2 text-sm font-medium text-ink-soft transition hover:text-ink"
              >
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition hover:bg-ink/85"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="rounded-full px-4 py-2 text-sm font-medium text-ink-soft transition hover:text-ink"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition hover:bg-ink/85"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
