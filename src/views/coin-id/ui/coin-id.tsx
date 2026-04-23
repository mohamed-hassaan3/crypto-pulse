import dynamic from "next/dynamic";
import { CoinAreaChartFallback, CoinInfoFallback } from "./fallback";
import { getCoinDetails, getCoinOHLC } from "@/entities/coins";

const CoinInfo = dynamic(
  () => import("@/widgets").then((mod) => mod.CoinIdInfo),
  {
    loading: () => <CoinInfoFallback />,
  },
);

const CoinAreaChart = dynamic(
  () => import("@/widgets").then((mod) => mod.CoinIdAreaChart),
  {
    loading: () => <CoinAreaChartFallback />,
  },
);

export const CoinId = async ({ id }: { id: string }) => {
  const details = await getCoinDetails(id);
  const chartDetails = await getCoinOHLC(id, "1");

  if (!details) {
    return <p className="text-neutral-400">Unable to load coin details.</p>;
  } else if (!chartDetails) {
    return <p className="text-neutral-400">Unable to load coin Chart.</p>;
  }

  return (
    <article className="grid lg:grid-cols-5 gap-2">
      <aside className="lg:col-span-2 lg:border-r">
        <CoinInfo infoData={details} />
      </aside>
      <section className="lg:col-span-3">
        <CoinAreaChart coinId={id} areaChartData={chartDetails} />
      </section>
    </article>
  );
};
