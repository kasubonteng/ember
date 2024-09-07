import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { Dispatch, SetStateAction } from "react";
import { Product } from "../page";

export default function ProductStatus({
  product,
  setProduct,
}: {
  product: Product;
  setProduct: Dispatch<SetStateAction<Product>>;
}) {
  return (
    <Card x-chunk="A card with a form to edit the product status">
      <CardContent className="pt-6">
        <div className="grid gap-6">
          <div className="grid gap-3">
            <Label htmlFor="status">Status</Label>
            <Select
              onValueChange={(value) =>
                setProduct({ ...product, status: value })
              }
              defaultValue={product.status}
            >
              <SelectTrigger id="status" aria-label="Select status">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
