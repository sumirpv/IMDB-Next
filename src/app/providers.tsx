"use client";

import { ThemeProvider } from "next-themes";

function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <div className="min-h-screen dark:bg-gray-300 dark:text-white transition-colors duration-300">
        {children}
      </div>
    </ThemeProvider>
  );
}

export default Providers;
