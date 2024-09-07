"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { Dispatch, SetStateAction } from "react";
import { Product } from "../page";

export default function ProductDetails({
  product,
  setProduct,
}: {
  product: Product;
  setProduct: Dispatch<SetStateAction<Product>>;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Product Details</CardTitle>
        <CardDescription>
          Edit the product&apos;s basic information
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div className="grid gap-3">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              className="w-full"
              value={product.name}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={product.description}
              onChange={(e) =>
                setProduct({ ...product, description: e.target.value })
              }
              className="min-h-32"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
