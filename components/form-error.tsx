import { CircleXIcon } from "lucide-react";

type FormErrorProps = {
  error?: string;
};

export const FormError = ({ error }: FormErrorProps) => {
  if (!error) return null;
  return (
    <div className="flex w-full items-center gap-x-3 rounded-md bg-destructive/15 px-3 py-2.5 text-destructive">
      <CircleXIcon className="size-4" />
      <p>{error}</p>
    </div>
  );
};
