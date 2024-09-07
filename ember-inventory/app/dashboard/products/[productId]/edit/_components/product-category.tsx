"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Product } from "../page";

export default function ProductCategory({
  product,
  setProduct,
}: {
  product: Product;
  setProduct: Dispatch<SetStateAction<Product>>;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Product Category</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="grid gap-3">
            <Label htmlFor="category">Category</Label>
            <Select
              value={product.category}
              onValueChange={(value) =>
                setProduct({ ...product, category: value })
              }
            >
              <SelectTrigger id="category" aria-label="Select category">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent defaultValue={product.category}>
                <SelectItem value="clothing">Clothing</SelectItem>
                <SelectItem value="electronics">Electronics</SelectItem>
                <SelectItem value="accessories">Accessories</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
