import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "PrepWise - Interview Preparation",
  description:
    "Analysiere deinen Lebenslauf und eine Stellenanzeige und erhalte personalisiertes Feedback",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <NavBar />
        <main className="flex-1 flex items-center justify-center w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
