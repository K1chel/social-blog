import { ThemeProvider } from "@/components/providers/theme-provider";

type ProviderProps = {
  children: React.ReactNode;
};

export const Providers = ({ children }: ProviderProps) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};
