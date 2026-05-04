import { Landing } from "@/views";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/shared/lib/seo";

export function generateMetadata(): Metadata {
  return buildPageMetadata({
    title: "Live Crypto Market Overview",
    description:
      "Explore live cryptocurrency prices, market sentiment, and trending assets with CryptoPulse.",
    path: "/",
    keywords: ["live crypto prices", "crypto dashboard", "market overview"],
  });
}

export default function Home() {
  return (
    <main className="main-container">
      <Landing />
    </main>
  );
}
