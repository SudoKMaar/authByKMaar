import Link from "next/link";

import { Button } from "@/components/ui/button";

interface BackButtonProps {
  href: string;
  label: string;
  description?: string;
}

export const BackButton = ({ href, label, description }: BackButtonProps) => {
  return (
    <div className="flex items-center text-center mx-auto">
      <p className="text-muted-foreground text-xs">{description}</p>
      <Button variant="link" className="p-0 pl-1.5" size="sm" asChild>
        <Link href={href}>{label}</Link>
      </Button>
    </div>
  );
};
