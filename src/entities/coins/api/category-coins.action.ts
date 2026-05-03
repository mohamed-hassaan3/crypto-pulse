"use server";

import { fetcher } from "@/shared";
import type { AllCoinsRow } from "../model/types";

export const getCategoryCoins = async (
  categoryId: string,
): Promise<AllCoinsRow[]> => {
  try {
    return await fetcher<AllCoinsRow[]>({
      endpoint: "coins/markets",
      params: {
        vs_currency: "usd",
        category: categoryId,
        price_change_percentage: "1h,24h,7d,30d",
        precision: "full",
      },
    });
  } catch (err) {
    console.error("ERROR Fetch Category Coins", err);
    return [];
  }
};
