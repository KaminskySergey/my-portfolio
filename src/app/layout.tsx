import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Serhii Kaminskyi",
  description: "FullStack development. I know React, NextJS, NestJS, JS, TS, NodeJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-purple-500 via-blue-500 to-green-400`} >{children}</body>
    </html>
  );
}
