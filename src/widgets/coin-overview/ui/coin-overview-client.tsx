"use client";

import { formatCurrency } from "@/shared/lib/format";
import { Button, CandlestickChart } from "@/shared/ui";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { CHART_PERIODS, CoinOverviewClientProps } from "../model/types";
import { toCandlePoints } from "../lib/helper";
import { getOverviewCoinOHLC } from "@/entities/coins";

export function CoinOverviewClient({
  coinId,
  info,
  initialChartData,
}: CoinOverviewClientProps) {
  const [period, setPeriod] = useState(CHART_PERIODS[0].value);
  const [chartData, setChartData] = useState(initialChartData);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setChartData(initialChartData);
    setPeriod(CHART_PERIODS[0].value);
  }, [initialChartData]);

  const onPeriodSelect = useCallback(
    async (value: (typeof CHART_PERIODS)[number]["value"]) => {
      if (value === period) return;

      setPeriod(value);
      setLoading(true);

      try {
        const next = await getOverviewCoinOHLC(coinId, value);
        if (next?.length) {
          setChartData(next);
        }
      } finally {
        setLoading(false);
      }
    },
    [coinId, period],
  );

  return (
    <article className="custom-scrollbar">
      <section className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
        <div className="flex gap-3">
          <Image
            src={info.image.large}
            width={50}
            height={50}
            alt={info.name}
          />
          <div>
            <p className="text-md text-neutral-400">
              {`${info.name} / ${info.symbol.toUpperCase()}`}
            </p>
            <h1 className="text-xl font-bold">
              {formatCurrency(info.market_data.current_price.usd)}
            </h1>
          </div>
        </div>

        <div className="flex gap-2 overflow-scroll no-scrollbar">
          {CHART_PERIODS.map((item) => (
            <Button
              key={item.value}
              type="button"
              disabled={loading}
              aria-pressed={period === item.value}
              onClick={() => void onPeriodSelect(item.value)}
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
      </section>

      <div data-chart-period={period}>
        <CandlestickChart data={toCandlePoints(chartData)} />
      </div>
    </article>
  );
}
