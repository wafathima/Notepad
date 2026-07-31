// "use client";

// import { useState, FormEvent, Suspense } from "react";
// import Link from "next/link";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useAuth } from "@/context/AuthContext";

// function LoginForm() {
//   const { login } = useAuth();
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const redirectTo = searchParams.get("redirect") || "/notes";

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState<string | null>(null);
//   const [submitting, setSubmitting] = useState(false);

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     setError(null);

//     if (!email.trim() || !password) {
//       setError("Please fill in both fields.");
//       return;
//     }

//     setSubmitting(true);
//     try {
//       await login(email.trim(), password);
//       router.push(redirectTo);
//       router.refresh();
//     } catch (err) {
//       setError(err instanceof Error ? err.message : "Login failed");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div className="mx-auto flex min-h-[calc(100vh-73px)] max-w-md flex-col justify-center px-5 py-16 sm:px-8">
//       <span className="font-mono-ui text-xs uppercase tracking-widest text-pencil">
//         welcome back
//       </span>
//       <h1 className="font-display mt-2 text-3xl font-semibold text-ink">Log in</h1>
//       <p className="mt-2 text-sm text-ink-soft">
//         New here?{" "}
//         <Link href="/register" className="font-medium text-accent-teal underline underline-offset-2">
//           Create an account
//         </Link>
//       </p>

//       <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
//         <Field label="Email" htmlFor="email">
//           <input
//             id="email"
//             type="email"
//             autoComplete="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="input"
//             placeholder="you@example.com"
//           />
//         </Field>

//         <Field label="Password" htmlFor="password">
//           <input
//             id="password"
//             type="password"
//             autoComplete="current-password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="input"
//             placeholder="••••••••"
//           />
//         </Field>

//         {error && (
//           <p role="alert" className="rounded-md bg-danger/10 px-3 py-2 text-sm text-danger">
//             {error}
//           </p>
//         )}

//         <button
//           type="submit"
//           disabled={submitting}
//           className="w-full rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition hover:bg-ink/85 disabled:opacity-60"
//         >
//           {submitting ? "Logging in…" : "Log in"}
//         </button>
//       </form>
//     </div>
//   );
// }

// // Custom lightweight styles applied via className="input" — defined once here.
// function Field({
//   label,
//   htmlFor,
//   children,
// }: {
//   label: string;
//   htmlFor: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <div>
//       <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-ink">
//         {label}
//       </label>
//       {children}
//     </div>
//   );
// }

// export default function LoginPage() {
//   return (
//     <Suspense fallback={null}>
//       <LoginForm />
//     </Suspense>
//   );
// }


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
      <div className="mx-auto flex min-h-[calc(100vh-73px)] max-w-md flex-col justify-center px-5 py-16 sm:px-8">
        <div className="relative bg-[#f4ede3]/90 backdrop-blur-[2px] p-8 sm:p-10 border border-[#cfbea8]/40 shadow-2xl"
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