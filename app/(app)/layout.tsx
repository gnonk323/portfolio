import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gustave Montana - Software Engineer",
  description: "My personal website showcasing my projects and experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const adventureImages = [
    "/images/adventures/jackson_lake_dam.webp",
    "/images/adventures/white_gold.webp",
    "/images/adventures/rumor.webp",
    "/images/adventures/costa_rica_mountains.webp",
    "/images/adventures/naval_academy.webp",
    "/images/adventures/riverside_park.webp",
    "/images/adventures/jalen_brunson.webp",
    "/images/adventures/kirby_moran.webp",
    "/images/adventures/saemad.webp",
    "/images/adventures/cliffs_of_moher.webp",
    "/images/adventures/marys_nipple.webp",
    "/images/adventures/tetons.webp",
    "/images/adventures/cerro_amigos.webp",
    "/images/adventures/yankees.webp",
    "/images/adventures/robin.webp",
    "/images/adventures/ski_tracks.webp",
    "/images/adventures/devils_head.webp",
    "/images/adventures/la_fortuna.webp",
  ];

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {adventureImages.map((src, index) => (
          <link key={index} rel="preload" as="image" href={src} />
        ))}
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}