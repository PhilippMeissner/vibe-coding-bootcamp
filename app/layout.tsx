import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ConfettiEffect from "../components/ConfettiEffect";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Vibe Coding Bootcamp",
  description: "Deployment & Hosting: Vom Laptop zur Live-App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={inter.variable}>
      <body className={inter.className}>
        <ConfettiEffect />
        {children}
      </body>
    </html>
  );
}
