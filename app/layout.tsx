import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://authbykmaar.vercel.app"),
  title: {
    default: "Auth by KMaar",
    template: "%s - Auth by KMaar",
  },
  description:
    "Auth by KMaar is a next-generation authentication app that provides secure and easy login, password recovery, email verification, and two-factor verification for web applications. Auth by KMaar integrates with Next-auth v5, Next.js 14, and OAuth providers such as Google and GitHub. Auth by KMaar also supports user roles, role gates, and protected API routes and server actions. Try Auth by KMaar today and experience the best authentication solution for your web app.enerated by create next app",
  verification: {
    google: "w3roI87t-dIyKe7ReAdSWUVpWCe7K1pP_EXUidsZ3xI",
    me: "KMaar",
  },
  twitter: {
    card: "summary_large_image",
  },
  keywords: [
    "auth by KMaar",
    "authy",
    "Abhishek KMaar",
    "Abhishek Kumar",
    "KMaar",
    "KMaar Miscellaneous Studio",
    "next-auth",
    "next.js",
    "authentication",
    "oauth",
    "credentials",
    "email verification",
    "two-factor verification",
    "user roles",
    "role gates",
    "protected api routes",
    "server actions",
    "keyword research",
    "seo",
    "search engine optimization",
    "clickstream data",
    "keyword difficulty",
    "long-tail keywords",
    "subtopics",
    "serp features",
    "organic traffic",
    "keyword generator",
    "keyword planner",
    "keyword explorer",
    "keyword list",
    "keyword ideas",
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body
          className={cn(
            "bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 custom-scrollbar",
            poppins.className
          )}
        >
          <Toaster />
          {children}
          <Footer />
        </body>
      </html>
    </SessionProvider>
  );
}
