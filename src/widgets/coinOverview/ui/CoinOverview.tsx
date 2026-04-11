import { getOverviewCoins } from "@/entities/overviewCoins";
import { formatCurrency } from "@/shared/lib/format";
import { CandlestickChart } from "@/shared/ui";
import Image from "next/image";

export const CoinOverview = async () => {
  const bitcoinOverview = await getOverviewCoins("bitcoin");
  if (!bitcoinOverview) return null;

  const info = bitcoinOverview.info;
  const chart = bitcoinOverview.chart;

  return (
    <CandlestickChart data={chart} coinId={"bitcoin"}>
      <div className="flex gap-3">
        <Image src={info.image.large} width={50} height={50} alt="coin" />
        <div>
          <p className="text-md text-neutral-400">{`${info.name} / ${info.symbol.toUpperCase()}`}</p>
          <h1 className="font-bold text-xl">
            {formatCurrency(info.market_data.current_price.usd)}
          </h1>
        </div>
      </div>
    </CandlestickChart>
  );
};
