"use client";

import {
  AreaSeries,
  ColorType,
  createChart,
  type IChartApi,
  type ISeriesApi,
} from "lightweight-charts";
import { useEffect, useRef } from "react";
import type { AreaChartProps } from "@/shared/types/charts";

export function AreaChart({ data, height = 360 }: AreaChartProps) {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const seriesRef = useRef<ISeriesApi<"Area"> | null>(null);

  useEffect(() => {
    const el = chartContainerRef.current;
    if (!el) return;

    const chart = createChart(el, {
      layout: {
        background: { type: ColorType.Solid, color: "transparent" },
        textColor: "#9CA3AF",
      },
      width: el.clientWidth,
      height,
      grid: {
        vertLines: {
          color: "#1f2937",
        },
        horzLines: {
          color: "#1f2937",
        },
      },
    });

    chartRef.current = chart;
    seriesRef.current = chart.addSeries(AreaSeries, {
      lineColor: "#60A5FA",
      topColor: "rgba(96, 165, 250, 0.35)",
      bottomColor: "rgba(96, 165, 250, 0.04)",
      lineWidth: 2,
    });

    const handleResize = () => {
      chart.applyOptions({
        width: el.clientWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      seriesRef.current = null;
      chartRef.current = null;
      chart.remove();
    };
  }, [height]);

  useEffect(() => {
    const firstValue = data[0]?.value ?? 0;
    const lastValue = data[data.length - 1]?.value ?? 0;
    const isUpTrend = lastValue >= firstValue;

    seriesRef.current?.applyOptions({
      lineColor: isUpTrend ? "#22c55e" : "#ef4444",
      topColor: isUpTrend
        ? "rgba(34, 197, 94, 0.35)"
        : "rgba(239, 68, 68, 0.35)",
      bottomColor: isUpTrend
        ? "rgba(34, 197, 94, 0.04)"
        : "rgba(239, 68, 68, 0.04)",
    });
    seriesRef.current?.setData(data);
    chartRef.current?.timeScale().fitContent();
  }, [data]);

  return <div ref={chartContainerRef} data-chart-points={data.length} />;
}
