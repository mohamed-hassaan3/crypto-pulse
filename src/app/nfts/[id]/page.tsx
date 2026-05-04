import { NftId } from "@/views";
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
  const nftName = toTitleCase(normalizeSeoSlug(id));

  return buildPageMetadata({
    title: `${nftName} NFT Collection`,
    description: `View ${nftName} NFT collection stats, floor price trends, and trading activity on CryptoPulse.`,
    path: `/nfts/${id}`,
    keywords: [nftName, "nft collection", "nft floor price", "nft stats"],
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main>
      <NftId id={id} />
    </main>
  );
}
