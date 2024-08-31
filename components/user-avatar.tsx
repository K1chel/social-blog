import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

type UserAvatarProps = {
  avatarUrl: string;
  username: string;
  className?: string;
};

export const UserAvatar = ({
  avatarUrl,
  username,
  className,
}: UserAvatarProps) => {
  return (
    <Avatar className={cn("border", className)}>
      <AvatarImage src={avatarUrl} />
      <AvatarFallback>{username.charAt(0).toUpperCase()}</AvatarFallback>
    </Avatar>
  );
};
