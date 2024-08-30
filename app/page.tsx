import { logout } from "@/actions/auth/logout";
import { validateRequest } from "@/auth";
import { ModeToggle } from "@/components/mode-toggle";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  const { user } = await validateRequest();
  return (
    <main>
      <ModeToggle />
      {user ? (
        <div>
          <span>{JSON.stringify(user)}</span>
          <form action={logout}>
            <Button>Logout</Button>
          </form>
        </div>
      ) : (
        <Link href="/auth/sign-in" className={buttonVariants()}>
          Sign in
        </Link>
      )}
    </main>
  );
}
