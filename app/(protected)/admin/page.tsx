import { Metadata } from "next";
import Admin from "../_components/admin";

export const metadata: Metadata = {
  title: "Admin",
};

export default function AdminPage() {
  return <Admin />;
}
