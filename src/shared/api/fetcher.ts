import type { FetcherProps } from "../types/fetcher";

const COINGECKO_API = process.env.BASE_URL;
const COINGECKO_API_KEY = process.env.COINGECKO_API_KEY;
const DEV_BASE_URL = process.env.DEV_BASE_URL;

const DEFAULT_REVALIDATE = 60;

function resolveUrl(endpoint: string, params?: FetcherProps["params"]): URL {
  const base = (COINGECKO_API ?? DEV_BASE_URL)?.replace(/\/$/, "");
  if (!base) {
    throw new Error("Missing BASE_URL or DEV_BASE_URL for CoinGecko requests.");
  }
  const path = endpoint.replace(/^\//, "");
  const url = new URL(path, `${base}/`);
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      if (value === undefined || value === null) continue;
      url.searchParams.set(key, String(value));
    }
  }
  return url;
}

function mergeHeaders(extra?: HeadersInit): Headers {
  if (!COINGECKO_API_KEY) {
    throw new Error("Missing COINGECKO_API_KEY.");
  }
  const headers = new Headers();
  headers.set("Content-Type", "application/json");
  headers.set("x-cg-demo-api-key", COINGECKO_API_KEY);
  if (extra) {
    new Headers(extra).forEach((value, key) => {
      headers.set(key, value);
    });
  }
  return headers;
}

export async function fetcher<T>({
  endpoint,
  params,
  headers,
  revalidate = DEFAULT_REVALIDATE,
  tags,
}: FetcherProps): Promise<T> {
  const url = resolveUrl(endpoint, params);
  const response = await fetch(url, {
    headers: mergeHeaders(headers),
    next: {
      revalidate,
      ...(tags?.length ? { tags } : {}),
    },
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(
      `CoinGecko request failed (${response.status} ${response.statusText}): ${body.slice(0, 200)}`,
    );
  }

  return response.json() as Promise<T>;
}
