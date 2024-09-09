import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const OrdersCard = () => (
  <Card
    className="sm:col-span-2"
    x-chunk="A card for an orders dashboard with a description and a button to create a new order."
  >
    <CardHeader className="pb-3">
      <CardTitle>Your Orders</CardTitle>
      <CardDescription className="max-w-lg text-balance leading-relaxed">
        Introducing Our Dynamic Orders Dashboard for Seamless Management and
        Insightful Analysis.
      </CardDescription>
    </CardHeader>
    <CardFooter>
      <Button>Create New Order</Button>
    </CardFooter>
  </Card>
);

export default OrdersCard;
