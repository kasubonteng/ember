import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const salesData = [
  {
    name: "Olivia Martin",
    phoneNumber: "081234567890",
    amount: "1999.00",
  },
  {
    name: "Jackson Lee",
    phoneNumber: "081234567890",
    amount: "39.00",
  },
  {
    name: "Isabella Nguyen",
    phoneNumber: "081234567890",
    amount: "299.00",
  },
  {
    name: "William Kim",
    phoneNumber: "081234567890",
    amount: "99.00",
  },
  {
    name: "Sofia Davis",
    phoneNumber: "081234567890",
    amount: "39.00",
  },
];

const RecentSales = () => {
  return (
    <Card x-chunk="dashboard-01-chunk-5">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <p className="text-lg font-semibold">Recent Sales</p>
          <Button asChild size="sm" className="ml-auto gap-1">
            <Link href="#">
              View All
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-8">
        {salesData.map((sale, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="grid gap-1">
              <p className="text-sm font-medium leading-none">{sale.name}</p>
              <p className="text-sm text-muted-foreground">
                {sale.phoneNumber}
              </p>
            </div>
            <div className="ml-auto font-medium">
              {formatCurrency(Number(sale.amount))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecentSales;
