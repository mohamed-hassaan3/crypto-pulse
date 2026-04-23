import { AreaChartOHLCData } from "@/entities/coins/model/types";

export const CoinIdAreaChart = ({
  areaChartData,
}: {
  areaChartData: AreaChartOHLCData[];
}) => {
  console.log("CHART", areaChartData);
  return (
    <div data-chart-points={areaChartData.length}>
      <h4>Coin Chart</h4>
    </div>
  );
};
