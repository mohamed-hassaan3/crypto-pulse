"use server";

import { fetcher } from "@/shared";
import type {
  OverviewChartPeriod,
  OverviewCoinData,
  OverviewCoinOHLCData,
} from "../model/types";

export const getOverviewCoinOHLC = async (
  id: string | undefined,
  days: OverviewChartPeriod,
): Promise<OverviewCoinOHLCData[]> => {
  return fetcher<OverviewCoinOHLCData[]>({
    endpoint: `coins/${id}/ohlc`,
    params: {
      vs_currency: "usd",
      days,
      precision: "full",
    },
  });
};

export const getOverviewCoins = async (id: string | number) => {
  try {
    return await fetcher<OverviewCoinData>({ endpoint: `coins/${id}` });
  } catch (err) {
    if (err instanceof Error) {
      console.error("OVERVIEW ERROR:", err);
    }
  }
};
