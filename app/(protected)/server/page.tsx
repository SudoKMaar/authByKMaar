import { Metadata } from "next";
import { Server } from "lucide-react";
import { UserInfo } from "@/components/user-info";
import { currentUser } from "@/lib/authentication";

export const metadata: Metadata = {
  title: "Server",
};

export default async function ServerPage() {
  const user = await currentUser();

  return <UserInfo icon={Server} label="Server component" user={user} />;
}
