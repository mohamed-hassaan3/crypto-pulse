import type { ReactNode, Key } from "react"

export interface ColumnsDataTable<T> {
  header: ReactNode
  cell: (row: T, index: number) => ReactNode
  headClassName?: string
  cellClassName?: string
}

export interface DataTableProps<T> {
  columns: ColumnsDataTable<T>[]
  data: T[]
  rowKey: (row: T, i: number) => Key
  tableClassName?: string
  headerClassName?: string
  headerRowClassName?: string
  headerCellClassName?: string
  bodyRowClassName?: string
  bodyCellClassName?: string
}
