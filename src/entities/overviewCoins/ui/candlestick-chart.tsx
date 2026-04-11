"use client";

import { getOverviewCoinOHLC } from "@/entities/overviewCoins";
import { CandlestickChartProps } from "@/entities/overviewCoins/model/types";
import { Button } from "@/shared/ui";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { CHART_PERIODS } from "../constants/chartsPeriod";
import type { OverviewCoinOHLCData } from "../model/types";
import {
  CandlestickSeries,
  ColorType,
  createChart,
  type ISeriesApi,
  type UTCTimestamp,
} from "lightweight-charts";

function ohlcTuplesToCandlesticks(rows: OverviewCoinOHLCData[]) {
  return rows.map(([timeMs, open, high, low, close]) => ({
    time: Math.floor(timeMs / 1000) as UTCTimestamp,
    open,
    high,
    low,
    close,
  }));
}

export const CandlestickChart: React.FC<CandlestickChartProps> = ({
  children,
  coinId,
  data,
}) => {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const [period, setPeriod] = useState(CHART_PERIODS[0].value);
  const [chartData, setChartData] = useState(data);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setChartData(data);
  }, [data]);

  const onPeriodSelect = useCallback(
    async (value: string) => {
      if (value === period) return;
      setPeriod(value);
      setLoading(true);
      try {
        const next = await getOverviewCoinOHLC(coinId, value);
        if (next?.length) setChartData(next);
      } finally {
        setLoading(false);
      }
    },
    [coinId, period],
  );

  const seriesRef = useRef<ISeriesApi<"Candlestick"> | null>(null);

  useEffect(() => {
    const el = chartContainerRef.current;
    if (!el) return;

    const chart = createChart(el, {
      layout: {
        background: { type: ColorType.Solid, color: "transparent" },
        textColor: "#9CA3AF",
      },
      width: el.clientWidth,
      height: 400,
      grid: {
        vertLines: {
          color: "#1f2937",
        },
        horzLines: {
          color: "#1f2937",
        },
      },
    });

    const series = chart.addSeries(CandlestickSeries, {
      upColor: "#22c55e",
      downColor: "#ef4444",
      borderVisible: false,
      wickUpColor: "#22c55e",
      wickDownColor: "#ef4444",
    });
    seriesRef.current = series;

    const handleResize = () => {
      chart.applyOptions({
        width: el.clientWidth,
      });
    };

    window.addEventListener("resize", handleResize);
    chart.timeScale().fitContent();

    return () => {
      window.removeEventListener("resize", handleResize);
      seriesRef.current = null;
      chart.remove();
    };
  }, []);

  useEffect(() => {
    seriesRef.current?.setData(ohlcTuplesToCandlesticks(chartData));
  }, [chartData]);

  return (
    <article>
      <section className="flex flex-col md:flex-row gap-12 justify-between md:items-end">
        <div>{children}</div>
        <div className="flex gap-2 overflow-scroll no-scrollbar">
          {CHART_PERIODS.map((item) => (
            <Button
              key={item.value}
              type="button"
              disabled={loading}
              aria-pressed={period === item.value}
              onClick={() => void onPeriodSelect(item.value)}
              className={`${
                period === item.value
                  ? "bg-blue-500 text-white"
                  : "bg-gray-800 text-gray-400"
              }`}
            >
              {item.label}
            </Button>
          ))}
        </div>
      </section>
      <div
        ref={chartContainerRef}
        data-chart-period={period}
        data-chart-points={chartData.length}
      />
    </article>
  );
};
