import { UTCTimestamp } from "lightweight-charts";

// CANDLE STRICK CHART
export interface CandlePoint {
  time: UTCTimestamp;
  open: number;
  high: number;
  low: number;
  close: number;
}

export interface CandlestickChartProps {
  data: CandlePoint[];
  height?: number;
}

// AREA CHART
export interface AreaPoint {
  time: UTCTimestamp;
  value: number;
}

export interface AreaChartProps {
  data: AreaPoint[];
  height?: number;
}
