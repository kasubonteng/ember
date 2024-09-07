"use client";

import { ColumnDef } from "@tanstack/react-table";
import CellActions from "./cell-actions";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
export type Product = {
  id: string;
  image: string;
  name: string;
  price: number;
  stock: number;
  status: "active" | "draft" | "archived";
  totalOrders: number;
  // createdAt: string;
};

export const columns: ColumnDef<Product>[] = [
  {
    header: "",
    accessorKey: "image",
    cell: ({ row }) => {
      return (
        <div className="hidden sm:table-cell">
          <Image
            src={row.getValue("image")}
            alt={row.getValue("name")}
            className="aspect-square rounded-md object-cover"
            height="64"
            width="64"
          />
        </div>
      );
    },
  },
  {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="h-4 w-4" />
        </Button>
      );
    },
    accessorKey: "name",
    cell: ({ row }) => {
      return (
        <div>
          <p className="font-medium">{row.getValue("name")}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "totalOrders",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Total Orders
          <ArrowUpDown className="h-4 w-4" />
        </Button>
      );
    },
  },
  {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Stock
          <ArrowUpDown className="h-4 w-4" />
        </Button>
      );
    },
    accessorKey: "stock",
  },
  {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
          <ArrowUpDown className="h-4 w-4" />
        </Button>
      );
    },
    accessorKey: "price",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price"));
      const formattedAmount = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "Ghs",
      }).format(amount);

      return (
        <div>
          <p className="hidden sm:table-cell">{formattedAmount}</p>
        </div>
      );
    },
  },

  {
    header: "Status",
    accessorKey: "status",
    cell: ({ row }) => {
      return (
        <div>
          <Badge variant="outline" className="capitalize">
            {row.getValue("status")}
          </Badge>
        </div>
      );
    },
  },

  // {
  // 	Header: "Created At",
  // 	accessor: "createdAt",
  // },

  {
    id: "actions",
    cell: ({ row }) => {
      return <CellActions row={row} />;
    },
  },
];
