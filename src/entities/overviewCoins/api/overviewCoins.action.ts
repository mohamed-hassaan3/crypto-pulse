"use server";

import { fetcher } from "@/shared/api/fetcher";
import type { OverviewCoinData, OverviewCoinOHLCData } from "../model/types";

export const getOverviewCoins = async () => {
  try {
    const [info, chart] = await Promise.all([
      fetcher<OverviewCoinData>("coins/bitcoin"),
      fetcher<OverviewCoinOHLCData[]>("coins/bitcoin/ohlc", {
        vs_currency: "usd",
        days: "1",
        precision: "full",
      }),
    ]);

    return { info, chart };
  } catch (err) {
    if (err instanceof Error) {
      console.error("OVERVIEW ERROR:", err);
    }
  }
};
