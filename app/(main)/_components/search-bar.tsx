"use client";

import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { useEffect, useRef } from "react";

export const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        inputRef.current?.focus();
      } else if (event.key === "Escape") {
        inputRef.current?.blur();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="relative w-[265px] xl:w-[320px]">
      <div className="absolute left-0 top-0 flex h-full w-10 items-center justify-center">
        <SearchIcon className="size-4 text-muted-foreground" />
      </div>
      <Input ref={inputRef} placeholder="Search..." className="px-10" />
      <div className="absolute right-0 top-0 flex h-full w-10 items-center justify-center">
        <kbd className="pointer-events-none flex h-5 select-none items-center justify-center gap-x-1 rounded border bg-muted px-1.5 font-mono text-xs font-medium opacity-100">
          <span>⌘</span>
          <span>K</span>
        </kbd>
      </div>
    </div>
  );
};
