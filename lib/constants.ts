import {
  BellIcon,
  BookmarkIcon,
  CombineIcon,
  HomeIcon,
  SearchIcon,
  SquarePenIcon,
  Users2Icon,
} from "lucide-react";

export const SIDEBAR_ITEMS = [
  {
    name: "Home",
    href: "/",
    icon: HomeIcon,
  },
  {
    name: "Suggestions",
    href: "/suggestions",
    icon: Users2Icon,
  },
  {
    name: "Explore",
    href: "/explore",
    icon: SearchIcon,
  },
  {
    name: "Create",
    href: "/create",
    icon: SquarePenIcon,
  },
  {
    name: "Notifications",
    href: "/notifications",
    icon: BellIcon,
  },
  {
    name: "Saved",
    href: "/saved",
    icon: BookmarkIcon,
  },
  {
    name: "Groups",
    href: "/groups",
    icon: CombineIcon,
  },
];
