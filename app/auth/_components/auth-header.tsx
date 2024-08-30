type AuthHeaderProps = {
  title: string;
  description: string;
};

export const AuthHeader = ({ description, title }: AuthHeaderProps) => {
  return (
    <div className="flex flex-col items-center md:items-start">
      <h3 className="text-lg font-semibold md:text-xl">{title}</h3>
      <p className="text-sm text-muted-foreground md:text-base">
        {description}
      </p>
    </div>
  );
};
