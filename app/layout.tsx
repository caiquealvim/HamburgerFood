import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ResposiveNav from "./components/navbar/ResposiveNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BuyBurguer",
  description: "Site for your food",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ResposiveNav/>
        {children}
        </body>
    </html>
  );
}
