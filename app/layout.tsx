import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export const metadata: Metadata = {
  title: "Authy",
  description:
    "Authy is a next-generation authentication app that provides secure and easy login, password recovery, email verification, and two-factor verification for web applications. Authy integrates with Next-auth v5, Next.js 14, and OAuth providers such as Google and GitHub. Authy also supports user roles, role gates, and protected API routes and server actions. Try Authy today and experience the best authentication solution for your web app.enerated by create next app",
  verification: {
    google: "w3roI87t-dIyKe7ReAdSWUVpWCe7K1pP_EXUidsZ3xI",
    me: "KMaar",
  },
  keywords: [
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}