"use server";

import { fetcher } from "@/shared/api/fetcher";
import { AllCoinsRow } from "../model/types";

export const allCoins = async () => {
  try {
    return await fetcher<AllCoinsRow[]>({
      endpoint:
        "coins/markets?vs_currency=usd&price_change_percentage=1h,24h,7d,30d",
      params: {
        // price_change_percentage: percentagePeriod,
        precision: "full",
        // vs_currency: "usd",
      },
    });
  } catch (err) {
    if (err instanceof Error) {
      console.error(`Error Fetching All Coins Data:`, err);
    }
  }
};
