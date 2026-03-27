import type { Metadata } from "next";
import { Space_Grotesk, Geist_Mono, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CryptoPulse",
  description: "Empower your financial future with CryptoPulse, the secure, all-in-one crypto platform designed for seamless digital asset management. Buy, sell, and trade over 100+ cryptocurrencies with low fees and instant settlement. Featuring an integrated non-custodial wallet, real-time market analytics, and institutional-grade security (2FA/KYC), CryptoPulse makes crypto investing fast, safe, and intuitive for both beginners and veterans.`",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", spaceGrotesk.variable, geistMono.variable, "font-sans", geist.variable)}
    >
      <body className="md:w-[90%] w-full m-auto dark">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
