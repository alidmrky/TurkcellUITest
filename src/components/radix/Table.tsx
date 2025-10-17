"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"
import styles from './Table.module.css'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  enableSorting?: boolean
  enablePagination?: boolean
  enableFiltering?: boolean
  enableColumnVisibility?: boolean
  enableSelection?: boolean
  striped?: boolean
  dense?: boolean
  searchPlaceholder?: string
  pageSize?: number
}

export function DataTable<TData, TValue>({
  columns,
  data,
  enableSorting = true,
  enablePagination = true,
  enableFiltering = true,
  enableColumnVisibility = true,
  enableSelection = false,
  striped = false,
  dense = false,
  searchPlaceholder = "Search...",
  pageSize = 10,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    initialState: {
      pagination: {
        pageSize: pageSize,
      },
    },
  })

  return (
    <div className={styles.container}>
      {/* Toolbar */}
      <div className={styles.toolbar}>
        {enableFiltering && (
          <input
            type="text"
            placeholder={searchPlaceholder}
            value={(table.getColumn("accountNumber")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("accountNumber")?.setFilterValue(event.target.value)
            }
            className={styles.searchInput}
          />
        )}
        {enableColumnVisibility && (
          <div className={styles.columnVisibility}>
            <button className={styles.columnButton}>
              Columns <ChevronDown className={styles.chevron} />
            </button>
            <div className={styles.columnDropdown}>
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <label key={column.id} className={styles.columnItem}>
                      <input
                        type="checkbox"
                        checked={column.getIsVisible()}
                        onChange={(e) => column.toggleVisibility(!!e.target.checked)}
                      />
                      <span>{column.id}</span>
                    </label>
                  )
                })}
            </div>
          </div>
        )}
      </div>

      {/* Table */}
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className={styles.headerRow}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th 
                      key={header.id}
                      className={`${styles.th} ${dense ? styles.thDense : ''}`}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  )
                })}
              </tr>
            ))}
          </thead>
          <tbody className={styles.tbody}>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row, index) => (
                <tr
                  key={row.id}
                  className={`
                    ${styles.tr}
                    ${striped && index % 2 === 1 ? styles.trStriped : ''}
                    ${dense ? styles.trDense : ''}
                  `}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td 
                      key={cell.id}
                      className={`${styles.td} ${dense ? styles.tdDense : ''}`}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className={styles.noResults}>
                  No results.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {enablePagination && (
        <div className={styles.pagination}>
          <div className={styles.paginationInfo}>
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </div>
          <div className={styles.paginationControls}>
            <div className={styles.rowsPerPage}>
              <label>Rows per page</label>
              <select
                value={table.getState().pagination.pageSize}
                onChange={(e) => {
                  table.setPageSize(Number(e.target.value))
                }}
                className={styles.pageSizeSelect}
              >
                {[10, 20, 30, 40, 50].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    {pageSize}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.pageInfo}>
              Page {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </div>
            <div className={styles.pageButtons}>
              <button
                className={styles.pageButton}
                onClick={() => table.setPageIndex(0)}
                disabled={!table.getCanPreviousPage()}
              >
                <ChevronLeft className={styles.chevron} />
              </button>
              <button
                className={styles.pageButton}
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                <ChevronLeft className={styles.chevron} />
              </button>
              <button
                className={styles.pageButton}
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                <ChevronRight className={styles.chevron} />
              </button>
              <button
                className={styles.pageButton}
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                disabled={!table.getCanNextPage()}
              >
                <ChevronRight className={styles.chevron} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
