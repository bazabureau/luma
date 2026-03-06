import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Lumen Psixologiya Mərkəzi",
  description:
    "Fərdlərin, cütlüklərin və ailələrin psixoloji sağlamlığını bərpa etmək və həyat keyfiyyətini artırmaq üçün yaradılmış psixologiya mərkəzi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="az">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
