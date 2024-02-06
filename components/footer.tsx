import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <div className="absolute bottom-0 ">
      <footer className="flex justify-center items-center text-center w-screen bg-white bg-opacity-10 text-wrap m-auto">
        <small className="text-white">
          &copy; {new Date().getFullYear()}
          <Button variant="link" className="text-white text-xs px-1" asChild>
            <Link
              href="https://kmaar.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abhishek Kumar
            </Link>
          </Button>
          . All rights reserved. | Powered by
          <Button variant="link" className="text-white text-xs px-1" asChild>
            <Link
              href="https://kmstudio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              KMaar Miscellaneous Studio
            </Link>
          </Button>
        </small>
      </footer>
    </div>
  );
}
