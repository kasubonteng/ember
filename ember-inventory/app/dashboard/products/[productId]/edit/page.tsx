"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { z } from "zod";
import ProductCategory from "./_components/product-category";
import ProductDetails from "./_components/product-details";
import ProductImages from "./_components/product-images";
import ProductStatus from "./_components/product-status";
import Stock from "./_components/stock";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";

export interface Product {
  id: string;
  name: string;
  description: string;
  stock: number;
  price: number;
  category: string;
  status: string;
  images: {
    id: string;
    src: string;
    alt: string;
  }[];
}

const productDetails: Product = {
  id: "1",
  name: "Gamer Gear Pro Controller",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc.",
  stock: 100,
  price: 49.99,
  category: "electronics",
  status: "active",
  images: [
    {
      id: "1",
      src: "/innovation.webp",
      alt: "Gamer Gear Pro Controller",
    },
    {
      id: "2",
      src: "/innovation.webp",
      alt: "Gamer Gear Pro Controller",
    },
  ],
};

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  stock: z.number().min(0, "Stock cannot be negative"),
  price: z.number().min(0, "Price cannot be negative"),
  category: z.string().min(1, "Category is required"),
  status: z.string().min(1, "Status is required"),
  images: z
    .array(
      z.object({
        id: z.string(),
        src: z.string().url("Invalid image URL"),
        alt: z.string(),
      }),
    )
    .min(1, "At least one image is required"),
});

export default function EditProductPage() {
  const router = useRouter();
  const [product, setProduct] = useState(productDetails);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: product,
  });

  function handleSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8"
      >
        <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
          <div className="flex items-center gap-4">
            <Button type="button" variant="outline" size="icon" asChild>
              <Link className="w-7" href={"/dashboard/products"}>
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
              </Link>
            </Button>
            <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
              {form.watch("name")}
            </h1>
            <Badge variant="outline" className="ml-auto sm:ml-0">
              {form.watch("stock") > 0 ? "In Stock" : "Out of Stock"}
            </Badge>
            <div className="hidden items-center gap-2 md:ml-auto md:flex">
              <Button
                variant="outline"
                size="sm"
                type="button"
                onClick={() => router.push(`/dashboard/products/`)}
              >
                Discard
              </Button>
              <Button type="submit" size="sm">
                Save Product
              </Button>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
            <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
              <ProductDetails product={product} setProduct={setProduct} />
              <Stock product={product} setProduct={setProduct} />
              <ProductCategory product={product} setProduct={setProduct} />
            </div>

            <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
              <ProductStatus product={product} setProduct={setProduct} />
              <ProductImages product={product} setProduct={setProduct} />
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 md:hidden">
            <Button variant="outline" type="button" size="sm">
              Discard
            </Button>
            <Button type="submit" size="sm">
              Save Product
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
