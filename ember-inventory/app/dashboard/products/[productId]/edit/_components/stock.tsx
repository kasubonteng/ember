"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useFormContext } from "react-hook-form";

const Stock = () => {
  const { control } = useFormContext();
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Stock</CardTitle>
          <CardDescription>Manage product inventory and price</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Stock</TableHead>
                <TableHead>Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <FormField
                    control={control}
                    name="stock"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel
                          htmlFor={`stock-${field}`}
                          className="sr-only"
                        >
                          Stock
                        </FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </TableCell>
                <TableCell>
                  <FormField
                    control={control}
                    name="price"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel
                          htmlFor={`price-${field}`}
                          className="sr-only"
                        >
                          Price
                        </FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
};

export default Stock;
