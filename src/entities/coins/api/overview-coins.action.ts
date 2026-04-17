"use server";

import { fetcher } from "@/shared/api/fetcher";
import type {
  OverviewChartPeriod,
  OverviewCoinData,
  OverviewCoinOHLCData,
} from "../model/types";

async function fetchCoinOHLC(
  id: string | number,
  days: OverviewChartPeriod,
): Promise<OverviewCoinOHLCData[]> {
  return fetcher<OverviewCoinOHLCData[]>({
    endpoint: `coins/${id}/ohlc`,
    params: {
      vs_currency: "usd",
      days,
      precision: "full",
    },
  });
}

export const getOverviewCoins = async (id: string | number) => {
  try {
    const [info, chart] = await Promise.all([
      fetcher<OverviewCoinData>({ endpoint: `coins/${id}` }),
      fetchCoinOHLC(id, "1"),
    ]);

    return { info, chart };
  } catch (err) {
    if (err instanceof Error) {
      console.error("OVERVIEW ERROR:", err);
    }
  }
};

export const getOverviewCoinOHLC = async (
  coinId: string,
  days: OverviewChartPeriod,
) => {
  try {
    return await fetchCoinOHLC(coinId, days);
  } catch (err) {
    if (err instanceof Error) {
      console.error("OHLC ERROR:", err);
    }
  }
};
