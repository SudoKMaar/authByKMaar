import { Metadata } from "next";
import { RegisterForm } from "@/components/auth/registration-form";

export const metadata: Metadata = {
  title: "Register",
};

const RegisterPage = () => {
  return <RegisterForm />;
};

export default RegisterPage;
