// //src/app/profile/page.tsx
// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useAuth } from "@/context/AuthContext";

// export default function ProfilePage() {
//   const { user, loading, logout } = useAuth();
//   const router = useRouter();
//   const [noteCount, setNoteCount] = useState<number | null>(null);

//   useEffect(() => {
//     if (!loading && !user) {
//       router.push("/login?redirect=/profile");
//     }
//   }, [loading, user, router]);

//   useEffect(() => {
//     if (!user) return;
//     fetch("/api/notes")
//       .then((res) => res.json())
//       .then((data) => setNoteCount(Array.isArray(data.notes) ? data.notes.length : 0))
//       .catch(() => setNoteCount(null));
//   }, [user]);

//   const handleLogout = async () => {
//     await logout();
//     router.push("/");
//     router.refresh();
//   };

//   if (loading || !user) {
//     return (
//       <div className="mx-auto max-w-2xl px-5 py-16 sm:px-8">
//         <div className="h-40 animate-pulse rounded-xl bg-paper-line/50" />
//       </div>
//     );
//   }

//   return (
//     <div className="mx-auto max-w-2xl px-5 py-16 sm:px-8">
//       <span className="font-mono-ui text-xs uppercase tracking-widest text-[#FFFF]">profile</span>
//       <h1 className="font-display mt-2 text-3xl font-semibold text-ink">Your account</h1>

//       <div className="mt-8 rounded-xl border border-paper-line bg-card p-6">
//         <div className="flex items-center gap-4">
//           <div className="font-display flex h-14 w-14 items-center justify-center rounded-full bg-highlight-soft text-xl font-semibold text-ink">
//             {user.name.charAt(0).toUpperCase()}
//           </div>
//           <div>
//             <p className="font-display text-lg font-semibold text-ink">{user.name}</p>
//             <p className="text-sm text-ink-soft">{user.email}</p>
//           </div>
//         </div>

//         <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-paper-line pt-6">
//           <div>
//             <dt className="font-mono-ui text-xs uppercase tracking-wide text-pencil">Notes</dt>
//             <dd className="font-display mt-1 text-2xl text-ink">
//               {noteCount === null ? "—" : noteCount}
//             </dd>
//           </div>
//           <div>
//             <dt className="font-mono-ui text-xs uppercase tracking-wide text-pencil">Account</dt>
//             <dd className="font-display mt-1 text-2xl text-ink">Personal</dd>
//           </div>
//         </dl>
//       </div>

//       <div className="mt-6 flex gap-3">
//         <Link
//           href="/notes"
//           className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition hover:bg-ink/85"
//         >
//           Go to dashboard
//         </Link>
//         <button
//           onClick={handleLogout}
//           className="rounded-full border border-paper-line px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-ink"
//         >
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// }


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
      <div className="mx-auto max-w-2xl px-5 py-16 sm:px-8">
        <div className="relative bg-[#f4ede3]/90 backdrop-blur-[2px] p-6 sm:p-10 border border-[#cfbea8]/40 shadow-2xl"
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