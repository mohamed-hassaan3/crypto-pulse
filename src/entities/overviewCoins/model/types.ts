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

export interface ChartSectionProps {
  coinData: {
    image: { large: string };
    name: string;
    symbol: string;
    market_data: {
      current_price: { usd: number };
    };
  };
  coinOHLCData: OverviewCoinOHLCData[];
  coinId: string;
}
