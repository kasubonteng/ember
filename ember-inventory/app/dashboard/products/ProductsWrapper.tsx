"use client";

import React, { useState } from "react";
import { DataTable } from "./_components/data-table";
import { columns, Product } from "./_components/columns";
import Filters from "./_components/filters";
import {
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ClientProductsWrapperProps {
  initialData: Product[];
}

export function ClientProductsWrapper({
  initialData,
}: ClientProductsWrapperProps) {
  const [data] = useState(initialData);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      columnFilters,
      sorting,
    },
  });

  return (
    <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <Filters table={table} />
      <Card>
        <CardHeader>
          <CardTitle>Products</CardTitle>
          <CardDescription>
            Manage products and view their details.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={data} table={table} />
        </CardContent>
      </Card>
    </div>
  );
}
