import type { Metadata } from "next";
import { Metrophobic, Inter } from "next/font/google";
import Provider from "./provider";
import localFont from "next/font/local";

import "./globals.css";
import 'lenis/dist/lenis.css'

const metrophobic = Metrophobic({
  variable: "--font-metrophobic",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: "400",
});

const clashGrotesk = localFont({
  src: "../app/fonts/ClashGrotesk-Regular.woff2",
  variable: "--font-clash",
});

export const metadata: Metadata = {
  title: "Salt AI",
  description: "A new economic primitive for funding decentralized AI",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${metrophobic.variable} ${inter.variable} ${clashGrotesk.variable} antialiased`}
      >
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
