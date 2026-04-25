import type { InfoDataProps } from "@/entities/coins/model/types";
import { formatCurrency, formatPercentage } from "@/shared/lib/format";
import { ArrowDown, ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function formatMetricValue(
  value?: number | null,
  options?: { currency?: boolean },
) {
  if (value === null || value === undefined || Number.isNaN(value)) {
    return "N/A";
  }

  if (options?.currency) {
    return formatCurrency(value);
  }

  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  }).format(value);
}

export const CoinIdInfo = ({ infoData }: { infoData: InfoDataProps }) => {
  const homepage = infoData.links.homepage.find(Boolean);
  const blockchainSite = infoData.links.blockchain_site.find(Boolean);
  const coingeckoUrl = `https://www.coingecko.com/en/coins/${infoData.id}`;
  const currentPrice = infoData.market_data.current_price.usd;
  const circulatingSupply = infoData.market_data.circulating_supply;
  const totalSupply = infoData.market_data.total_supply;
  const marketCapPercentage24h = formatPercentage(
    infoData.market_data.market_cap_change_percentage_24h,
  );
  const outstandingSupply =
    totalSupply && circulatingSupply
      ? Math.max(totalSupply - circulatingSupply, 0)
      : null;
  const outstandingTokenValue =
    outstandingSupply !== null ? outstandingSupply * currentPrice : null;
  const metrics = [
    {
      label: "Market Cap",
      value: formatMetricValue(infoData.market_data.market_cap.usd, {
        currency: true,
      }),
    },
    {
      label: "Outstanding Token Value",
      value: formatMetricValue(outstandingTokenValue, { currency: true }),
    },
    {
      label: "Fully Diluted Valuation",
      value: formatMetricValue(
        infoData.market_data.fully_diluted_valuation.usd,
        { currency: true },
      ),
    },
    {
      label: "24 Hour Trading Vol",
      value: formatMetricValue(infoData.market_data.total_volume.usd, {
        currency: true,
      }),
    },
    {
      label: "Total Value Locked (TVL)",
      value: formatMetricValue(infoData.market_data.total_value_locked?.usd, {
        currency: true,
      }),
    },
    {
      label: "Circulating Supply",
      value: formatMetricValue(circulatingSupply),
    },
    {
      label: "Outstanding Supply",
      value: formatMetricValue(outstandingSupply),
    },
    {
      label: "Total Supply",
      value: formatMetricValue(totalSupply),
    },
    {
      label: "Max Supply",
      value: formatMetricValue(infoData.market_data.max_supply),
    },
    {
      label: "Total Treasury Holding",
      value: formatMetricValue(infoData.treasury_coins),
    },
  ];

  return (
    <section className="space-y-6 pr-6">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Image
            src={infoData.image.small}
            width={30}
            height={30}
            alt={infoData.name}
            className="rounded-full"
          />
          <h1 className="text-xl font-bold">{infoData.name}</h1>
          <p className="text-sm uppercase tracking-wide text-neutral-500">
            {infoData.symbol}
          </p>
          <small className="bg-neutral-700 rounded-sm px-1">
            #{infoData.market_cap_rank}
          </small>
        </div>
        <div className="flex gap-3">
          <p className="text-5xl font-extrabold text-neutral-200">
            {formatCurrency(infoData.market_data.current_price.usd)}
          </p>
          <small
            className={`flex items-center ${infoData.market_data.market_cap_change_percentage_24h > 0 ? "text-green-500" : "text-red-500"}`}
          >
            {infoData.market_data.market_cap_change_percentage_24h > 0 ? (
              <ArrowUp size={16} />
            ) : (
              <ArrowDown size={16} />
            )}
            {marketCapPercentage24h}
          </small>
        </div>
      </div>

      <div className="space-y-3">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="flex items-center justify-between gap-4 border-b border-neutral-800 pb-3 text-sm"
          >
            <p className="text-neutral-500">{metric.label}</p>
            <p className="text-right font-medium text-neutral-100">
              {metric.value}
            </p>
          </div>
        ))}
      </div>

      <div className="space-y-2">
        <p className="text-neutral-500">Links</p>
        <div className="flex flex-wrap gap-2">
          <Link
            href={coingeckoUrl}
            target="_blank"
            className="rounded-sm border px-3 py-2 text-sm hover:bg-neutral-900"
          >
            CoinGecko
          </Link>
          {homepage ? (
            <Link
              href={homepage}
              target="_blank"
              className="rounded-sm border px-3 py-2 text-sm hover:bg-neutral-900"
            >
              Homepage
            </Link>
          ) : null}
          {blockchainSite ? (
            <Link
              href={blockchainSite}
              target="_blank"
              className="rounded-sm border px-3 py-2 text-sm hover:bg-neutral-900"
            >
              Blockchain
            </Link>
          ) : null}
          {infoData.links.subreddit_url ? (
            <Link
              href={infoData.links.subreddit_url}
              target="_blank"
              className="rounded-sm border px-3 py-2 text-sm hover:bg-neutral-900"
            >
              Reddit
            </Link>
          ) : null}
        </div>
      </div>

      {infoData.description.en ? (
        <div className="space-y-2">
          <p className="text-neutral-500">About</p>
          <p className="line-clamp-6 text-sm leading-6 text-neutral-300">
            {infoData.description.en.replace(/<[^>]+>/g, " ").trim()}
          </p>
        </div>
      ) : null}
    </section>
  );
};
