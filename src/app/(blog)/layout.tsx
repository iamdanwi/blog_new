import BackToTopButton from "@/components/BackToTopButton";
import Navbar from "@/components/Navbar";
import { DM_Serif_Text, Montserrat } from "next/font/google";

const dm_serif_text = DM_Serif_Text({
  variable: "--font-dm-serif-text",
  weight: ["400"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
      <main
        className={`${dm_serif_text.variable} ${montserrat.variable} antialiased container mx-auto p-3 space-y-3 font-montserrat`}
      >
        <Navbar />
        {children}
        <BackToTopButton />
      </main>

  );
}
