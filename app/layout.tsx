import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Josefin_Sans } from "next/font/google";

import { ThemeProvider } from "@/components/ui/theme-provider";

const jose = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-jose",
});

export const metadata: Metadata = {
  title: "Prince Elorm 🎧",
  description: "Prince Elorm Music ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jose.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
