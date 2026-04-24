import type { InfoDataProps } from "@/entities/coins/model/types";
import { formatPercentage } from "@/shared/lib/format";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui";
import { TrendingDown, TrendingUp } from "lucide-react";

export const PercentageTable = ({ infoData }: { infoData: InfoDataProps }) => {
  const percentageData = [
    {
      period: "1h",
      value: infoData.market_data.price_change_percentage_1h_in_currency?.usd,
    },
    {
      period: "24h",
      value: infoData.market_data.price_change_percentage_24h_in_currency?.usd,
    },
    {
      period: "7d",
      value: infoData.market_data.price_change_percentage_7d_in_currency?.usd,
    },
    {
      period: "14d",
      value: infoData.market_data.price_change_percentage_14d_in_currency?.usd,
    },
    {
      period: "30d",
      value: infoData.market_data.price_change_percentage_30d_in_currency?.usd,
    },
    {
      period: "1yr",
      value: infoData.market_data.price_change_percentage_1y_in_currency?.usd,
    },
  ];

  return (
    <Table className="rounded-3xl border">
      <TableHeader>
        <TableRow>
          {percentageData.map((item) => (
            <TableHead
              key={item.period}
              className="w-[100px] bg-neutral-800 text-center"
            >
              {item.period}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          {percentageData.map((item) => {
            const isMissing = item.value === undefined || item.value === null;
            const isPositive = (item.value ?? 0) > 0;

            return (
              <TableCell
                key={item.period}
                className={`border-r text-center font-medium ${
                  isMissing
                    ? "text-neutral-400"
                    : isPositive
                      ? "text-green-500"
                      : "text-red-500"
                }`}
              >
                {isMissing ? (
                  "N/A"
                ) : (
                  <>
                    {isPositive ? (
                      <TrendingUp className="inline pr-1" size={16} />
                    ) : (
                      <TrendingDown className="inline pr-1" size={16} />
                    )}
                    {formatPercentage(item.value ?? 0)}
                  </>
                )}
              </TableCell>
            );
          })}
        </TableRow>
      </TableBody>
    </Table>
  );
};
