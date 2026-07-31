// // //src/app/profile/page.tsx
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
      <div className="relative min-h-screen">
        <div className="mx-auto max-w-2xl px-5 py-16 sm:px-8">
          <div className="h-40 animate-pulse rounded-lg bg-[#d6c9b8]/30" />
        </div>
      </div>
    );
  }

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

      <div className="mx-auto flex min-h-[calc(100vh-73px)] max-w-2xl flex-col justify-center px-5 py-16 sm:px-8 filter drop-shadow-[0_20px_25px_rgba(0,0,0,0.3)]">
        
        {/* BACKGROUND ONLY: Distorted Torn Paper Layer */}
        <div 
          className="absolute inset-x-5 inset-y-16 sm:inset-x-8 bg-[#f4ede3]/90 border border-[#cfbea8]/40 backdrop-blur-[2px]"
          style={{
            filter: "url(#torn-paper-edge)",
            transform: 'rotate(0.2deg)',
          }}
        />

        {/* CONTENT LAYER: Crisp Typography & Profile Elements */}
        <div className="relative z-10 p-6 sm:p-10">
          
          {/* Vintage tape effect */}
          <div className="absolute -top-3 left-1/2 h-8 w-28 -translate-x-1/2 bg-[#e8dccc]/60 shadow-inner blur-[0.5px]" />

          <span className="font-mono-ui text-xs uppercase tracking-widest text-[#7a6553]">profile</span>
          <h1 className="font-serif mt-2 text-3xl font-semibold text-[#2c241a]">Your account</h1>

          <div className="mt-8 rounded-lg border border-[#cfbea8] bg-[#fcf5e8] p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="font-serif flex h-14 w-14 items-center justify-center rounded-full bg-[#e6dac8] text-xl font-semibold text-[#2c241a] border border-[#cfbea8]">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="font-serif text-lg font-semibold text-[#2c241a]">{user.name}</p>
                <p className="text-sm text-[#4d3e2e]">{user.email}</p>
              </div>
            </div>

            <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-[#cfbea8] pt-6">
              <div>
                <dt className="font-mono-ui text-xs uppercase tracking-wide text-[#7a6553]">Notes</dt>
                <dd className="font-serif mt-1 text-2xl text-[#2c241a]">
                  {noteCount === null ? "—" : noteCount}
                </dd>
              </div>
              <div>
                <dt className="font-mono-ui text-xs uppercase tracking-wide text-[#7a6553]">Account</dt>
                <dd className="font-serif mt-1 text-2xl text-[#2c241a]">Personal</dd>
              </div>
            </dl>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/notes"
              className="rounded-full bg-[#2c241a] px-5 py-2.5 text-sm font-semibold text-[#f2ede5] transition hover:bg-[#1f1811] hover:scale-95 active:scale-90 shadow-md hover:shadow-lg"
            >
              Go to dashboard
            </Link>
            <button
              onClick={handleLogout}
              className="rounded-full border-2 border-[#cfbea8] px-5 py-2.5 text-sm font-semibold text-[#2c241a] transition hover:border-[#2c241a] hover:bg-[#2c241a] hover:text-[#f2ede5] hover:scale-95 active:scale-90"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}