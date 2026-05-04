import { Coins } from "@/views";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/shared/lib/seo";

export function generateMetadata(): Metadata {
  return buildPageMetadata({
    title: "Top Cryptocurrencies",
    description:
      "Browse top cryptocurrencies with real-time prices, market cap, and performance insights.",
    path: "/coins",
    keywords: ["top coins", "crypto market cap", "coin performance"],
  });
}

const page = () => {
  return (
    <main>
      <Coins />
    </main>
  );
};

export default page;
