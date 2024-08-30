import Link from "next/link";

type AuthFooterProps = {
  title: string;
  href: string;
  hrefText: string;
};

export const AuthFooter = ({ href, hrefText, title }: AuthFooterProps) => {
  return (
    <div className="flex items-center justify-center gap-x-1 text-sm md:justify-start md:text-base">
      <h5>{title}</h5>
      <Link href={href} className="text-primary hover:underline">
        {hrefText}
      </Link>
    </div>
  );
};
