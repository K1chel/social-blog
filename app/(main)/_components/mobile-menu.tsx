"use client";

import { LogOutIcon, MenuIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SidebarItem } from "./sidebar-item";
import { useMedia } from "@/lib/hooks/use-media";

import { SIDEBAR_ITEMS } from "@/lib/constants";
import { logout } from "@/actions/auth/logout";
import { Separator } from "@/components/ui/separator";

export const MobileMenu = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const width = useMedia();

  useEffect(() => {
    if (width > 768) {
      setIsOpen(false);
    }
  }, [width]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost" className="md:hidden">
          <MenuIcon className="size-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="space-y-5">
        <Link href="/" className="flex items-center gap-x-2">
          <Image src="/icon.svg" alt="Icon" width={42} height={42} />
          <h1 className="text-xl font-semibold">Blog</h1>
        </Link>
        <div className="flex flex-col gap-y-2">
          {SIDEBAR_ITEMS.map((item) => (
            <SidebarItem
              key={item.name}
              name={item.name}
              href={item.href}
              icon={item.icon}
              isMobile
            />
          ))}
          <Separator className="my-4" />
          <SidebarItem
            name="Logout"
            icon={LogOutIcon}
            onClick={() => logout()}
            variant="secondary"
            isMobile
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};
