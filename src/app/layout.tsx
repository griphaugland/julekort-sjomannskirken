import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

// If loading a variable font, you don't need to specify the font weight

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sjømannskirkens Besøkstjeneste",
  description: "Julekort fra Sjømannskirkens Besøkstjeneste",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <body className={`min-h-screen ${dmSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
