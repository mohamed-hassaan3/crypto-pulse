export type FetcherProps = {
  endpoint: string;
  params?: Record<string, string | number | boolean | undefined>;
  headers?: HeadersInit;
  /** Next.js fetch cache: seconds until revalidation (default 60). */
  revalidate?: number;
  /** Next.js fetch cache tags for `revalidateTag`. */
  tags?: string[];
};
