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
    cellClassName: "name-cell",
    cell: (category) => {
      return (
        <Link href={`/categories/${category.id}`}>
          <p>{category.name}</p>
        </Link>
      );
    },
  },
  {
    header: "Top Gainers",
    cellClassName: "name-cell",
    cell: (category) => {
      const topImgCategories = category.top_3_coins;
      const topIdCategories = category.top_3_coins_id;
      return (
        <div className="top-gainers-cell">
          {topImgCategories.map((singleImg) => (
            <Image
              key={singleImg}
              src={singleImg}
              alt={singleImg}
              width={22}
              height={22}
            />
          ))}
        </div>
      );
    },
  },
  {
    header: "24h Change",
    cellClassName: "change-cell",
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
    cellClassName: "price-cell",
    cell: (category) => formatCurrency(category.market_cap),
  },
  {
    header: "24h Volume",
    cellClassName: "price-cell",
    cell: (category) => formatCurrency(category.volume_24h),
  },
];
