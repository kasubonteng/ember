"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CustomLink from "@/components/link";
import Image from "next/image";
import { Label } from "@radix-ui/react-label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Product } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { getSingleProduct } from "@/data/get-single-product";
import { formatCurrency } from "@/lib/utils";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

interface APIResponse extends Product {
  // Description of the product.
  description: string;
  imageUrls: {
    imageUrl: string;
    id: string;
    altText: string;
  }[];
}

const ProductPage: React.FC<ProductPageProps> = ({ params: { productId } }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState("1");

  const {
    data: product,
    isPending,
    isError,
  } = useQuery<APIResponse, Error>({
    queryKey: ["product", productId],
    queryFn: async () => getSingleProduct(Number(productId)),
  });

  const handleAddToCart = () => {
    // Implement add to cart logic here
    toast.success(`${quantity} ${product?.name} added to cart`);
  };

  if (isPending) {
    return (
      <div className="flex h-full min-h-[70vh] w-full items-center justify-center">
        Loading...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex h-full min-h-[70vh] w-full items-center justify-center">
        Error fetching product. Please refresh page!
      </div>
    );
  }

  return (
    <section className="flex min-h-screen flex-col items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-screen-xl">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <CustomLink variant="back" href="/shop/products">
            Back to All Products
          </CustomLink>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={product?.imageUrls?.[selectedImage]?.imageUrl}
                  alt={product.imageUrls[selectedImage].altText}
                  width={700}
                  height={500}
                  priority
                  className="h-[500px] w-full rounded-xl object-cover shadow-lg"
                />
              </motion.div>
            </AnimatePresence>

            <div className="flex gap-4 overflow-x-auto p-2">
              {product.imageUrls.map((images, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={images?.imageUrl}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    width={100}
                    height={100}
                    className={`size-[100px] cursor-pointer rounded-xl object-cover shadow-md transition-all ${
                      selectedImage === index ? "ring-2 ring-primary" : ""
                    }`}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h1 className="text-4xl font-bold">{product.name}</h1>
            <p className="text-xl font-medium text-primary">
              {formatCurrency(product.price)}
            </p>
            <p className="text-lg">{product.description}</p>

            <div className="flex flex-col gap-2">
              <Label htmlFor="quantity" className="text-lg">
                Quantity
              </Label>
              <Select value={quantity} onValueChange={setQuantity}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select quantity" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button className="mt-4 w-full" onClick={handleAddToCart} size="lg">
              Add to Cart
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
