import { getOverviewCoins } from "@/entities/overviewCoins";
import { CoinOverviewClient } from "./CoinOverviewClient";

export const CoinOverview = async () => {
  const bitcoinOverview = await getOverviewCoins("bitcoin");
  if (!bitcoinOverview) return null;

  const info = bitcoinOverview.info;
  const chart = bitcoinOverview.chart;

  return (
    <CoinOverviewClient coinId="bitcoin" info={info} initialChartData={chart} />
  );
};
