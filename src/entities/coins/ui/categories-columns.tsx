import { ColumnsDataTable } from "@/shared/types/data-table";
import { TrendingDown, TrendingUp } from "lucide-react";
import Image from "next/image";
import { CategoryRow } from "../model/types";
import { formatCurrency, formatPercentage } from "@/shared/lib/format";
import { cn } from "@/shared/lib/utils";
import Link from "next/link";

export const categoriesColumns: ColumnsDataTable<CategoryRow>[] = [
  {
    header: "Category",
    headClassName: "sticky left-0 z-40 min-w-52 bg-dark-400",
    cellClassName: "name-cell sticky left-0 z-20 min-w-52 bg-(--primary-color)",
    cell: (category) => {
      return <p>{category.name}</p>;
    },
  },
  {
    header: "Top Gainers",
    headClassName: "min-w-40",
    cellClassName: "name-cell min-w-40",
    cell: (category) => {
      const topImgCategories = category.top_3_coins;
      const topIdCategories = category.top_3_coins_id;
      return (
        <div className="top-gainers-cell">
          {topImgCategories.map((singleImg, index) => {
            const idMatchingImg = topIdCategories[index];
            return (
              <Link key={singleImg} href={`coins/${idMatchingImg}`}>
                <Image src={singleImg} alt={singleImg} width={22} height={22} />
              </Link>
            );
          })}
        </div>
      );
    },
  },
  {
    header: "24h Change",
    headClassName: "min-w-32",
    cellClassName: "change-cell min-w-32",
    cell: (category) => {
      const isTrendingUp = category.market_cap_change_24h > 0;

      return (
        <div
          className={cn(
            "price-change",
            isTrendingUp ? "text-green-500" : "text-red-500",
          )}
        >
          <p className="flex items-center">
            {formatPercentage(category.market_cap_change_24h)}
            {isTrendingUp ? (
              <TrendingUp width={16} height={16} />
            ) : (
              <TrendingDown width={16} height={16} />
            )}
          </p>
        </div>
      );
    },
  },
  {
    header: "Market Cap",
    headClassName: "min-w-36",
    cellClassName: "price-cell min-w-36",
    cell: (category) => formatCurrency(category.market_cap),
  },
  {
    header: "24h Volume",
    headClassName: "min-w-36",
    cellClassName: "price-cell min-w-36",
    cell: (category) => formatCurrency(category.volume_24h),
  },
];
