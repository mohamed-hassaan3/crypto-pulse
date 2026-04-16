import type { OverviewChartPeriod } from "@/entities/overviewCoins/model/types";

export const CHART_PERIODS: Array<{
  label: string;
  value: OverviewChartPeriod;
}> = [
  { label: "1D", value: "1" },
  { label: "7D", value: "7" },
  { label: "1M", value: "30" },
  { label: "3M", value: "90" },
  { label: "6M", value: "180" },
  { label: "1Y", value: "365" },
];
