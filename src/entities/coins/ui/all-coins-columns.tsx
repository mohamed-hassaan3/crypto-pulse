import { ColumnsDataTable } from "@/shared/types/data-table";
import { AllCoinsRow } from "../model/types";
import Image from "next/image";
import { TrendingDown, TrendingUp } from "lucide-react";
import {
  formatCompactNumber,
  formatCurrency,
  formatPercentage,
} from "@/shared/lib/format";
import Link from "next/link";

export const allCoinsColumns: ColumnsDataTable<AllCoinsRow>[] = [
  {
    header: "#",
    headClassName: "sticky left-0 z-40 min-w-12 bg-dark-400",
    cellClassName:
      "rank-cell cell sticky left-0 z-20 min-w-12 bg-(--primary-color)",
    cell: (coin) => {
      return <p>{coin.market_cap_rank}</p>;
    },
  },
  {
    header: "Coin",
    headClassName: "sticky left-12 z-40 min-w-64 bg-dark-400",
    cellClassName:
      "coins-cell cell sticky left-12 z-20 min-w-64 bg-(--primary-color)",
    cell: (coin) => {
      return (
        <Link
          href={`/coins/${coin.id}`}
          className="flex gap-0.5 max-w-40 items-center gap-2 overflow-hidden"
        >
          <Image src={coin.image} width={20} height={20} alt={coin.name} />
          <p className="truncate text-[14px] font-semibold">{coin.name}</p>
          <p className="shrink-0 text-xs opacity-50">
            {coin.symbol.toUpperCase()}
          </p>
        </Link>
      );
    },
  },
  {
    header: "Price",
    headClassName: "min-w-22",
    cellClassName: "price-cell cell min-w-22",
    cell: (coin) => {
      return <p>{formatCurrency(coin.current_price)}</p>;
    },
  },
  {
    header: "1h",
    headClassName: "min-w-24",
    cellClassName: "rate-cell cell min-w-24",
    cell: (coin) => {
      const isRatingUp = coin.price_change_percentage_1h_in_currency > 0;
      return (
        <p
          className={`flex gap-0.5 ${isRatingUp ? "text-green-500" : "text-red-500"}`}
        >
          {isRatingUp ? <TrendingUp size={16} /> : <TrendingDown size={16} />}{" "}
          <span>
            {formatPercentage(coin.price_change_percentage_1h_in_currency)}
          </span>
        </p>
      );
    },
  },
  {
    header: "24h",
    headClassName: "min-w-24",
    cellClassName: "rate-cell cell min-w-24",
    cell: (coin) => {
      const isRatingUp = coin.price_change_percentage_24h > 0;
      return (
        <p
          className={`flex gap-0.5 ${isRatingUp ? "text-green-500" : "text-red-500"}`}
        >
          {isRatingUp ? <TrendingUp size={16} /> : <TrendingDown size={16} />}{" "}
          <span>{formatPercentage(coin.price_change_percentage_24h)}</span>
        </p>
      );
    },
  },
  {
    header: "7d",
    headClassName: "min-w-24",
    cellClassName: "rate-cell cell min-w-24",
    cell: (coin) => {
      const isRatingUp = coin.price_change_percentage_7d_in_currency > 0;
      return (
        <p
          className={`flex gap-0.5 ${isRatingUp ? "text-green-500" : "text-red-500"}`}
        >
          {isRatingUp ? <TrendingUp size={16} /> : <TrendingDown size={16} />}{" "}
          <span>
            {formatPercentage(coin.price_change_percentage_7d_in_currency)}
          </span>
        </p>
      );
    },
  },
  {
    header: "30d",
    headClassName: "min-w-24",
    cellClassName: "rate-cell cell min-w-24",
    cell: (coin) => {
      const isRatingUp = coin.price_change_percentage_30d_in_currency > 0;
      return (
        <p
          className={`flex gap-0.5 ${isRatingUp ? "text-green-500" : "text-red-500"}`}
        >
          {isRatingUp ? <TrendingUp size={16} /> : <TrendingDown size={16} />}{" "}
          <span>
            {formatPercentage(coin.price_change_percentage_30d_in_currency)}
          </span>
        </p>
      );
    },
  },
  {
    header: "24 Volume",
    headClassName: "min-w-40",
    cellClassName: "val-cell cell min-w-40",
    cell: (coin) => {
      return <p>{formatCurrency(coin.total_volume)}</p>;
    },
  },
  {
    header: "Circulating Supply",
    headClassName: "min-w-44",
    cellClassName: "supply-cell cell min-w-44",
    cell: (coin) => {
      return <p>{formatCurrency(coin.circulating_supply)}</p>;
    },
  },
  {
    header: "Total Supply",
    headClassName: "min-w-22",
    cellClassName: "total-cell cell min-w-22",
    cell: (coin) => {
      return <p>{formatCompactNumber(coin.total_supply)}</p>;
    },
  },
  {
    header: "Market Cap",
    headClassName: "min-w-40",
    cellClassName: "market-cell cell min-w-40",
    cell: (coin) => {
      return <p>{formatCurrency(coin.market_cap)}</p>;
    },
  },
];
