import React from "react"

export { }
global {
    // DATA TABLE 
    interface ColumnsDataTable<T> {
        header: React.ReactNode
        cell: (row: T, index: number) => React.ReactNode
        headClassName?: string
        cellClassName?: string
    }
    interface DataTableProps<T> {
        columns: ColumnsDataTable<T>[],
        data: T[],
        rowKey: (row: T, i) => React.Key,
        tableClassName?: string,
        headerClassName?: string
        headerRowClassName?: string,
        headerCellClassName?: string,
        bodyRowClassName?: string,
        bodyCellClassName?: string

    }
}