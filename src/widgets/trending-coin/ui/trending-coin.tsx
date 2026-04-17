import { getTrendingCoin, trendingCoinColumns } from "@/entities/coins";
import { DataTable } from "@/shared/ui";

export const revalidate = 60;

export const TrendingCoin = async () => {
  const result = await getTrendingCoin();
  return (
    <div id="trending-coins">
      <h4>Trending Coins</h4>
      <DataTable
        columns={trendingCoinColumns}
        data={result?.coins.slice(0, 6) ?? []}
        rowKey={(coin) => coin.item.id}
        tableClassName="trending-coins-table"
        headerCellClassName="py-3!"
        bodyCellClassName="py-2!"
      />
    </div>
  );
};
