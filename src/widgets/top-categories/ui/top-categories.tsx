import { categoriesColumns, getTopCategories } from "@/entities/coins";
import { DataTable } from "@/shared/ui";

export const TopCategories = async () => {
  const result = await getTopCategories();
  return (
    <div>
      <h4 className="heading-title">Top Categories</h4>
      <DataTable
        columns={categoriesColumns}
        data={result.slice(0, 100) ?? []}
        rowKey={(category) => category.id}
        containerClassName="max-h-[75vh]"
        tableClassName="category-cell"
        headerCellClassName="py-3!"
        bodyCellClassName="py-2!"
      />
    </div>
  );
};
