import type { Metadata } from "next";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
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
  title: "RVAI Lab Vibe Coding Starter Kit",
  description: "A modern web application starter kit created by Rogue Valley AI Lab, optimized for development in Cursor and deployment on Vercel.",
  keywords: ["Next.js", "React", "Shadcn UI", "TypeScript", "Tailwind CSS", "Clerk", "Neon", "Drizzle", "RVAI Lab", "Vibe Coding"],
  authors: [
    { name: "Rogue Valley AI Lab", url: "https://rvailab.org" },
    { name: "WhiteRabbit Ashland", url: "https://whiterabbit.ai" }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>

      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <header className="flex justify-end items-center p-4 gap-4 h-16">
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
