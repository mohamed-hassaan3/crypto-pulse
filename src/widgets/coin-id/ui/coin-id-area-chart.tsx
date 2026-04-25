"use client";

import { getCoinOHLC } from "@/entities/coins";
import type {
  AreaChartOHLCData,
  OverviewChartPeriod,
} from "@/entities/coins/model/types";
import { AreaChart, Button } from "@/shared/ui";
import type { UTCTimestamp } from "lightweight-charts";
import { useState } from "react";

const CHART_PERIODS: Array<{ label: string; value: OverviewChartPeriod }> = [
  { label: "1D", value: "1" },
  { label: "7D", value: "7" },
  { label: "1M", value: "30" },
  { label: "3M", value: "90" },
  { label: "6M", value: "180" },
  { label: "1Y", value: "365" },
];

function toAreaPoints(rows: AreaChartOHLCData[]) {
  return rows.map(([timeMs, , , , close]) => ({
    time: Math.floor(timeMs / 1000) as UTCTimestamp,
    value: close,
  }));
}

export const CoinIdAreaChart = ({
  coinId,
  areaChartData,
}: {
  coinId: string;
  areaChartData: AreaChartOHLCData[];
}) => {
  const [period, setPeriod] = useState<OverviewChartPeriod>("1");
  const [chartData, setChartData] = useState(areaChartData);
  const [isLoading, setIsLoading] = useState(false);

  const handlePeriodChange = async (nextPeriod: OverviewChartPeriod) => {
    if (nextPeriod === period) return;

    setIsLoading(true);
    setPeriod(nextPeriod);

    try {
      const nextData = await getCoinOHLC(coinId, nextPeriod);
      setChartData(nextData);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <article className="space-y-4">
      <aside className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h4 className="text-lg font-semibold">Coin Chart</h4>
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {CHART_PERIODS.map((item) => (
            <Button
              key={item.value}
              type="button"
              disabled={isLoading}
              aria-pressed={period === item.value}
              onClick={() => void handlePeriodChange(item.value)}
              className={
                period === item.value
                  ? "bg-blue-500 text-white"
                  : "bg-gray-800 text-gray-400"
              }
            >
              {item.label}
            </Button>
          ))}
        </div>
      </aside>
      <AreaChart data={toAreaPoints(chartData)} height={360} />
    </article>
  );
};
