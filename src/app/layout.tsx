import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kathmandu Curated",
  description: "Exclusive hand-painted fine art from the Himalayas",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="bg-white text-black min-h-screen flex flex-col antialiased">
        <nav className="sticky top-0 z-50 bg-white border-b border-black py-6">
          <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
            <div className="text-xl font-medium tracking-[0.125em]">KATHMANDU CURATED</div>
            <div className="flex gap-10">
              <Link href="/" className="text-sm uppercase tracking-widest hover:underline">
                Gallery
              </Link>
              <Link href="/about" className="text-sm uppercase tracking-widest hover:underline">
                About
              </Link>
              <Link href="/contact" className="text-sm uppercase tracking-widest hover:underline">
                Contact
              </Link>
            </div>
          </div>
        </nav>

        <main className="flex-1">
          {children}
        </main>

        <footer className="border-t border-black py-8 text-center text-xs tracking-widest text-neutral-500">
          © {new Date().getFullYear()} KATHMANDU CURATED. ALL RIGHTS RESERVED.
        </footer>
      </body>
    </html>
  );
}
