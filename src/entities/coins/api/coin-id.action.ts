"use server";

import { fetcher } from "@/shared/api/fetcher";
import type {
  InfoDataProps,
  OverviewChartPeriod,
  OverviewCoinOHLCData,
} from "../model/types";

// COINS DETAILS INFO
export const getCoinDetails = async (id: string) => {
  try {
    return await fetcher<InfoDataProps>({ endpoint: `coins/${id}` });
  } catch (err) {
    console.error("ERROR: ", err);
    return null;
  }
};

// COINS DETAILS CHART
export const getCoinOHLC = async (
  id: string | number,
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
