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
    <div>
      <svg className="absolute h-0 w-0" aria-hidden="true">
        <defs>
          <filter id="torn-paper-edge" x="-10%" y="-10%" width="120%" height="120%">
            {/* Generates natural fractal noise */}
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.03"
              numOctaves="4"
              result="noise"
            />
            {/* Uses noise to distort edges into an organic paper tear */}
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="14"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* Main Wrapper Container */}
      <div className="relative mx-auto max-w-5xl p-4 sm:p-8 filter drop-shadow-[0_20px_25px_rgba(0,0,0,0.5)]">
        
        {/* BACKGROUND ONLY: Torn Paper Sheet (Distortion filter applied ONLY here) */}
        <div 
          className="absolute inset-4 sm:inset-8 bg-[#4B3621]/90 border border-[#cfbea8]/50 backdrop-blur-[4px]"
          style={{
            filter: "url(#torn-paper-edge)",
            transform: 'rotate(0.2deg)',
          }}
        />

        {/* CONTENT LAYER: Untouched, sharp text, fonts, and cards */}
        <div className="relative z-10 p-6 sm:p-10 lg:p-14">
          
          {/* Top Tape Graphic Effect */}
          <div className="absolute -top-3 left-1/2 h-8 w-28 -translate-x-1/2 bg-[#e8dccc]/60 shadow-inner blur-[0.5px]" />

          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Left Content Column */}
            <div>
              <span className="inline-block rounded-full border border-[#d6c9b8] bg-[#e6dac8] px-4 py-1 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[#4d3e2e] shadow-sm">
                page 01 — a place to think
              </span>
              
              <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.1] text-[#F3E5AB] sm:text-5xl lg:text-6xl">
                Notes that stay
                <br />
                exactly where you
                <br />
                left them.
              </h1>
              
              <p className="mt-6 max-w-md text-base text-[#FFFFFF] leading-relaxed sm:text-lg">
                Mini Notepad is a fast, private notebook for the things you don&apos;t
                want to lose — quick ideas, longer drafts, and photos of the
                whiteboard. Yours alone, synced wherever you sign in.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={handleCreateNote}
                  className="rounded-full bg-[#2c241a] px-6 py-3 text-sm font-semibold text-[#f2ede5] shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#1f1811] hover:shadow-lg active:scale-95"
                >
                  ✎ Create a note
                </button>
                {!user && !loading && (
                  <Link
                    href="/register"
                    className="rounded-full border-2 border-[#b8a186] px-6 py-3 text-sm font-semibold text-[#f2ede5] transition-all duration-300 hover:scale-105 hover:border-[#2c241a] hover:bg-[#2c241a] hover:text-[#f2ede5] active:scale-95"
                  >
                    Create a free account
                  </Link>
                )}
              </div>
            </div>

            {/* Right Stack Column with Floating Animations */}
            <div className="relative mx-auto h-72 w-full max-w-sm sm:h-80">
              {/* Note 1 */}
              <div 
                className="absolute inset-x-6 top-8 rounded-lg border border-[#cfbea8] bg-[#fcf5e8] p-5 shadow-sm transition-all duration-300 hover:z-20 hover:scale-110 hover:shadow-xl"
                style={{
                  animation: 'float1 5s ease-in-out infinite',
                }}
              >
                <div className="absolute -top-px right-2 h-4 w-4 rounded-br-md border-r border-b border-[#cfbea8] bg-[#e8dccc]" />
                <p className="font-mono text-xs text-[#7a6553]">grocery-list.note</p>
                <p className="mt-2 font-serif text-lg text-[#2c241a]">Oat milk, eggs, basil, coffee…</p>
              </div>

              {/* Note 2 */}
              <div 
                className="absolute inset-x-2 top-20 rounded-lg border border-[#cfbea8] bg-[#fcf5e8] p-5 shadow-md transition-all duration-300 hover:z-20 hover:scale-105 hover:shadow-xl"
                style={{
                  animation: 'float2 6s ease-in-out infinite 0.5s',
                }}
              >
                <div className="absolute -top-px right-2 h-4 w-4 rounded-br-md border-r border-b border-[#cfbea8] bg-[#e8dccc]" />
                <p className="font-mono text-xs text-[#7a6553]">launch-ideas.note</p>
                <p className="mt-2 font-serif text-lg text-[#2c241a]">Ship the dashboard redesign by Friday.</p>
              </div>

              {/* Note 3 */}
              <div 
                className="absolute inset-x-8 top-32 rounded-lg border border-[#cfbea8] bg-[#fcf5e8] p-5 shadow-lg transition-all duration-300 hover:z-20 hover:scale-105 hover:shadow-xl"
                style={{
                  animation: 'float3 4.5s ease-in-out infinite 1s',
                }}
              >
                <div className="absolute -top-px right-2 h-4 w-4 rounded-br-md border-r border-b border-[#cfbea8] bg-[#e8dccc]" />
                <p className="font-mono text-xs text-[#7a6553]">recipe.note</p>
                <p className="mt-2 font-serif text-lg text-[#2c241a]">Grandma&apos;s lemon cake — 350°F, 40 min.</p>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mt-16 grid gap-6 border-t border-[#d6c9b8] pt-10 sm:grid-cols-3">
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
      </div>

      {/* CSS Keyframe Animations for Floating Cards */}
      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: rotate(-4deg) translateY(0px); }
          50% { transform: rotate(-4deg) translateY(-8px); }
        }
        @keyframes float2 {
          0%, 100% { transform: rotate(3deg) translateY(0px); }
          50% { transform: rotate(3deg) translateY(-10px); }
        }
        @keyframes float3 {
          0%, 100% { transform: rotate(-1deg) translateY(0px); }
          50% { transform: rotate(-1deg) translateY(-6px); }
        }
      `}</style>
    </div>
  );
}

function Feature({ label, title, body }: { label: string; title: string; body: string }) {
  return (
    <div className="group rounded-r-lg p-2 transition-all duration-300 bg-[#3C2415] hover:bg-[#d6c9b8]/20 hover:pl-4">
      <span className="font-mono text-xs text-[#FFFDD0]">{label}</span>
      <h3 className="mt-2 font-serif text-xl font-semibold text-[#F3E5AB]">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[#FFF8DC]">{body}</p>
    </div>
  );
}