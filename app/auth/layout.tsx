import { Footer } from "@/components/footer";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 overflow-auto min-h-screen">
        <div className="h-full flex flex-col m-auto items-center justify-center">
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AuthLayout;
