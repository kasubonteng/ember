import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface StatsCardProps {
  period: string;
  amount: string;
  difference: number;
}

const StatsCard = ({ period, amount, difference }: StatsCardProps) => (
  <Card
    x-chunk={`A stats card showing this ${period}'s total sales in USD, the percentage difference from last ${period}, and a progress bar.`}
  >
    <CardHeader className="pb-2">
      <CardDescription>This {period}</CardDescription>
      <CardTitle className="text-4xl">{amount}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="text-xs text-muted-foreground">
        +{difference}% from last {period}
      </div>
    </CardContent>
    <CardFooter>
      <Progress value={difference} aria-label={`${difference}% increase`} />
    </CardFooter>
  </Card>
);

export default StatsCard;
