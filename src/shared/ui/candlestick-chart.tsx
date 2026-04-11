"use client";

import { OverviewCoinOHLCData } from "@/entities/overviewCoins/model/types";
import React, { useRef } from "react";
interface CandlestickChartProps {
  children: React.ReactNode;
  coinId: string;
  data: OverviewCoinOHLCData[];
}
export const CandlestickChart: React.FC<CandlestickChartProps> = ({
  children,
  coinId,
  data,
}) => {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);

  console.log("CHART OHLC", data);
  return (
    <div>
      <div>{children}</div>
      <div></div>
      <div ref={chartContainerRef} />
    </div>
  );
};
