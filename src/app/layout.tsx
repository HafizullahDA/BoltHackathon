import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bolt.New - World's Largest Hackathon",
  description: "Join 100K+ coders competing for 1M+ in prizes at the World's Largest Virtual Hackathon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-primary text-white`}>
        {children}
      </body>
    </html>
  );
}
