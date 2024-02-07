const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="overflow-auto">
        <div className="h-full min-h-[calc(100vh_-_36px)] flex flex-col items-center justify-center">
          {children}
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
