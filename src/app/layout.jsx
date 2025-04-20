import localFont from "next/font/local";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import LenisWrapper from "@/components/LenisWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const satoshi = localFont({
  src: [
    {
      path: "./fonts/Satoshi-Variable.woff2",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-VariableItalic.woff2",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CosecSecCot",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${satoshi.className} ${robotoMono.variable} antialiased`}
      >
        <LenisWrapper>
          <Navbar />
          {children}
          <Footer />
        </LenisWrapper>
      </body>
    </html>
  );
}
