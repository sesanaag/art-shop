import type { Metadata } from "next";
import Link from "next/link";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kathmandu Curated",
  description: "Exclusive hand-painted fine art from the Himalayas",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="bg-stone-50 text-stone-900 min-h-screen flex flex-col antialiased font-sans">
        <nav className="sticky top-0 z-50 bg-stone-50/90 backdrop-blur-sm border-b border-stone-200 py-6">
          <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
            <div className="text-xl font-medium tracking-[0.15em] font-serif uppercase">KATHMANDU CURATED</div>
            <div className="flex gap-10">
              <Link href="/" className="text-sm uppercase tracking-widest hover:text-stone-500 transition-colors">
                Gallery
              </Link>
              <Link href="/about" className="text-sm uppercase tracking-widest hover:text-stone-500 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-sm uppercase tracking-widest hover:text-stone-500 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </nav>
        <main className="flex-1">
          {children}
        </main>
        <footer className="border-t border-stone-200 py-8 text-center text-xs tracking-widest text-stone-400">
          © {new Date().getFullYear()} KATHMANDU CURATED. ALL RIGHTS RESERVED.
        </footer>
      </body>
    </html>
  );
}
