export interface CandlestickChartProps {
  children: React.ReactNode;
  coinId: string;
  data: OverviewCoinOHLCData[];
}

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

// CHARTS TYPES
export type ChartPeriodProps = "1d" | "7d" | "1m" | "3m" | "1y" | "max";
export interface CandleDataProps {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

export interface ChartsData {
  label: string;
  title: string;
}
