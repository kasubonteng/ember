import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { formatCurrency } from "@/lib/utils";

const TransactionsTable = () => (
  <Card className="xl:col-span-2">
    <CardHeader className="flex flex-row items-center">
      <div className="grid gap-2">
        <CardTitle>Transactions</CardTitle>
        <CardDescription>Recent transactions from your store.</CardDescription>
      </div>
      <Button asChild size="sm" className="ml-auto gap-1">
        <Link href="#">
          View All
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </Button>
    </CardHeader>
    <CardContent>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Customer</TableHead>
            <TableHead className="hidden xl:table-column">Type</TableHead>
            <TableHead className="hidden xl:table-column">Status</TableHead>
            <TableHead className="hidden xl:table-column">Date</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[
            {
              name: "Liam Johnson",
              email: "liam@example.com",
              type: "Sale",
              status: "Approved",
              date: "2023-06-23",
              amount: 250.0,
            },
            {
              name: "Olivia Smith",
              email: "olivia@example.com",
              type: "Refund",
              status: "Declined",
              date: "2023-06-24",
              amount: 150.0,
            },
            {
              name: "Noah Williams",
              email: "noah@example.com",
              type: "Subscription",
              status: "Approved",
              date: "2023-06-25",
              amount: 350.0,
            },
            {
              name: "Emma Brown",
              email: "emma@example.com",
              type: "Sale",
              status: "Approved",
              date: "2023-06-26",
              amount: 450.0,
            },
            {
              name: "Liam Johnson",
              email: "liam@example.com",
              type: "Sale",
              status: "Approved",
              date: "2023-06-27",
              amount: 550.0,
            },
          ].map((transaction, index) => (
            <TableRow key={index}>
              <TableCell>
                <div className="font-medium">{transaction.name}</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  {transaction.email}
                </div>
              </TableCell>
              <TableCell className="hidden xl:table-column">
                {transaction.type}
              </TableCell>
              <TableCell className="hidden xl:table-column">
                <Badge className="text-xs" variant="outline">
                  {transaction.status}
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                {transaction.date}
              </TableCell>
              <TableCell className="text-right">
                {formatCurrency(transaction.amount)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardContent>
  </Card>
);

export default TransactionsTable;
