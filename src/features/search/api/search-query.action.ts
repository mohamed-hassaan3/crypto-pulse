"use server";

import { fetcher } from "@/shared";
import { SearchQueryResult } from "../model/types";

export const searchQuery = async (
  searchParams: string,
): Promise<SearchQueryResult | null> => {
  const query = searchParams.trim();
  if (!query) return null;

  try {
    return await fetcher<SearchQueryResult>({
      endpoint: "search",
      params: {
        query,
      },
    });
  } catch (err) {
    if (err instanceof Error) {
      console.error("ERROR: can't fetch Search result.!", err);
    }
    return null;
  }
};
