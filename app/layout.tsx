import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import AutumnBackground from "@/components/AutumnBackground";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
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
    <html lang="de" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        <AutumnBackground />
        {children}
      </body>
    </html>
  );
}
