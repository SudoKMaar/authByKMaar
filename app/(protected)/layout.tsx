import { Navbar } from "./_components/navbar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <>
      <div className="h-full min-h-[calc(100vh_-_36px)] w-full flex flex-col gap-y-10 items-center justify-center py-10 px-4">
        <div className="w-full max-w-[700px] overflow-auto rounded-[0.5rem] border bg-background shadow-md md:shadow-xl custom-scrollbar">
          <div className="flex flex-col">
            <Navbar />
            <div className="p-4 md:p-8">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProtectedLayout;
