import { getOverviewCoinOHLC, getOverviewCoins } from "@/entities/coins";
import { CoinOverviewClient } from "./coin-overview-client";

export const CoinOverview = async () => {
  const bitcoinOverview = await getOverviewCoins("bitcoin");
  const bitcoinOverviewChart = await getOverviewCoinOHLC(
    bitcoinOverview?.id,
    "1",
  );
  if (!bitcoinOverview || !bitcoinOverviewChart) return null;

  return (
    <CoinOverviewClient
      coinId="bitcoin"
      info={bitcoinOverview}
      initialChartData={bitcoinOverviewChart}
    />
  );
};
