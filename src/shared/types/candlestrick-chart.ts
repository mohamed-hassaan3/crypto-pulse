import { UTCTimestamp } from "lightweight-charts";

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
