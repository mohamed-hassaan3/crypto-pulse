import { allCoinsColumns, AllCoinsRow } from "@/entities/coins";
import { DataTable } from "@/shared/ui";

export const AllCoinsTable = ({ coinsData }: { coinsData: AllCoinsRow[] }) => {
  return (
    <div>
      <DataTable
        columns={allCoinsColumns}
        data={coinsData.slice(0, 100) ?? []}
        rowKey={(category) => category.id}
        tableClassName="category-cell"
        headerCellClassName="py-3!"
        bodyCellClassName="py-2!"
      />
    </div>
  );
};
