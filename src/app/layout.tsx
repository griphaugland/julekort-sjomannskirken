import type { Metadata } from "next";
import "./globals.css";
import { Inter, Bricolage_Grotesque } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Julekort 2024",
  description: "Julekort Sjømannskirkens Besøkstjeneste",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${inter.className} ${bricolage.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
