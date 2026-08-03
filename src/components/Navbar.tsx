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
    <header className="sticky top-4 z-50 mx-auto max-w-4xl px-4 sm:px-6">
      {/* Torn paper navbar container - transparent with border */}
      <div className="relative">
        {/* Decorative torn paper edge - top */}
        <div className="absolute -top-2 left-0 right-0 h-3">
          <div className="h-full w-full" style={{
            clipPath: `polygon(
              0% 100%, 2% 80%, 4% 100%, 6% 75%, 8% 100%, 10% 85%, 12% 100%, 
              14% 70%, 16% 100%, 18% 90%, 20% 100%, 22% 75%, 24% 100%, 
              26% 85%, 28% 100%, 30% 70%, 32% 100%, 34% 90%, 36% 100%, 
              38% 75%, 40% 100%, 42% 85%, 44% 100%, 46% 70%, 48% 100%, 
              50% 90%, 52% 100%, 54% 75%, 56% 100%, 58% 85%, 60% 100%, 
              62% 70%, 64% 100%, 66% 90%, 68% 100%, 70% 75%, 72% 100%, 
              74% 85%, 76% 100%, 78% 70%, 80% 100%, 82% 90%, 84% 100%, 
              86% 75%, 88% 100%, 90% 85%, 92% 100%, 94% 70%, 96% 100%, 
              98% 90%, 100% 100%
            )`,
            background: 'rgba(244, 237, 227, 0.85)',
            backdropFilter: 'blur(4px)',
            borderBottom: '2px solid #cfbea8',
          }} />
        </div>

        <nav className="relative bg-[#f4ede3]/80 backdrop-blur-[4px] border border-[#cfbea8]/60 shadow-lg px-6 py-4 sm:px-8"
          style={{
            clipPath: `polygon(
              0% 0%, 2% 2%, 4% 0%, 6% 3%, 8% 0%, 10% 2%, 12% 0%, 
              14% 3%, 16% 0%, 18% 2%, 20% 0%, 22% 3%, 24% 0%, 
              26% 2%, 28% 0%, 30% 3%, 32% 0%, 34% 2%, 36% 0%, 
              38% 3%, 40% 0%, 42% 2%, 44% 0%, 46% 3%, 48% 0%, 
              50% 2%, 52% 0%, 54% 3%, 56% 0%, 58% 2%, 60% 0%, 
              62% 3%, 64% 0%, 66% 2%, 68% 0%, 70% 3%, 72% 0%, 
              74% 2%, 76% 0%, 78% 3%, 80% 0%, 82% 2%, 84% 0%, 
              86% 3%, 88% 0%, 90% 2%, 92% 0%, 94% 3%, 96% 0%, 
              98% 2%, 100% 0%,
              100% 100%, 98% 98%, 96% 100%, 94% 97%, 92% 100%, 
              90% 98%, 88% 100%, 86% 97%, 84% 100%, 82% 98%, 
              80% 100%, 78% 97%, 76% 100%, 74% 98%, 72% 100%, 
              70% 97%, 68% 100%, 66% 98%, 64% 100%, 62% 97%, 
              60% 100%, 58% 98%, 56% 100%, 54% 97%, 52% 100%, 
              50% 98%, 48% 100%, 46% 97%, 44% 100%, 42% 98%, 
              40% 100%, 38% 97%, 36% 100%, 34% 98%, 32% 100%, 
              30% 97%, 28% 100%, 26% 98%, 24% 100%, 22% 97%, 
              20% 100%, 18% 98%, 16% 100%, 14% 97%, 12% 100%, 
              10% 98%, 8% 100%, 6% 97%, 4% 100%, 2% 98%, 0% 100%
            )`,
          }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            {/* Logo - Left side on desktop, center on mobile */}
            <div className="w-full sm:w-auto flex justify-center sm:justify-start">
              <Link
                href="/"
                className="flex items-center gap-2 font-serif text-xl font-semibold text-[#2c241a] hover:text-[#1f1811] transition-colors"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-[#2c241a] text-[#f2ede5] font-mono text-sm shadow-sm">
                  ✎
                </span>
                <span className="tracking-tight">Notepad</span>
              </Link>
            </div>

            {/* Center navigation links - hidden on mobile, visible on desktop */}
            <div className="hidden sm:flex items-center gap-6">
              <Link 
                href="/notes" 
                className="font-mono text-sm text-[#4d3e2e] hover:text-[#2c241a] transition-colors relative group"
              >
                Notes
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2c241a] transition-all group-hover:w-full"></span>
              </Link>
              <Link 
                href="/profile" 
                className="font-mono text-sm text-[#4d3e2e] hover:text-[#2c241a] transition-colors relative group"
              >
                Profile
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2c241a] transition-all group-hover:w-full"></span>
              </Link>
            </div>

            {/* Auth buttons - Right side */}
            <div className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3">
              {loading ? (
                <div className="h-9 w-24 animate-pulse rounded-full bg-[#d6c9b8]" />
              ) : user ? (
                <>
                  <Link
                    href="/notes"
                    className="sm:hidden rounded-full px-3 py-1.5 text-sm font-medium text-[#4d3e2e] border border-[#cfbea8] hover:border-[#2c241a] transition-all"
                  >
                    Notes
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="rounded-full bg-[#2c241a] px-4 py-2 text-sm font-medium text-[#f2ede5] transition-all hover:scale-95 hover:bg-[#1f1811] active:scale-90 shadow-sm"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="rounded-full px-4 py-2 text-sm font-medium text-[#4d3e2e] transition-all hover:text-[#2c241a] hover:bg-[#d6c9b8]/20 hover:scale-95 active:scale-90"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="rounded-full bg-[#2c241a] px-4 py-2 text-sm font-medium text-[#f2ede5] transition-all hover:scale-95 hover:bg-[#1f1811] active:scale-90 shadow-sm"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Decorative torn paper edge - bottom */}
          <div className="absolute -bottom-2 left-0 right-0 h-3">
            <div className="h-full w-full" style={{
              clipPath: `polygon(
                0% 0%, 2% 20%, 4% 0%, 6% 30%, 8% 0%, 10% 15%, 12% 0%, 
                14% 35%, 16% 0%, 18% 10%, 20% 0%, 22% 25%, 24% 0%, 
                26% 20%, 28% 0%, 30% 30%, 32% 0%, 34% 15%, 36% 0%, 
                38% 35%, 40% 0%, 42% 10%, 44% 0%, 46% 25%, 48% 0%, 
                50% 20%, 52% 0%, 54% 30%, 56% 0%, 58% 15%, 60% 0%, 
                62% 35%, 64% 0%, 66% 10%, 68% 0%, 70% 25%, 72% 0%, 
                74% 20%, 76% 0%, 78% 30%, 80% 0%, 82% 15%, 84% 0%, 
                86% 35%, 88% 0%, 90% 10%, 92% 0%, 94% 25%, 96% 0%, 
                98% 20%, 100% 0%
              )`,
              background: 'rgba(244, 237, 227, 0.85)',
              backdropFilter: 'blur(4px)',
              borderTop: '2px solid #cfbea8',
            }} />
          </div>

          {/* Vintage tape effect - center top */}
          <div className="absolute -top-3 left-1/2 h-6 w-16 -translate-x-1/2 bg-[#e8dccc]/60 shadow-inner blur-[0.5px]"></div>
        </nav>
      </div>
    </header>
  );
}