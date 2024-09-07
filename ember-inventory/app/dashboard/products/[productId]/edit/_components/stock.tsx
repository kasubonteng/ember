"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
import { PlusCircle } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Product } from "../page";

const Stock = ({
  product,
  setProduct,
}: {
  product: Product;
  setProduct: Dispatch<SetStateAction<Product>>;
}) => {
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
                  <Label htmlFor={`stock-${product.id}`} className="sr-only">
                    Stock
                  </Label>
                  <Input
                    id={`stock-${product.id}`}
                    type="number"
                    value={product.stock}
                    onChange={(e) =>
                      setProduct({
                        ...product,
                        stock: parseInt(e.target.value),
                      })
                    }
                  />
                </TableCell>
                <TableCell>
                  <Label htmlFor={`price-${product.id}`} className="sr-only">
                    Price
                  </Label>
                  <Input
                    id={`price-${product.id}`}
                    type="number"
                    value={product.price}
                    onChange={(e) =>
                      setProduct({
                        ...product,
                        price: parseInt(e.target.value),
                      })
                    }
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
