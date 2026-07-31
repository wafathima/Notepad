"use client";

import Link from "next/link";
import NoteEditor from "@/components/NoteEditor";

export default function NewNotePage() {
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

      <div className="mx-auto flex min-h-[calc(100vh-73px)] max-w-2xl flex-col justify-center px-5 py-12 sm:px-8 filter drop-shadow-[0_20px_25px_rgba(0,0,0,0.3)]">
        
        {/* BACKGROUND ONLY: Distorted Torn Paper Layer */}
        <div 
          className="absolute inset-x-5 inset-y-12 sm:inset-x-8 bg-[#f4ede3]/90 border border-[#cfbea8]/40 backdrop-blur-[2px]"
          style={{
            filter: "url(#torn-paper-edge)",
            transform: 'rotate(0.2deg)',
          }}
        />

        {/* CONTENT LAYER: Crisp Form & Interactive Editor Elements */}
        <div className="relative z-10 p-6 sm:p-10">
          
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