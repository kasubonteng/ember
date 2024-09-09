"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { ListFilter } from "lucide-react";
import { useState } from "react";

type Checked = DropdownMenuCheckboxItemProps["checked"];

const FilterDropdown = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleFilterChange = (filter: string, checked: Checked) => {
    if (checked) {
      setSelectedFilters((prevFilters) => [...prevFilters, filter]);
    } else {
      setSelectedFilters((prevFilters) =>
        prevFilters.filter((f) => f !== filter),
      );
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-7 gap-1 text-sm">
          <ListFilter className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only">Filter</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Filter by</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={selectedFilters.includes("fulfilled")}
          onCheckedChange={(checked) =>
            handleFilterChange("fulfilled", checked)
          }
        >
          Fulfilled
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selectedFilters.includes("declined")}
          onCheckedChange={(checked) => handleFilterChange("declined", checked)}
        >
          Declined
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selectedFilters.includes("refunded")}
          onCheckedChange={(checked) => handleFilterChange("refunded", checked)}
        >
          Refunded
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FilterDropdown;
