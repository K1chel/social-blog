import { validateRequest } from "@/auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import { BackButton } from "./_components";

type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout = async ({ children }: AuthLayoutProps) => {
  const { session } = await validateRequest();

  if (session) redirect("/");

  return (
    <main className="relative flex h-dvh flex-col items-center justify-center gap-y-5 bg-secondary px-3 md:px-6">
      <BackButton />
      <div className="flex items-center gap-x-2">
        <Image
          src="/icon.svg"
          alt="Next.js logo"
          width={50}
          height={50}
          className="size-10 md:size-14"
        />
        <h1 className="text-lg font-semibold md:text-2xl">Social blog</h1>
      </div>
      {children}
    </main>
  );
};

export default AuthLayout;
