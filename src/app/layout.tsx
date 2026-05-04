import type { Metadata } from "next";
import { Space_Grotesk, Geist_Mono, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/shared/lib/utils";
import { RenderMotion } from "@/shared/ui";
import { Analytics } from "@vercel/analytics/next";
import { Footer, Header } from "@/widgets";
const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://crypto-pulse-mh.vercel.app"),
  title: {
    default: "CryptoPulse - Track Coins, Categories, and NFTs",
    template: "%s | CryptoPulse",
  },
  description:
    "CryptoPulse helps you track cryptocurrency prices, market categories, and NFT trends in one fast and reliable dashboard.",
  keywords: [
    "crypto tracker",
    "cryptocurrency prices",
    "bitcoin",
    "ethereum",
    "nft market",
    "coin market data",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "CryptoPulse - Track Coins, Categories, and NFTs",
    description:
      "CryptoPulse helps you track cryptocurrency prices, market categories, and NFT trends in one fast and reliable dashboard.",
    type: "website",
    url: "/",
    locale: "en_US",
    siteName: "CryptoPulse",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "CryptoPulse platform preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CryptoPulse - Track Coins, Categories, and NFTs",
    description:
      "CryptoPulse helps you track cryptocurrency prices, market categories, and NFT trends in one fast and reliable dashboard.",
    images: ["/opengraph-image.png"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        spaceGrotesk.variable,
        geistMono.variable,
        "font-sans",
        geist.variable,
      )}
    >
      <body className="md:w-[90%] w-full m-auto dark">
        <Header />
        <RenderMotion>{children}</RenderMotion>
        {/* Add the Analytics component to project By Vercel */}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
