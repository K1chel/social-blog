import { Loader2Icon } from "lucide-react";

import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SubmitButtonProps = {
  text: string;
  loadingText: string;
  loading: boolean;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  className?: string;
};

export const SubmitButton = ({
  loading,
  loadingText,
  text,
  size,
  variant,
  className,
}: SubmitButtonProps) => {
  return (
    <Button
      className={cn("w-full", className)}
      type="submit"
      size={size}
      variant={variant}
      disabled={loading}
    >
      {loading ? (
        <>
          <Loader2Icon className="mr-2 size-4 animate-spin" />
          <span>{loadingText}</span>
        </>
      ) : (
        <span>{text}</span>
      )}
    </Button>
  );
};
