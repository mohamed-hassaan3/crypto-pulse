import { CategoryId } from "@/views";
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
  const categoryName = toTitleCase(normalizeSeoSlug(id));

  return buildPageMetadata({
    title: `${categoryName} Crypto Category`,
    description: `Analyze ${categoryName} category market trends, top coins, and overall performance on CryptoPulse.`,
    path: `/categories/${id}`,
    keywords: [
      categoryName,
      "crypto category",
      "market trends",
      "top category coins",
    ],
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
      <CategoryId id={id} />
    </main>
  );
}
