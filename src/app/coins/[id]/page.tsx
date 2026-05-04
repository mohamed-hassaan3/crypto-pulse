import { CoinId } from "@/views";
import type { Metadata } from "next";
import {
  buildPageMetadata,
  normalizeSeoSlug,
  toTitleCase,
} from "@/shared/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const normalizedId = normalizeSeoSlug(id);
  const coinName = toTitleCase(normalizedId);

  return buildPageMetadata({
    title: `${coinName} Price, Chart & Market Data`,
    description: `Track ${coinName} live price, market cap, trading volume, and recent performance on CryptoPulse.`,
    path: `/coins/${id}`,
    keywords: [
      coinName,
      `${coinName} price`,
      `${coinName} market cap`,
      "crypto chart",
    ],
  });
}

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <main>
      <CoinId id={id} />
    </main>
  );
}
