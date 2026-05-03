"use server";

import { fetcher } from "@/shared";
import type { ExchangeRatesResult } from "../model/types";

export const getExchangeRates =
  async (): Promise<ExchangeRatesResult | null> => {
    try {
      return await fetcher<ExchangeRatesResult>({
        endpoint: "exchange_rates",
      });
    } catch (err) {
      console.error("ERROR Fetch Exchange Rates", err);
      return null;
    }
  };
