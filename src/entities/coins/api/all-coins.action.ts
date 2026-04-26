"use server";

import { fetcher } from "@/shared/api/fetcher";
import { AllCoinsRow } from "../model/types";

export const allCoins = async (percentagePeriod: string) => {
  try {
    return await fetcher<AllCoinsRow[]>({
      endpoint: "coins/markets",
      params: {
        price_change_percentage: percentagePeriod,
        precision: "full",
        vs_currency: "usd",
      },
    });
  } catch (err) {
    if (err instanceof Error) {
      console.error(`Error Fetching All Coins Data:`, err);
    }
  }
};
