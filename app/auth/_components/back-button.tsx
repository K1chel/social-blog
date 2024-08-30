import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const BackButton = () => {
  return (
    <Link href="/" className="absolute top-10 lg:left-14">
      <Button
        variant="link"
        className="group flex w-full items-center gap-x-2 lg:w-auto"
      >
        <ArrowLeftIcon className="size-4 transition lg:group-hover:-translate-x-1.5" />
        <span>Go Back</span>
      </Button>
    </Link>
  );
};
