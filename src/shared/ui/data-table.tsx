import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table";
import type { DataTableProps } from "@/shared/types/data-table";
import { cn } from "@/shared/lib/utils";

export const DataTable = <T,>({
  columns,
  data,
  rowKey,
  containerClassName,
  tableClassName,
  headerClassName,
  headerRowClassName,
  headerCellClassName,
  bodyRowClassName,
  bodyCellClassName,
}: DataTableProps<T>) => {
  return (
    <Table
      containerClassName={cn("custom-scrollbar", containerClassName)}
      className={tableClassName}
    >
      <TableHeader className={headerClassName}>
        <TableRow
          className={cn(
            "hover:bg-purple-100/5! bg-purple-100/5",
            headerRowClassName,
          )}
        >
          {columns.map((column, i) => (
            <TableHead
              key={i}
              className={cn(
                "sticky top-0 z-30 bg-dark-400 py-4 text-purple-100 first:pl-5 last:pr-5",
                headerCellClassName,
                column.headClassName,
              )}
            >
              {column.header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody className={bodyCellClassName}>
        {data.map((row, rowIndex) => (
          <TableRow
            key={rowKey(row, rowIndex)}
            className={cn(
              "overflow-hidden rounded-lg border-b border-purple-100/5 hover:bg-dark-400/30! relative",
              bodyRowClassName,
            )}
          >
            {columns.map((column, columnIndex) => (
              <TableCell
                key={columnIndex}
                className={cn(
                  "py-4 first:pl-5 last:pr-5",
                  bodyCellClassName,
                  column.cellClassName,
                )}
              >
                {column.cell(row, rowIndex)}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
