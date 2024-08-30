import { EyeIcon, EyeOffIcon } from "lucide-react";

type ShowPasswordProps = {
  showPassword: boolean;
  togglePasswordVisibility: () => void;
};

export const ShowPassword = ({
  showPassword,
  togglePasswordVisibility,
}: ShowPasswordProps) => {
  return (
    <button
      type="button"
      className="absolute right-0 top-0 flex h-full w-10 items-center justify-center border-l"
      onClick={togglePasswordVisibility}
    >
      {showPassword ? (
        <EyeIcon className="size-4" />
      ) : (
        <EyeOffIcon className="size-4" />
      )}
    </button>
  );
};
