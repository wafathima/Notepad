import type { Metadata } from "next";
import { Inter, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "Mini Notepad — Your notes, organized",
    template: "%s · Mini Notepad",
  },
  description:
    "A minimal, personal notepad. Write notes, drop in images, and find everything again in seconds.",
  keywords: ["notepad", "notes app", "note taking", "personal notes", "mini notepad"],
  openGraph: {
    title: "Mini Notepad — Your notes, organized",
    description:
      "A minimal, personal notepad. Write notes, drop in images, and find everything again in seconds.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Mini Notepad",
    description: "A minimal, personal notepad with image support.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${sourceSerif.variable} ${jetbrainsMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <AuthProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
