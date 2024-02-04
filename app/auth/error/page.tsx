import { Metadata } from "next";
import { ErrorCard } from "@/components/auth/error-card";

export const metadata: Metadata = {
  title: "Error",
};

const AuthErrorPage = () => {
  return <ErrorCard />;
};

export default AuthErrorPage;
