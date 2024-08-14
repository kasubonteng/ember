"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import CustomLink from "@/components/link";
import ProductCardSmall from "@/components/product-card-small";

interface Product {
  title: string;
  image: string;
  price: number;
  category: string;
}

interface CategoryProps {
  title: string;
  description: string;
  products: Product[];
}

const categories: CategoryProps[] = [
  {
    title: "Featured Pieces",
    description:
      "Browse our handpicked selection of bestsellers, showcasing the very best of Ember's design philosophy.",
    products: [
      {
        title: "Sofa",
        image: "/shop/featured/sofa.jpg",
        price: 799,
        category: "featured",
      },
      {
        title: "Armchair",
        image: "/shop/featured/armchair.jpg",
        price: 399,
        category: "featured",
      },
      {
        title: "Coffee Table",
        image: "/shop/featured/coffee-table.jpg",
        price: 199,
        category: "featured",
      },
      {
        title: "Dining Table",
        image: "/shop/featured/dining-table.jpg",
        price: 599,
        category: "featured",
      },
      {
        title: "Bookshelf",
        image: "/shop/featured/bookshelf.jpg",
        price: 349,
        category: "featured",
      },
      {
        title: "Floor Lamp",
        image: "/shop/featured/floor-lamp.jpg",
        price: 129,
        category: "featured",
      },
    ],
  },
  {
    title: "Living Room",
    description:
      "Transform your living space with our curated collection of comfortable and stylish furniture.",
    products: [
      {
        title: "Sectional Sofa",
        image: "/shop/living-room/sectional-sofa.jpg",
        price: 1299,
        category: "living-room",
      },
      {
        title: "TV Stand",
        image: "/shop/living-room/tv-stand.jpg",
        price: 249,
        category: "living-room",
      },
      {
        title: "Side Table",
        image: "/shop/living-room/side-table.jpg",
        price: 99,
        category: "living-room",
      },
      {
        title: "Ottoman",
        image: "/shop/living-room/ottoman.jpg",
        price: 149,
        category: "living-room",
      },
      {
        title: "Wall Art",
        image: "/shop/living-room/wall-art.jpg",
        price: 79,
        category: "living-room",
      },
      {
        title: "Area Rug",
        image: "/shop/living-room/area-rug.jpg",
        price: 199,
        category: "living-room",
      },
    ],
  },
  {
    title: "Bedroom",
    description:
      "Create your perfect sanctuary with our range of comfortable and elegant bedroom furniture.",
    products: [
      {
        title: "Bed Frame",
        image: "/shop/bedroom/bed-frame.jpg",
        price: 599,
        category: "bedroom",
      },
      {
        title: "Nightstand",
        image: "/shop/bedroom/nightstand.jpg",
        price: 129,
        category: "bedroom",
      },
      {
        title: "Dresser",
        image: "/shop/bedroom/dresser.jpg",
        price: 449,
        category: "bedroom",
      },
      {
        title: "Wardrobe",
        image: "/shop/bedroom/wardrobe.jpg",
        price: 699,
        category: "bedroom",
      },
      {
        title: "Vanity",
        image: "/shop/bedroom/vanity.jpg",
        price: 299,
        category: "bedroom",
      },
      {
        title: "Bedside Lamp",
        image: "/shop/bedroom/bedside-lamp.jpg",
        price: 59,
        category: "bedroom",
      },
    ],
  },
];

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
          href={`/shop/products?category=${title.toLowerCase().replace(" ", "-")}`}
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
