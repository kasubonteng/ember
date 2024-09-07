"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Table } from "@tanstack/react-table";
import { File, ListFilter, PlusCircle, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface FiltersProps {
  table: Table<any>;
}

const Filters = ({ table }: FiltersProps) => {
  const router = useRouter();
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const handleFilterChange = (value: string) => {
    setSelectedFilter((prev) => (prev === value ? null : value));
  };

  useEffect(() => {
    if (selectedFilter) {
      table.getColumn("status")?.setFilterValue(selectedFilter);
    } else {
      table.getColumn("status")?.setFilterValue(undefined);
    }
  }, [selectedFilter, table]);

  return (
    <div className="flex items-center">
      <div className="flex items-center">
        <div className="relative ml-auto flex-1 md:grow-0">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search products..."
            className="h-9 w-full rounded-md bg-background px-3 pl-8 md:w-[200px] lg:w-[336px]"
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("name")?.setFilterValue(event.target.value)
            }
          />
        </div>
      </div>
      <div className="ml-auto flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="h-8 gap-1">
              <ListFilter className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Filter
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {["active", "draft", "archived"].map((status) => (
              <DropdownMenuCheckboxItem
                key={status}
                checked={selectedFilter === status}
                onCheckedChange={() => handleFilterChange(status)}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <Button size="sm" variant="outline" className="h-8 gap-1">
          <File className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Export
          </span>
        </Button>
        <Button
          size="sm"
          className="h-8 gap-1"
          onClick={() => router.push("/dashboard/products/new")}
        >
          <PlusCircle className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Add Product
          </span>
        </Button>
      </div>
    </div>
  );
};

export default Filters;
