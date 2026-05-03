import { getExchangeRates } from "@/entities/exchange";
import { getNftDetails } from "@/entities/nfts";
import {
  formatCompactNumber,
  formatCurrency,
  formatPercentage,
} from "@/shared";
import Image from "next/image";
import Link from "next/link";

const stripHtml = (value?: string) => value?.replace(/<[^>]*>/g, "").trim();

const formatOptionalCurrency = (value?: number) =>
  value === undefined || value === null ? "N/A" : formatCurrency(value);

const formatOptionalNumber = (value?: number) =>
  value === undefined || value === null ? "N/A" : formatCompactNumber(value);

export const NftId = async ({ id }: { id: string }) => {
  const [details, exchangeRates] = await Promise.all([
    getNftDetails(id),
    getExchangeRates(),
  ]);

  if (!details) {
    return <p className="text-neutral-400">Unable to load NFT details.</p>;
  }

  const usdRate = exchangeRates?.rates.usd.value;
  const description = stripHtml(details.description);
  const metrics = [
    {
      label: "Floor Price",
      value: formatOptionalCurrency(details.floor_price?.usd),
    },
    {
      label: "Market Cap",
      value: formatOptionalCurrency(details.market_cap?.usd),
    },
    {
      label: "24h Volume",
      value: formatOptionalCurrency(details.volume_24h?.usd),
    },
    {
      label: "24h Floor Change",
      value:
        details.floor_price_in_usd_24h_percentage_change === undefined
          ? "N/A"
          : formatPercentage(details.floor_price_in_usd_24h_percentage_change),
    },
    {
      label: "Owners",
      value: formatOptionalNumber(details.number_of_unique_addresses),
    },
    {
      label: "Total Supply",
      value: formatOptionalNumber(details.total_supply),
    },
    {
      label: "BTC/USD Exchange Rate",
      value: usdRate ? formatCurrency(usdRate) : "N/A",
    },
  ];

  return (
    <article className="space-y-8">
      {details.banner_image ? (
        <div className="relative h-48 overflow-hidden rounded-sm border border-dark-400">
          <Image
            src={details.banner_image}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 90vw"
            priority
          />
        </div>
      ) : null}

      <section className="grid gap-8 lg:grid-cols-5">
        <aside className="space-y-5 lg:col-span-2">
          <div className="flex items-center gap-3">
            {details.image?.small ? (
              <Image
                src={details.image.small}
                width={48}
                height={48}
                alt={details.name}
                className="rounded-sm"
              />
            ) : null}
            <div className="min-w-0">
              <h1 className="truncate text-2xl font-bold">{details.name}</h1>
              <p className="text-sm uppercase text-neutral-500">
                {details.symbol}
              </p>
            </div>
          </div>

          <div className="space-y-2 text-sm text-neutral-400">
            <p>Network: {details.asset_platform_id}</p>
            <p className="break-all">Contract: {details.contract_address}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {details.links?.homepage ? (
              <Link
                href={details.links.homepage}
                target="_blank"
                rel="noreferrer"
                className="rounded-sm border px-3 py-2 text-sm hover:bg-neutral-900"
              >
                Homepage
              </Link>
            ) : null}
            {details.links?.twitter ? (
              <Link
                href={details.links.twitter}
                target="_blank"
                rel="noreferrer"
                className="rounded-sm border px-3 py-2 text-sm hover:bg-neutral-900"
              >
                Twitter
              </Link>
            ) : null}
            {details.links?.discord ? (
              <Link
                href={details.links.discord}
                target="_blank"
                rel="noreferrer"
                className="rounded-sm border px-3 py-2 text-sm hover:bg-neutral-900"
              >
                Discord
              </Link>
            ) : null}
          </div>
        </aside>

        <section className="space-y-6 lg:col-span-3">
          <div className="grid gap-3 sm:grid-cols-2">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-sm border border-dark-400 bg-(--primary-color) p-4"
              >
                <p className="text-sm text-neutral-500">{metric.label}</p>
                <p className="mt-2 text-xl font-semibold text-neutral-100">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>

          {description ? (
            <section className="space-y-2">
              <h2 className="text-xl font-semibold">About</h2>
              <p className="leading-7 text-neutral-400">{description}</p>
            </section>
          ) : null}
        </section>
      </section>
    </article>
  );
};
