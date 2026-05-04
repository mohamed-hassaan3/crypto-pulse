import type { Metadata } from "next";
const SITE_NAME = "CryptoPulse";
const BASE_URL = "https://crypto-pulse-mh.vercel.app";
const DEFAULT_OG_IMAGE = "/opengraph-image.png";

type BuildPageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function normalizeSeoSlug(value: string) {
  return decodeURIComponent(value)
    .replace(/[-_]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

export function toTitleCase(value: string) {
  return value
    .split(" ")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: BuildPageMetadataInput): Metadata {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const canonical =
    normalizedPath === "/" ? "/" : normalizedPath.replace(/\/+$/, "");
  const fullTitle = `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: SITE_NAME,
      type: "website",
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} preview image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
    metadataBase: new URL(BASE_URL),
  };
}
