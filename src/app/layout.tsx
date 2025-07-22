import type { Metadata } from "next";
import { DM_Serif_Text, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import BackToTopButton from "@/components/BackToTopButton";

const dm_serif_text = DM_Serif_Text({
  variable: "--font-dm-serif-text",
  weight: ["400"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Travel blog",
  description: "Writting with heavy herat beacuse I can't vsit those places in real life :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dm_serif_text.variable} ${montserrat.variable} antialiased container mx-auto p-3 space-y-3`}

      >
        <Navbar />
        {children}
        <BackToTopButton/>
      </body>
    </html>
  );
}
