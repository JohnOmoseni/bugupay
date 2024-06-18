"use client";

import {
  flexRender,
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  SortingState,
  ColumnFiltersState,
} from "@tanstack/react-table";
import { useState } from "react";
import { TableProps } from "@/types";

function BasicTable<TData, TValue>({
  columns,
  data,
}: TableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0, //initial page index
    pageSize: 10, //default page size
  });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onPaginationChange: setPagination, //update the pagination state when internal APIs mutate the pagination state
    state: {
      sorting,
      columnFilters,
      pagination,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
  });

  return (
    <div className="relative rounded-lg py-4 sm:p-3">
      <div className="grid place-items-center overflow-hidden overflow-x-auto rounded-2xl">
        <table className="border-border w-full max-w-full border-spacing-0 border border-solid max-sm:text-base lg:overflow-hidden">
          <thead className="border-border rouned-full overflow-hidden border-b-2 bg-orange-600 shadow-md">
            {table.getHeaderGroups().map((headerGroup) => {
              return (
                <tr key={headerGroup.id} className="">
                  {headerGroup.headers.map((header) => {
                    return (
                      <th
                        key={header.id}
                        onClick={header.column.getToggleSortingHandler()}
                        className="whitespace-nowrap px-8 py-5 leading-4 sm:py-4"
                      >
                        {header.isPlaceholder ? null : (
                          <div className="row-flex !justify-start gap-2 font-medium text-background">
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                          </div>
                        )}
                      </th>
                    );
                  })}
                </tr>
              );
            })}
          </thead>
          <tbody className="">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => {
                return (
                  <tr
                    key={row.id}
                    className="border-border border-b transition-colors last:border-none even:bg-orange-50"
                  >
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <td key={cell.id} className="px-8 py-3">
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })
            ) : (
              <tr className="border-border grid w-full place-items-center border-b-2 transition-colors last:border-none even:bg-orange-50">
                <td className="px-6 py-8 text-center">No results</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="row-flex mx-auto my-6 gap-2 text-base">
        <button onClick={() => table.setPageIndex(0)}>First page</button>
        <button
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
        >
          Previous page
        </button>
        {/* <button
					disabled={!table.getCanPreviousPage()}
					onClick={() => table.setPageIndex(pagination.pageIndex + 2)}
				>
					Move two pages
				</button> */}
        <button
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
        >
          Next page
        </button>
        <button onClick={() => table.setPageIndex(table.getPageCount() - 1)}>
          Last page
        </button>
      </div>
    </div>
  );
}

export default BasicTable;
