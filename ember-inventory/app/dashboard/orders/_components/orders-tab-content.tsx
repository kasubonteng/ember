import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TabsContent } from "@/components/ui/tabs";

interface Order {
  customer: string;
  type: string;
  status: string;
  date: string;
  amount: number;
}

interface OrdersTableProps {
  orders: Order[];
}

const OrdersTable = ({ orders }: OrdersTableProps) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Customer</TableHead>
        <TableHead className="hidden sm:table-cell">Type</TableHead>
        <TableHead className="hidden sm:table-cell">Status</TableHead>
        <TableHead className="hidden md:table-cell">Date</TableHead>
        <TableHead className="text-right">Amount</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>{orders[0].customer}</TableCell>
        <TableCell className="hidden sm:table-cell">{orders[0].type}</TableCell>
        <TableCell className="hidden sm:table-cell">
          <Badge variant={"outline"}>{orders[0].status}</Badge>
        </TableCell>
        <TableCell className="hidden md:table-cell">{orders[0].date}</TableCell>
        <TableCell className="text-right">{orders[0].amount}</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

const OrdersTabContent = () => {
  const orders = [
    {
      customer: "John Doe",
      type: "Order",
      status: "Order",
      date: "2024-01-01",
      amount: 100.0,
    },
  ];
  return (
    <>
      <TabsContent value="week">
        <Card x-chunk="A table of recent orders showing the following columns: Customer, Type, Status, Date, and Amount.">
          <CardHeader className="px-7">
            <CardTitle>Orders</CardTitle>
            <CardDescription>Recent orders from your store.</CardDescription>
          </CardHeader>
          <CardContent>
            <OrdersTable orders={orders} />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="month">
        <Card x-chunk="A table of recent orders showing the following columns: Customer, Type, Status, Date, and Amount.">
          <CardHeader className="px-7">
            <CardTitle>Orders</CardTitle>
            <CardDescription>Recent orders from your store.</CardDescription>
          </CardHeader>
          <CardContent>
            <OrdersTable orders={orders} />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="year">
        <Card x-chunk="A table of recent orders showing the following columns: Customer, Type, Status, Date, and Amount.">
          <CardHeader className="px-7">
            <CardTitle>Orders</CardTitle>
            <CardDescription>Recent orders from your store.</CardDescription>
          </CardHeader>
          <CardContent>
            <OrdersTable orders={orders} />
          </CardContent>
        </Card>
      </TabsContent>
    </>
  );
};

export default OrdersTabContent;
