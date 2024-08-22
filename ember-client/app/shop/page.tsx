"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import CustomLink from "@/components/link";
import ProductCardSmall from "@/components/product-card-small";
import { useQuery } from "@tanstack/react-query";
import { getShopProducts } from "@/data/get-shop-products";

interface CategoryProps {
  title: string;
  description: string;
  products: Product[];
}

const Category = ({ title, description, products }: CategoryProps) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
      className="mb-16 flex flex-col gap-5"
    >
      <motion.div className="flex flex-col gap-2">
        <Link
          href={`/shop/products?category=${title.toLowerCase().replace(" ", "+")}`}
          className="flex w-fit items-center gap-2 text-3xl font-bold duration-300 hover:text-primary"
        >
          <span className="group flex items-center gap-2">
            <span>{title}</span>
            <span className="transition-transform group-hover:translate-x-1">
              <ChevronRight />
            </span>
          </span>
        </Link>
        <p className="text-gray-600">{description}</p>
      </motion.div>

      <div className="scrollbar-hide flex space-x-6 overflow-x-auto py-4">
        {products.map((product, index) => (
          <ProductCardSmall
            key={`${product.title}-${index}`}
            product={product}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
};

const ShopPage = () => {
    const {
      data: categories,
      isPending,
      isError,
    } = useQuery({
      queryKey: ["products"],
      queryFn: async () => await getShopProducts(),
    });
  return (
    <section className="flex flex-col items-center justify-center px-4 pt-36 lg:px-8 lg:pt-44">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16 space-y-4 text-center"
      >
        <h2 className="text-4xl font-bold lg:text-5xl">Shop Ember</h2>
        <p className="max-w-[606px] text-base text-gray-600 lg:text-lg">
          Find the perfect piece to complete your home. Shop our full collection
          of modern furniture, from statement pieces to essential staples, all
          available at your fingertips.
        </p>
        <div>
          <CustomLink href="/shop/products">View All Products</CustomLink>
        </div>
      </motion.div>

      <div className="w-full max-w-7xl">
        {categories.map((category) => (
          <Category key={category.title} {...category} />
        ))}
      </div>

      <div>
        <CustomLink href="/shop/products">View All Products</CustomLink>
      </div>
    </section>
  );
};

export default ShopPage;
