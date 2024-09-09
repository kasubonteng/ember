import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { formatCurrency } from "@/lib/utils";
import { File } from "lucide-react";
import FilterDropdown from "./_components/filters";
import OrdersCard from "./_components/orders-card";
import OrdersTabContent from "./_components/orders-tab-content";
import StatsCard from "./_components/stats-card";

export default function OrdersPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-2 xl:grid-cols-2">
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              <OrdersCard />
              <StatsCard
                period="Week"
                amount={formatCurrency(1329)}
                difference={25}
              />
              <StatsCard
                period="Month"
                amount={formatCurrency(5329)}
                difference={10}
              />
            </div>
            <Tabs defaultValue="week">
              <div className="flex items-center">
                <TabsList>
                  <TabsTrigger value="week">Week</TabsTrigger>
                  <TabsTrigger value="month">Month</TabsTrigger>
                  <TabsTrigger value="year">Year</TabsTrigger>
                </TabsList>
                <div className="ml-auto flex items-center gap-2">
                  <FilterDropdown />
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-7 gap-1 text-sm"
                  >
                    <File className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only">Export</span>
                  </Button>
                </div>
              </div>
              <OrdersTabContent />
            </Tabs>
          </div>
          <div></div>
        </main>
      </div>
    </div>
  );
}
