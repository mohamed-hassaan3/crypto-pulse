import type { Metadata } from "next";
import { Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";

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
      className={`${spaceGrotesk.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
