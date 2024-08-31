"use client";

import { Toaster } from "sonner";
import { useTheme } from "next-themes";

import { ThemeProvider } from "@/components/providers/theme-provider";

type ProviderProps = {
  children: React.ReactNode;
};

export const Providers = ({ children }: ProviderProps) => {
  const { theme } = useTheme();
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
      <Toaster
        richColors
        theme={theme === "dark" ? "dark" : "light" || "system"}
      />
    </ThemeProvider>
  );
};
