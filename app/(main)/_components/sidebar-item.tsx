"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

type SidebarItemProps = {
  name: string;
  icon: LucideIcon;
  href?: string;
  onClick?: () => void;
  variant?: ButtonProps["variant"];
  isMobile?: boolean;
};

export const SidebarItem = ({
  href,
  icon: Icon,
  name,
  onClick,
  variant,
  isMobile,
}: SidebarItemProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (href) {
      router.push(href);
    }

    if (onClick) {
      onClick();
    }
    return;
  };

  const isActive = pathname === href;

  const buttonVariant = variant || (isActive ? "secondary" : "ghost");

  return (
    <Button
      className={cn("group flex items-center justify-start gap-x-3")}
      variant={buttonVariant}
      onClick={() => handleClick()}
    >
      <Icon className="size-6 transition group-hover:rotate-3" />
      <span className={cn("hidden xl:block", isMobile && "block")}>{name}</span>
    </Button>
  );
};
