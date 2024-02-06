import { ShieldCheck } from "lucide-react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 text-white">
      <section className="space-y-6">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Link href="/" className="flex items-center">
            <ShieldCheck
              strokeWidth={2.5}
              className="mr-1 w-10 md:w-14 lg:w-16 h-auto"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Auth</h1>
          </Link>
          <small className="mb-5 text-3xl">By KMaar</small>
          <h1 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            A next-generation authentication app that provides secure and easy
            login, password recovery, email verification, and two-factor
            verification for web applications
          </h1>
          <p className="max-w-[42rem] leading-normal text-black sm:text-lg sm:leading-8">
            This is a complete authentication example app built with Next.js 14
            and Auth.js using the latest server actions.
          </p>
          <div className="space-x-4 mt-5">
            <LoginButton mode="redirect" asChild>
              <Button variant="default" size="lg">
                Sign in <ArrowRightIcon className="ml-2" />
              </Button>
            </LoginButton>
            <Button variant="secondary" size="lg" asChild>
              <Link
                href="https://github.com/SudoKMaar/auth"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
