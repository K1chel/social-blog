"use client";

import { SidebarItem } from "./sidebar-item";

import { SIDEBAR_ITEMS } from "@/lib/constants";

export const Sidebar = () => {
  return (
    <aside className="sticky top-16 hidden h-fit flex-none space-y-3 px-3 py-4 md:block md:px-6 xl:w-80">
      <div className="flex w-full flex-col gap-y-2">
        {SIDEBAR_ITEMS.map((iten) => (
          <SidebarItem
            key={iten.name}
            name={iten.name}
            href={iten.href}
            icon={iten.icon}
          />
        ))}
      </div>
    </aside>
  );
};
