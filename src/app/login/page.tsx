"use client";

import { useState, FormEvent, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

function LoginForm() {
  const { login } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/notes";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email.trim() || !password) {
      setError("Please fill in both fields.");
      return;
    }

    setSubmitting(true);
    try {
      await login(email.trim(), password);
      router.push(redirectTo);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setSubmitting(false);
    }
  };

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

      <div className="mx-auto flex min-h-[calc(100vh-73px)] max-w-md flex-col justify-center px-5 py-16 sm:px-8 filter drop-shadow-[0_20px_25px_rgba(0,0,0,0.3)]">
        
        {/* BACKGROUND ONLY: Distorted Torn Paper Layer */}
        <div 
          className="absolute inset-x-5 inset-y-16 sm:inset-x-8 bg-[#f4ede3]/90 border border-[#cfbea8]/40 backdrop-blur-[2px]"
          style={{
            filter: "url(#torn-paper-edge)",
            transform: 'rotate(0.2deg)',
          }}
        />

        {/* CONTENT LAYER: Crisp Form Elements & Typography */}
        <div className="relative z-10 p-8 sm:p-10">
          
          {/* Vintage tape effect */}
          <div className="absolute -top-3 left-1/2 h-8 w-28 -translate-x-1/2 bg-[#e8dccc]/60 shadow-inner blur-[0.5px]" />

          <div className="text-center">
            <span className="font-mono-ui text-xs uppercase tracking-widest text-[#7a6553]">
              welcome back
            </span>
            <h1 className="font-serif mt-2 text-3xl font-semibold text-[#2c241a]">Log in</h1>
            <p className="mt-2 text-sm text-[#4d3e2e]">
              New here?{" "}
              <Link href="/register" className="font-medium text-[#2c241a] underline underline-offset-2 hover:text-[#1f1811] transition-colors">
                Create an account
              </Link>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[#2c241a]">
                Email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-[#cfbea8] bg-[#fcf5e8] px-4 py-2.5 text-[#2c241a] placeholder:text-[#7a6553] transition-all focus:border-[#2c241a] focus:outline-none focus:ring-2 focus:ring-[#2c241a]/20"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-[#2c241a]">
                Password
              </label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-[#cfbea8] bg-[#fcf5e8] px-4 py-2.5 text-[#2c241a] placeholder:text-[#7a6553] transition-all focus:border-[#2c241a] focus:outline-none focus:ring-2 focus:ring-[#2c241a]/20"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <p role="alert" className="rounded-md bg-[#B3462C]/10 px-3 py-2 text-sm text-[#B3462C] border border-[#B3462C]/20">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-full bg-[#2c241a] px-6 py-3 text-sm font-semibold text-[#f2ede5] transition-all hover:bg-[#1f1811] hover:scale-[0.98] active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
            >
              {submitting ? "Logging in…" : "Log in"}
            </button>
          </form>

          {/* Decorative divider */}
          <div className="mt-6 flex items-center gap-4">
            <div className="flex-1 border-t border-[#cfbea8]"></div>
            <span className="font-mono-ui text-xs text-[#7a6553]">page 01</span>
            <div className="flex-1 border-t border-[#cfbea8]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  );
}