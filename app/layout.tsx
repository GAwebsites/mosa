import "./globals.css";

import type { Metadata } from "next";
import { Montserrat, Source_Sans_3 } from "next/font/google";

import Header from "./components/globals/header";
import Footer from "./components/globals/footer";

import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});
const source_Sans_3 = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans-3",
});

export const metadata: Metadata = {
  title: "Mosa BV - Passie voor bouwen",
  description: "Mosa BV - Uw bouwbedrijf",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${source_Sans_3.variable}`}
    >
      <body className="flex flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
