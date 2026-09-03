import type { Metadata } from "next";
import { DM_Serif_Display } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { TopBar } from "@/components/site/top-bar";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vital Industries | Tax & Financial Strategy",
  description:
    "Vital Industries provides thoughtful tax, planning, and financial solutions for individuals, entrepreneurs, families, and businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${GeistSans.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
