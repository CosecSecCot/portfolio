import type { Metadata } from "next";
import localFont from "next/font/local";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ReactLenis from "lenis/react";

const serif = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  subsets: ["latin"],
});

const sans = Instrument_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = localFont({
  src: [
    {
      path: "./fonts/iosevka-extendedlight.ttf",
      style: "normal",
    },
  ],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Jagjot Singh",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sans.variable} ${serif.variable} ${mono.variable} antialiased`}
      >
        <ReactLenis root>
          <Navbar />
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
