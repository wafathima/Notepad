// // "use client";

// // import Link from "next/link";
// // import { useRouter } from "next/navigation";
// // import { useAuth } from "@/context/AuthContext";

// // export default function HomePage() {
// //   const { user, loading } = useAuth();
// //   const router = useRouter();

// //   const handleCreateNote = () => {
// //     if (loading) return;
// //     router.push(user ? "/notes" : "/login?redirect=/notes");
// //   };

// //   return (
// //     <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
// //       <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
// //         <div>
// //           <span className="font-mono-ui inline-block rounded-full bg-highlight-soft px-3 py-1 text-xs uppercase tracking-widest text-ink-soft">
// //             page 01 — a place to think
// //           </span>
// //           <h1 className="font-display mt-6 text-5xl font-semibold leading-[1.05] text-ink sm:text-6xl">
// //             Notes that stay
// //             <br />
// //             exactly where you
// //             <br />
// //             left them.
// //           </h1>
// //           <p className="mt-6 max-w-md text-lg text-ink-soft">
// //             Mini Notepad is a fast, private notebook for the things you don&apos;t
// //             want to lose — quick ideas, longer drafts, and photos of the
// //             whiteboard. Yours alone, synced wherever you sign in.
// //           </p>

// //           <div className="mt-9 flex flex-wrap items-center gap-4">
// //             <button
// //               onClick={handleCreateNote}
// //               className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition hover:bg-ink/85"
// //             >
// //               + Create a note
// //             </button>
// //             {!user && !loading && (
// //               <Link
// //                 href="/register"
// //                 className="rounded-full border border-paper-line px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink"
// //               >
// //                 Create a free account
// //               </Link>
// //             )}
// //           </div>
// //         </div>

// //         {/* Signature visual: a small stack of "index card" notes */}
// //         <div className="relative mx-auto h-72 w-full max-w-sm sm:h-80">
// //           <div className="dogear absolute inset-x-6 top-8 rounded-lg border border-paper-line bg-card p-5 shadow-sm rotate-[-4deg]">
// //             <p className="font-mono-ui text-xs text-pencil">grocery-list.note</p>
// //             <p className="font-display mt-2 text-lg text-ink">Oat milk, eggs, basil, coffee…</p>
// //           </div>
// //           <div className="dogear absolute inset-x-2 top-20 rounded-lg border border-paper-line bg-card p-5 shadow-md rotate-[3deg]">
// //             <p className="font-mono-ui text-xs text-pencil">launch-ideas.note</p>
// //             <p className="font-display mt-2 text-lg text-ink">Ship the dashboard redesign by Friday.</p>
// //           </div>
// //           <div className="dogear absolute inset-x-8 top-32 rounded-lg border border-paper-line bg-card p-5 shadow-lg rotate-[-1deg]">
// //             <p className="font-mono-ui text-xs text-pencil">recipe.note</p>
// //             <p className="font-display mt-2 text-lg text-ink">Grandma&apos;s lemon cake — 350°F, 40 min.</p>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="mt-24 grid gap-8 border-t border-paper-line pt-14 sm:grid-cols-3">
// //         <Feature
// //           label="02"
// //           title="Write freely"
// //           body="A clean writing surface with autosave-friendly editing — no clutter, no distractions."
// //         />
// //         <Feature
// //           label="03"
// //           title="Drop in images"
// //           body="Attach photos of receipts, whiteboards, or sketches right inside a note."
// //         />
// //         <Feature
// //           label="04"
// //           title="Yours alone"
// //           body="Every note is private to your account — sign in and it's exactly as you left it."
// //         />
// //       </div>
// //     </div>
// //   );
// // }

// // function Feature({ label, title, body }: { label: string; title: string; body: string }) {
// //   return (
// //     <div>
// //       <span className="font-mono-ui text-xs text-pencil">{label}</span>
// //       <h3 className="font-display mt-2 text-xl font-semibold text-ink">{title}</h3>
// //       <p className="mt-2 text-sm leading-relaxed text-ink-soft">{body}</p>
// //     </div>
// //   );
// // }


// // "use client";

// // import Link from "next/link";
// // import { useRouter } from "next/navigation";
// // import { useAuth } from "@/context/AuthContext";

// // export default function HomePage() {
// //   const { user, loading } = useAuth();
// //   const router = useRouter();

// //   const handleCreateNote = () => {
// //     if (loading) return;
// //     router.push(user ? "/notes" : "/login?redirect=/notes");
// //   };

// //   return (
// //     <div 
// //       className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat p-4 sm:p-8 md:p-12"
// //       style={{ backgroundImage: "url('/images/project.png')" }}
// //     >
// //       {/* Dark tint overlay to make the main content pop over the detailed background */}
// //       <div className="pointer-events-none absolute inset-0 bg-black/10" />

// //       {/* Main Vintage Torn-Paper Container */}
// //       <div className="relative mx-auto max-w-5xl">
// //         <div 
// //           className="relative bg-[#4B3621]/90 p-6 sm:p-10 lg:p-14 border border-[#cfbea8]/50 shadow-2xl backdrop-blur-[4px] transition-all duration-300 hover:shadow-[0_30px_50px_-16px_rgba(0,0,0,0.4)]"
// //           style={{
// //             clipPath: `polygon(
// //               0% 0%, 2% 1%, 4% 0.5%, 6% 1.5%, 8% 0%, 10% 1%, 12% 0.5%, 
// //               14% 1.5%, 16% 0%, 18% 1%, 20% 0.5%, 22% 1.5%, 24% 0%, 
// //               26% 1%, 28% 0.5%, 30% 1.5%, 32% 0%, 34% 1%, 36% 0.5%, 
// //               38% 1.5%, 40% 0%, 42% 1%, 44% 0.5%, 46% 1.5%, 48% 0%, 
// //               50% 1%, 52% 0.5%, 54% 1.5%, 56% 0%, 58% 1%, 60% 0.5%, 
// //               62% 1.5%, 64% 0%, 66% 1%, 68% 0.5%, 70% 1.5%, 72% 0%, 
// //               74% 1%, 76% 0.5%, 78% 1.5%, 80% 0%, 82% 1%, 84% 0.5%, 
// //               86% 1.5%, 88% 0%, 90% 1%, 92% 0.5%, 94% 1.5%, 96% 0%, 
// //               98% 1%, 100% 0.5%,
// //               100% 95%, 98% 96.5%, 96% 98%, 94% 97%, 92% 98.5%, 
// //               90% 99%, 88% 97.5%, 86% 98%, 84% 96.5%, 82% 99%, 
// //               80% 97.5%, 78% 98%, 76% 96.5%, 74% 99%, 72% 97.5%, 
// //               70% 98%, 68% 96.5%, 66% 99%, 64% 97.5%, 62% 98%, 
// //               60% 96.5%, 58% 99%, 56% 97.5%, 54% 98%, 52% 96.5%, 
// //               50% 99%, 48% 97.5%, 46% 98%, 44% 96.5%, 42% 99%, 
// //               40% 97.5%, 38% 98%, 36% 96.5%, 34% 99%, 32% 97.5%, 
// //               30% 98%, 28% 96.5%, 26% 99%, 24% 97.5%, 22% 98%, 
// //               20% 96.5%, 18% 99%, 16% 97.5%, 14% 98%, 12% 96.5%, 
// //               10% 99%, 8% 97.5%, 6% 98%, 4% 96.5%, 2% 99%, 0% 97.5%
// //             )`,
// //             transform: 'rotate(0.2deg)',
// //           }}
// //         >
// //           {/* Top Tape Graphic Effect */}
// //           <div className="absolute -top-3 left-1/2 h-8 w-28 -translate-x-1/2 bg-[#e8dccc]/60 shadow-inner blur-[0.5px]" />

// //           <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
// //             {/* Left Content Column */}
// //             <div>
// //               <span className="inline-block rounded-full border border-[#d6c9b8] bg-[#e6dac8] px-4 py-1 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[#4d3e2e] shadow-sm">
// //                 page 01 — a place to think
// //               </span>
              
// //               <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.1] text-[#F3E5AB] sm:text-5xl lg:text-6xl">
// //                 Notes that stay
// //                 <br />
// //                 exactly where you
// //                 <br />
// //                 left them.
// //               </h1>
              
// //               <p className="mt-6 max-w-md text-base text-[#FFFFFF] leading-relaxed sm:text-lg">
// //                 Mini Notepad is a fast, private notebook for the things you don&apos;t
// //                 want to lose — quick ideas, longer drafts, and photos of the
// //                 whiteboard. Yours alone, synced wherever you sign in.
// //               </p>

// //               <div className="mt-8 flex flex-wrap items-center gap-4">
// //                 <button
// //                   onClick={handleCreateNote}
// //                   className="rounded-full bg-[#2c241a] px-6 py-3 text-sm font-semibold text-[#f2ede5] shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#1f1811] hover:shadow-lg active:scale-95"
// //                 >
// //                   ✎ Create a note
// //                 </button>
// //                 {!user && !loading && (
// //                   <Link
// //                     href="/register"
// //                     className="rounded-full border-2 border-[#b8a186] px-6 py-3 text-sm font-semibold text-[#f2ede5] transition-all duration-300 hover:scale-105 hover:border-[#2c241a] hover:bg-[#2c241a] hover:text-[#f2ede5] active:scale-95"
// //                   >
// //                     Create a free account
// //                   </Link>
// //                 )}
// //               </div>
// //             </div>

// //             {/* Right Stack Column with Floating Animations */}
// //             <div className="relative mx-auto h-72 w-full max-w-sm sm:h-80">
// //               {/* Note 1 */}
// //               <div 
// //                 className="absolute inset-x-6 top-8 rounded-lg border border-[#cfbea8] bg-[#fcf5e8] p-5 shadow-sm transition-all duration-300 hover:z-20 hover:scale-105 hover:shadow-xl"
// //                 style={{
// //                   animation: 'float1 5s ease-in-out infinite',
// //                 }}
// //               >
// //                 <div className="absolute -top-px right-2 h-4 w-4 rounded-br-md border-r border-b border-[#cfbea8] bg-[#e8dccc]" />
// //                 <p className="font-mono text-xs text-[#7a6553]">grocery-list.note</p>
// //                 <p className="mt-2 font-serif text-lg text-[#2c241a]">Oat milk, eggs, basil, coffee…</p>
// //               </div>

// //               {/* Note 2 */}
// //               <div 
// //                 className="absolute inset-x-2 top-20 rounded-lg border border-[#cfbea8] bg-[#fcf5e8] p-5 shadow-md transition-all duration-300 hover:z-20 hover:scale-105 hover:shadow-xl"
// //                 style={{
// //                   animation: 'float2 6s ease-in-out infinite 0.5s',
// //                 }}
// //               >
// //                 <div className="absolute -top-px right-2 h-4 w-4 rounded-br-md border-r border-b border-[#cfbea8] bg-[#e8dccc]" />
// //                 <p className="font-mono text-xs text-[#7a6553]">launch-ideas.note</p>
// //                 <p className="mt-2 font-serif text-lg text-[#2c241a]">Ship the dashboard redesign by Friday.</p>
// //               </div>

// //               {/* Note 3 */}
// //               <div 
// //                 className="absolute inset-x-8 top-32 rounded-lg border border-[#cfbea8] bg-[#fcf5e8] p-5 shadow-lg transition-all duration-300 hover:z-20 hover:scale-105 hover:shadow-xl"
// //                 style={{
// //                   animation: 'float3 4.5s ease-in-out infinite 1s',
// //                 }}
// //               >
// //                 <div className="absolute -top-px right-2 h-4 w-4 rounded-br-md border-r border-b border-[#cfbea8] bg-[#e8dccc]" />
// //                 <p className="font-mono text-xs text-[#7a6553]">recipe.note</p>
// //                 <p className="mt-2 font-serif text-lg text-[#2c241a]">Grandma&apos;s lemon cake — 350°F, 40 min.</p>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Features Section */}
// //           <div className="mt-16 grid gap-6 border-t border-[#d6c9b8] pt-10 sm:grid-cols-3">
// //             <Feature
// //               label="02"
// //               title="Write freely"
// //               body="A clean writing surface with autosave-friendly editing — no clutter, no distractions."
// //             />
// //             <Feature
// //               label="03"
// //               title="Drop in images"
// //               body="Attach photos of receipts, whiteboards, or sketches right inside a note."
// //             />
// //             <Feature
// //               label="04"
// //               title="Yours alone"
// //               body="Every note is private to your account — sign in and it's exactly as you left it."
// //             />
// //           </div>
// //         </div>
// //       </div>

// //       {/* CSS Keyframe Animations for Floating Cards */}
// //       <style jsx>{`
// //         @keyframes float1 {
// //           0%, 100% { transform: rotate(-4deg) translateY(0px); }
// //           50% { transform: rotate(-4deg) translateY(-8px); }
// //         }
// //         @keyframes float2 {
// //           0%, 100% { transform: rotate(3deg) translateY(0px); }
// //           50% { transform: rotate(3deg) translateY(-10px); }
// //         }
// //         @keyframes float3 {
// //           0%, 100% { transform: rotate(-1deg) translateY(0px); }
// //           50% { transform: rotate(-1deg) translateY(-6px); }
// //         }
// //       `}</style>
// //     </div>
// //   );
// // }

// // function Feature({ label, title, body }: { label: string; title: string; body: string }) {
// //   return (
// //     <div className="group rounded-r-lg p-2 transition-all duration-300 bg-3C2415 hover:bg-[#d6c9b8]/20 hover:pl-4">
// //       <span className="font-mono text-xs text-[#FFFDD0]">{label}</span>
// //       <h3 className="mt-2 font-serif text-xl font-semibold text-[#F3E5AB]">{title}</h3>
// //       <p className="mt-2 text-sm leading-relaxed text-[#FFF8DC]">{body}</p>
// //     </div>
// //   );
// // }


// // Page.tsx
// "use client";

// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useAuth } from "@/context/AuthContext";

// export default function HomePage() {
//   const { user, loading } = useAuth();
//   const router = useRouter();

//   const handleCreateNote = () => {
//     if (loading) return;
//     router.push(user ? "/notes" : "/login?redirect=/notes");
//   };

//   return (
//     <div>
//       {/* Main Vintage Torn-Paper Container */}
//       <div className="relative mx-auto max-w-5xl">
//         <div 
//           className="relative bg-[#4B3621]/90 p-6 sm:p-10 lg:p-14 border border-[#cfbea8]/50 shadow-2xl backdrop-blur-[4px] transition-all duration-300 hover:shadow-[0_30px_50px_-16px_rgba(0,0,0,0.4)]"
//           style={{
//             clipPath: `polygon(
//               0% 0%, 2% 1%, 4% 0.5%, 6% 1.5%, 8% 0%, 10% 1%, 12% 0.5%, 
//               14% 1.5%, 16% 0%, 18% 1%, 20% 0.5%, 22% 1.5%, 24% 0%, 
//               26% 1%, 28% 0.5%, 30% 1.5%, 32% 0%, 34% 1%, 36% 0.5%, 
//               38% 1.5%, 40% 0%, 42% 1%, 44% 0.5%, 46% 1.5%, 48% 0%, 
//               50% 1%, 52% 0.5%, 54% 1.5%, 56% 0%, 58% 1%, 60% 0.5%, 
//               62% 1.5%, 64% 0%, 66% 1%, 68% 0.5%, 70% 1.5%, 72% 0%, 
//               74% 1%, 76% 0.5%, 78% 1.5%, 80% 0%, 82% 1%, 84% 0.5%, 
//               86% 1.5%, 88% 0%, 90% 1%, 92% 0.5%, 94% 1.5%, 96% 0%, 
//               98% 1%, 100% 0.5%,
//               100% 95%, 98% 96.5%, 96% 98%, 94% 97%, 92% 98.5%, 
//               90% 99%, 88% 97.5%, 86% 98%, 84% 96.5%, 82% 99%, 
//               80% 97.5%, 78% 98%, 76% 96.5%, 74% 99%, 72% 97.5%, 
//               70% 98%, 68% 96.5%, 66% 99%, 64% 97.5%, 62% 98%, 
//               60% 96.5%, 58% 99%, 56% 97.5%, 54% 98%, 52% 96.5%, 
//               50% 99%, 48% 97.5%, 46% 98%, 44% 96.5%, 42% 99%, 
//               40% 97.5%, 38% 98%, 36% 96.5%, 34% 99%, 32% 97.5%, 
//               30% 98%, 28% 96.5%, 26% 99%, 24% 97.5%, 22% 98%, 
//               20% 96.5%, 18% 99%, 16% 97.5%, 14% 98%, 12% 96.5%, 
//               10% 99%, 8% 97.5%, 6% 98%, 4% 96.5%, 2% 99%, 0% 97.5%
//             )`,
//             transform: 'rotate(0.2deg)',
//           }}
//         >
//           {/* Top Tape Graphic Effect */}
//           <div className="absolute -top-3 left-1/2 h-8 w-28 -translate-x-1/2 bg-[#e8dccc]/60 shadow-inner blur-[0.5px]" />

//           <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
//             {/* Left Content Column */}
//             <div>
//               <span className="inline-block rounded-full border border-[#d6c9b8] bg-[#e6dac8] px-4 py-1 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[#4d3e2e] shadow-sm">
//                 page 01 — a place to think
//               </span>
              
//               <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.1] text-[#F3E5AB] sm:text-5xl lg:text-6xl">
//                 Notes that stay
//                 <br />
//                 exactly where you
//                 <br />
//                 left them.
//               </h1>
              
//               <p className="mt-6 max-w-md text-base text-[#FFFFFF] leading-relaxed sm:text-lg">
//                 Mini Notepad is a fast, private notebook for the things you don&apos;t
//                 want to lose — quick ideas, longer drafts, and photos of the
//                 whiteboard. Yours alone, synced wherever you sign in.
//               </p>

//               <div className="mt-8 flex flex-wrap items-center gap-4">
//                 <button
//                   onClick={handleCreateNote}
//                   className="rounded-full bg-[#2c241a] px-6 py-3 text-sm font-semibold text-[#f2ede5] shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#1f1811] hover:shadow-lg active:scale-95"
//                 >
//                   ✎ Create a note
//                 </button>
//                 {!user && !loading && (
//                   <Link
//                     href="/register"
//                     className="rounded-full border-2 border-[#b8a186] px-6 py-3 text-sm font-semibold text-[#f2ede5] transition-all duration-300 hover:scale-105 hover:border-[#2c241a] hover:bg-[#2c241a] hover:text-[#f2ede5] active:scale-95"
//                   >
//                     Create a free account
//                   </Link>
//                 )}
//               </div>
//             </div>

//             {/* Right Stack Column with Floating Animations */}
//             <div className="relative mx-auto h-72 w-full max-w-sm sm:h-80">
//               {/* Note 1 */}
//               <div 
//                 className="absolute inset-x-6 top-8 rounded-lg border border-[#cfbea8] bg-[#fcf5e8] p-5 shadow-sm transition-all duration-300 hover:z-20 hover:scale-105 hover:shadow-xl"
//                 style={{
//                   animation: 'float1 5s ease-in-out infinite',
//                 }}
//               >
//                 <div className="absolute -top-px right-2 h-4 w-4 rounded-br-md border-r border-b border-[#cfbea8] bg-[#e8dccc]" />
//                 <p className="font-mono text-xs text-[#7a6553]">grocery-list.note</p>
//                 <p className="mt-2 font-serif text-lg text-[#2c241a]">Oat milk, eggs, basil, coffee…</p>
//               </div>

//               {/* Note 2 */}
//               <div 
//                 className="absolute inset-x-2 top-20 rounded-lg border border-[#cfbea8] bg-[#fcf5e8] p-5 shadow-md transition-all duration-300 hover:z-20 hover:scale-105 hover:shadow-xl"
//                 style={{
//                   animation: 'float2 6s ease-in-out infinite 0.5s',
//                 }}
//               >
//                 <div className="absolute -top-px right-2 h-4 w-4 rounded-br-md border-r border-b border-[#cfbea8] bg-[#e8dccc]" />
//                 <p className="font-mono text-xs text-[#7a6553]">launch-ideas.note</p>
//                 <p className="mt-2 font-serif text-lg text-[#2c241a]">Ship the dashboard redesign by Friday.</p>
//               </div>

//               {/* Note 3 */}
//               <div 
//                 className="absolute inset-x-8 top-32 rounded-lg border border-[#cfbea8] bg-[#fcf5e8] p-5 shadow-lg transition-all duration-300 hover:z-20 hover:scale-105 hover:shadow-xl"
//                 style={{
//                   animation: 'float3 4.5s ease-in-out infinite 1s',
//                 }}
//               >
//                 <div className="absolute -top-px right-2 h-4 w-4 rounded-br-md border-r border-b border-[#cfbea8] bg-[#e8dccc]" />
//                 <p className="font-mono text-xs text-[#7a6553]">recipe.note</p>
//                 <p className="mt-2 font-serif text-lg text-[#2c241a]">Grandma&apos;s lemon cake — 350°F, 40 min.</p>
//               </div>
//             </div>
//           </div>

//           {/* Features Section */}
//           <div className="mt-16 grid gap-6 border-t border-[#d6c9b8] pt-10 sm:grid-cols-3">
//             <Feature
//               label="02"
//               title="Write freely"
//               body="A clean writing surface with autosave-friendly editing — no clutter, no distractions."
//             />
//             <Feature
//               label="03"
//               title="Drop in images"
//               body="Attach photos of receipts, whiteboards, or sketches right inside a note."
//             />
//             <Feature
//               label="04"
//               title="Yours alone"
//               body="Every note is private to your account — sign in and it's exactly as you left it."
//             />
//           </div>
//         </div>
//       </div>

//       {/* CSS Keyframe Animations for Floating Cards */}
//       <style jsx>{`
//         @keyframes float1 {
//           0%, 100% { transform: rotate(-4deg) translateY(0px); }
//           50% { transform: rotate(-4deg) translateY(-8px); }
//         }
//         @keyframes float2 {
//           0%, 100% { transform: rotate(3deg) translateY(0px); }
//           50% { transform: rotate(3deg) translateY(-10px); }
//         }
//         @keyframes float3 {
//           0%, 100% { transform: rotate(-1deg) translateY(0px); }
//           50% { transform: rotate(-1deg) translateY(-6px); }
//         }
//       `}</style>
//     </div>
//   );
// }

// function Feature({ label, title, body }: { label: string; title: string; body: string }) {
//   return (
//     <div className="group rounded-r-lg p-2 transition-all duration-300 bg-3C2415 hover:bg-[#d6c9b8]/20 hover:pl-4">
//       <span className="font-mono text-xs text-[#FFFDD0]">{label}</span>
//       <h3 className="mt-2 font-serif text-xl font-semibold text-[#F3E5AB]">{title}</h3>
//       <p className="mt-2 text-sm leading-relaxed text-[#FFF8DC]">{body}</p>
//     </div>
//   );
// }

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
      {/* Main Vintage Torn-Paper Container */}
      <div className="relative mx-auto max-w-5xl p-4 sm:p-8">
        <div 
          className="relative bg-[#4B3621]/90 p-6 sm:p-10 lg:p-14 border border-[#cfbea8]/50 shadow-2xl backdrop-blur-[4px] transition-all duration-300 hover:shadow-[0_30px_50px_-16px_rgba(0,0,0,0.4)]"
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
                className="absolute inset-x-6 top-8 rounded-lg border border-[#cfbea8] bg-[#fcf5e8] p-5 shadow-sm transition-all duration-300 hover:z-20 hover:scale-105 hover:shadow-xl"
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