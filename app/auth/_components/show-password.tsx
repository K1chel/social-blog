"use client";

import { EyeIcon, EyeOffIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type ShowPasswordProps = {
  showPassword: boolean;
  togglePasswordVisibility: () => void;
  disabled: boolean;
};

export const ShowPassword = ({
  disabled,
  showPassword,
  togglePasswordVisibility,
}: ShowPasswordProps) => {
  return (
    <button
      type="button"
      className={cn(
        "absolute right-0 top-0 flex h-full w-10 items-center justify-center border-l",
        disabled && "cursor-not-allowed opacity-50",
      )}
      onClick={togglePasswordVisibility}
      disabled={disabled}
    >
      {showPassword ? (
        <EyeIcon className="size-4" />
      ) : (
        <EyeOffIcon className="size-4" />
      )}
    </button>
  );
};
