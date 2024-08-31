import { redirect } from "next/navigation";

import { validateRequest } from "@/auth";
import { Footer, Navbar, Sidebar } from "./_components";
import AuthProvider from "./auth-provider";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = async ({ children }: MainLayoutProps) => {
  const session = await validateRequest();

  if (!session.user) redirect("/auth/sign-in");

  return (
    <AuthProvider value={session}>
      <div className="flex h-full min-h-dvh w-full flex-col">
        <Navbar />
        <main className="mx-auto mt-16 flex h-full w-full max-w-screen-2xl flex-1 grow gap-x-5 md:px-4">
          <Sidebar />
          <main className="w-full px-4 md:px-0">{children}</main>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default MainLayout;
