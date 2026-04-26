import { allCoinsColumns, AllCoinsRow } from "@/entities/coins";
import { DataTable } from "@/shared/ui";

export const AllCoinsTable = ({ coinsData }: { coinsData: AllCoinsRow[] }) => {
  return (
    <div className="overflow-hidden">
      <DataTable
        columns={allCoinsColumns}
        data={coinsData.slice(0, 100) ?? []}
        rowKey={(coin) => coin.id}
        containerClassName="max-h-[75vh]"
        tableClassName="coins-cell w-max min-w-full table-auto"
        headerCellClassName="py-3! px-3"
        bodyCellClassName="py-2! px-3"
      />
    </div>
  );
};
