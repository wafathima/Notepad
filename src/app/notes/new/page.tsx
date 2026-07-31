// //src/app/notes/new/page.tsx

// "use client";

// import Link from "next/link";
// import NoteEditor from "@/components/NoteEditor";

// export default function NewNotePage() {
//   return (
//     <div className="mx-auto max-w-2xl px-5 py-12 sm:px-8 ">
//       <Link href="/notes" className="font-mono-ui text-xs text-[#FFFF] hover:text-ink">
//         ← back to notebook
//       </Link>
//       <h1 className="font-display mt-3 text-3xl font-semibold text-ink">New note</h1>
//       <div className="mt-8">
//         <NoteEditor mode="create" />
//       </div>
//     </div>
//   );
// }

"use client";

import Link from "next/link";
import NoteEditor from "@/components/NoteEditor";

export default function NewNotePage() {
  return (
    <div className="relative min-h-screen">
      <div className="mx-auto max-w-2xl px-5 py-12 sm:px-8">
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

          <Link 
            href="/notes" 
            className="font-mono-ui text-xs text-[#7a6553] hover:text-[#2c241a] transition-colors inline-flex items-center gap-2 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span> back to notebook
          </Link>
          
          <h1 className="font-serif mt-3 text-3xl font-semibold text-[#2c241a]">New note</h1>
          <div className="mt-8">
            <NoteEditor mode="create" />
          </div>
        </div>
      </div>
    </div>
  );
}