import { ShieldCheck } from "lucide-react";
import Link from "next/link";

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <Link href="/" className="flex items-center">
        <ShieldCheck strokeWidth={2.5} className="mr-1 w-10 h-auto" />
        <h1 className="text-4xl font-bold">Auth by KMaar</h1>
      </Link>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
