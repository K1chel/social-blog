import { GithubIcon, SearchIcon } from "lucide-react";
import Link from "next/link";

import { ModeToggle } from "@/components/mode-toggle";
import { Button, buttonVariants } from "@/components/ui/button";
import { MobileMenu } from "./mobile-menu";
import { SearchBar } from "./search-bar";
import { UserButton } from "./user-button";

export const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 h-16 border-b bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-full max-w-screen-xl items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-x-3">
          <div className="flex items-center gap-x-3 md:hidden">
            <MobileMenu />
            <Button size="icon" variant="ghost">
              <SearchIcon className="size-6" />
            </Button>
          </div>
          <div className="hidden md:block">
            <SearchBar />
          </div>
        </div>
        <div className="flex items-center gap-x-3">
          <ModeToggle />
          <Link
            href="https://github.com/K1chel/social-blog"
            target="_blank"
            className={buttonVariants({ size: "icon", variant: "ghost" })}
          >
            <GithubIcon className="size-5" />
          </Link>
          <UserButton />
        </div>
      </div>
    </nav>
  );
};
