"use client";

import CustomLink from "@/components/link";
import ProductCardLarge from "@/components/product-card-large";
import TabSwitcher, { tabs } from "@/components/tab-switcher";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: "featured" | "living-room" | "bedroom" | "dining-room" | "office";
  rating: number;
}

const mockProducts2: {
  featured: Product[];
  "living-room": Product[];
  bedroom: Product[];
  "dining-room": Product[];
  office: Product[];
} = {
  featured: [
    {
      id: 1,
      name: "Sakarias Armchair",
      price: 200,
      imageUrl: "/innovation/innovation-1.webp",
      category: "featured",
      rating: 4,
    },
    {
      id: 2,
      name: "Sakarias Armchair",
      price: 200,
      imageUrl: "/innovation/innovation-1.webp",
      category: "featured",
      rating: 4,
    },
    {
      id: 3,
      name: "Sakarias Armchair",
      price: 200,
      imageUrl: "/innovation/innovation-1.webp",
      category: "featured",
      rating: 4,
    },
    {
      id: 4,
      name: "Sakarias Armchair",
      price: 200,
      imageUrl: "/innovation/innovation-1.webp",
      category: "featured",
      rating: 4,
    },
  ],
  "living-room": [
    {
      id: 5,
      name: "Bed",
      price: 500,
      imageUrl: "/innovation/innovation-1.webp",
      category: "living-room",
      rating: 5,
    },
    {
      id: 6,
      name: "Bed",
      price: 500,
      imageUrl: "/innovation/innovation-1.webp",
      category: "living-room",
      rating: 5,
    },
    {
      id: 7,
      name: "Bed",
      price: 500,
      imageUrl: "/innovation/innovation-1.webp",
      category: "living-room",
      rating: 5,
    },
    {
      id: 8,
      name: "Bed",
      price: 500,
      imageUrl: "/innovation/innovation-1.webp",
      category: "living-room",
      rating: 5,
    },
  ],
  "dining-room": [
    {
      id: 9,
      name: "Sofa",
      price: 300,
      imageUrl: "/innovation/innovation-1.webp",
      category: "dining-room",
      rating: 4,
    },
    {
      id: 10,
      name: "Sofa",
      price: 300,
      imageUrl: "/innovation/innovation-1.webp",
      category: "dining-room",
      rating: 4,
    },
    {
      id: 11,
      name: "Sofa",
      price: 300,
      imageUrl: "/innovation/innovation-1.webp",
      category: "dining-room",
      rating: 4,
    },
    {
      id: 12,
      name: "Sofa",
      price: 300,
      imageUrl: "/innovation/innovation-1.webp",
      category: "dining-room",
      rating: 4,
    },
  ],
  bedroom: [
    {
      id: 13,
      name: "Lamp",
      price: 100,
      imageUrl: "/innovation/innovation-1.webp",
      category: "bedroom",
      rating: 3,
    },
    {
      id: 14,
      name: "Lamp",
      price: 100,
      imageUrl: "/innovation/innovation-1.webp",
      category: "bedroom",
      rating: 3,
    },
    {
      id: 15,
      name: "Lamp",
      price: 100,
      imageUrl: "/innovation/innovation-1.webp",
      category: "bedroom",
      rating: 3,
    },
    {
      id: 16,
      name: "Lamp",
      price: 100,
      imageUrl: "/innovation/innovation-1.webp",
      category: "bedroom",
      rating: 3,
    },
  ],
  office: [
    {
      id: 13,
      name: "Lamp",
      price: 100,
      imageUrl: "/innovation/innovation-1.webp",
      category: "office",
      rating: 3,
    },
    {
      id: 14,
      name: "Lamp",
      price: 100,
      imageUrl: "/innovation/innovation-1.webp",
      category: "office",
      rating: 3,
    },
    {
      id: 15,
      name: "Lamp",
      price: 100,
      imageUrl: "/innovation/innovation-1.webp",
      category: "office",
      rating: 3,
    },
    {
      id: 16,
      name: "Lamp",
      price: 100,
      imageUrl: "/innovation/innovation-1.webp",
      category: "office",
      rating: 3,
    },
  ],
};

const BestSellingProducts = () => {
  const [activeTab, setActiveTab] = useState<number>(tabs[0].value);

  const getProductsForActiveTab = () => {
    switch (activeTab) {
      case 0:
        return mockProducts2.featured;
      case 1:
        return mockProducts2.bedroom;
      case 2:
        return mockProducts2["living-room"];
      case 3:
        return mockProducts2["dining-room"];
      case 4:
        return mockProducts2.office;
      default:
        return [];
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center gap-6 px-4 py-12 sm:gap-10 sm:px-6 sm:py-24"
    >
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center text-3xl font-bold sm:text-5xl"
      >
        Best Selling Product
      </motion.h3>
      <TabSwitcher activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="relative w-full max-w-[1200px]">
        <Button
          size="icon"
          className="absolute -left-2 top-1/2 z-10 hidden -translate-y-1/2 transform items-center justify-center rounded-full bg-white text-black shadow-lg hover:bg-gray-100 hover:text-black sm:-left-6 lg:flex"
          onClick={() =>
            setActiveTab(activeTab === 0 ? tabs.length - 1 : activeTab - 1)
          }
        >
          <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
        </Button>
        <Button
          size="icon"
          className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 transform items-center justify-center rounded-full bg-white text-black shadow-lg hover:bg-gray-100 hover:text-black sm:-right-6 lg:flex"
          onClick={() =>
            setActiveTab(activeTab === tabs.length - 1 ? 0 : activeTab + 1)
          }
        >
          <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </Button>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="mx-auto grid w-full grid-cols-1 content-center items-center gap-6 justify-self-center sm:grid-cols-2 sm:gap-10 lg:grid-cols-4"
          >
            {getProductsForActiveTab().map((product, index) => (
              // <ProductCard key={product.id} product={product} />
              <div className="mx-auto" key={product.id}>
                <ProductCardLarge index={index} product={product} />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <CustomLink href="/shop">View All Products</CustomLink>
      </motion.div>
    </motion.section>
  );
};

export default BestSellingProducts;
