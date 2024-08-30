type AuthWrapperProps = {
  children: React.ReactNode;
};

export const AuthWrapper = ({ children }: AuthWrapperProps) => {
  return (
    <div className="mx-auto w-full max-w-md space-y-5 rounded-xl border bg-background px-6 py-8">
      {children}
    </div>
  );
};
