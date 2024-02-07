import { Metadata } from "next";
import Client from "../_components/client";

export const metadata: Metadata = {
  title: "Client",
};

export default function ClientPage() {
  return <Client />;
}
