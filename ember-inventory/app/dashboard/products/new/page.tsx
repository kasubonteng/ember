"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ProductDetails from "../[productId]/_components/product-details";
import Stock from "../[productId]/_components/stock";
import ProductCategory from "../[productId]/_components/product-category";
import ProductStatus from "../[productId]/_components/product-status";
import ProductImages from "../[productId]/_components/product-images";

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

export default function NewProductPage() {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      stock: 0,
      price: 0,
      category: "",
      status: "draft",
      images: [],
    },
  });

  function handleSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);

    // router.push("/dashboard/products");
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
              New Product
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
                Create Product
              </Button>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
            <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
              <ProductDetails />
              <Stock />
              <ProductCategory />
            </div>

            <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
              <ProductStatus />
              <ProductImages />
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 md:hidden">
            <Button variant="outline" type="button" size="sm">
              Discard
            </Button>
            <Button type="submit" size="sm">
              Create Product
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
