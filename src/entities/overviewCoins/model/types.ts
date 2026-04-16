export interface OverviewCoinData {
  id: string;
  name: string;
  symbol: string;
  image: {
    large: string;
    small: string;
  };
  market_data: {
    current_price: {
      usd: number;
    };
  };
}

export type OverviewCoinOHLCData = [number, number, number, number, number];

export type OverviewChartPeriod = "1" | "7" | "30" | "90" | "180" | "365";
