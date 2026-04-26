import { ColumnsDataTable } from "@/shared/types/data-table";
import { AllCoinsRow } from "../model/types";
import Image from "next/image";
import { TrendingDown, TrendingUp } from "lucide-react";
import {
  formatCompactNumber,
  formatCurrency,
  formatPercentage,
} from "@/shared/lib/format";

export const allCoinsColumns: ColumnsDataTable<AllCoinsRow>[] = [
  {
    header: "#",
    cellClassName: "name-cell",
    cell: (coin) => {
      return <p>{coin.market_cap_rank}</p>;
    },
  },
  {
    header: "Coin",
    cellClassName: "name-cell",
    cell: (coin) => {
      return (
        <div className="flex items-center gap-2">
          <Image src={coin.image} width={24} height={24} alt={coin.name} />
          <p className="font-semibold text-[16px]">{coin.name}</p>
          <p className="opacity-50">{coin.symbol.toUpperCase()}</p>
        </div>
      );
    },
  },
  {
    header: "Price",
    cellClassName: "name-cell",
    cell: (coin) => {
      return <p>${formatCurrency(coin.current_price)}</p>;
    },
  },
  {
    header: "1h",
    cellClassName: "name-cell",
    cell: (coin) => {
      const isRatingUp = coin.price_change_percentage_24h > 0;
      return (
        <p className={`flex ${isRatingUp ? "text-green-500" : "text-red-500"}`}>
          {isRatingUp ? <TrendingUp size={16} /> : <TrendingDown size={16} />}{" "}
          <span>{formatPercentage(coin.price_change_percentage_24h)}</span>
        </p>
      );
    },
  },
  {
    header: "24h",
    cellClassName: "name-cell",
    cell: (coin) => {
      const isRatingUp = coin.price_change_percentage_24h > 0;
      return (
        <p className={`flex ${isRatingUp ? "text-green-500" : "text-red-500"}`}>
          {isRatingUp ? <TrendingUp size={16} /> : <TrendingDown size={16} />}{" "}
          <span>{formatPercentage(coin.price_change_percentage_24h)}</span>
        </p>
      );
    },
  },
  {
    header: "7d",
    cellClassName: "name-cell",
    cell: (coin) => {
      const isRatingUp = coin.price_change_percentage_24h > 0;
      return (
        <p className={`flex ${isRatingUp ? "text-green-500" : "text-red-500"}`}>
          {isRatingUp ? <TrendingUp size={16} /> : <TrendingDown size={16} />}{" "}
          <span>{formatPercentage(coin.price_change_percentage_24h)}</span>
        </p>
      );
    },
  },
  {
    header: "30d",
    cellClassName: "name-cell",
    cell: (coin) => {
      const isRatingUp = coin.price_change_percentage_24h > 0;
      return (
        <p className={`flex ${isRatingUp ? "text-green-500" : "text-red-500"}`}>
          {isRatingUp ? <TrendingUp size={16} /> : <TrendingDown size={16} />}{" "}
          <span>{formatPercentage(coin.price_change_percentage_24h)}</span>
        </p>
      );
    },
  },
  {
    header: "24 Volume",
    cellClassName: "name-cell",
    cell: (coin) => {
      return <p>${formatCurrency(coin.total_volume)}</p>;
    },
  },
  {
    header: "Circulating Supply",
    cellClassName: "name-cell",
    cell: (coin) => {
      return <p>{formatCurrency(coin.circulating_supply)}</p>;
    },
  },
  {
    header: "Total Supply",
    cellClassName: "name-cell",
    cell: (coin) => {
      return <p>{formatCompactNumber(coin.total_supply)}</p>;
    },
  },
  {
    header: "Market Cap",
    cellClassName: "name-cell",
    cell: (coin) => {
      return <p>{formatCurrency(coin.market_cap)}</p>;
    },
  },
];
