import { Activity, CreditCard, DollarSign, Users } from "lucide-react";
import DashboardCard from "./_components/dashboard-card";
import TransactionsTable from "./_components/transactions";
import RecentSales from "./_components/recent-sales";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <DashboardCard
            title="Total Revenue"
            value="GHS 45,231.89"
            description="+20.1% from last month"
            icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
          />
          <DashboardCard
            title="Projects"
            value="+2350"
            description="+180.1% from last month"
            icon={<Users className="h-4 w-4 text-muted-foreground" />}
          />
          <DashboardCard
            title="Sales"
            value="+12,234"
            description="+19% from last month"
            icon={<CreditCard className="h-4 w-4 text-muted-foreground" />}
          />
          <DashboardCard
            title="Active Now"
            value="+573"
            description="+201 since last hour"
            icon={<Activity className="h-4 w-4 text-muted-foreground" />}
          />
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <TransactionsTable />
          <RecentSales />
        </div>
      </main>
    </div>
  );
}
