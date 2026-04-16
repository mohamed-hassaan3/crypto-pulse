import { OverviewCoinOHLCData } from "@/entities/overviewCoins";
import { UTCTimestamp } from "lightweight-charts";

export function toCandlePoints(rows: OverviewCoinOHLCData[]) {
  return rows.map(([timeMs, open, high, low, close]) => ({
    time: Math.floor(timeMs / 1000) as UTCTimestamp,
    open,
    high,
    low,
    close,
  }));
}
