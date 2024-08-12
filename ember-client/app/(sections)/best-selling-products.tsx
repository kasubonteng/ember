"use client";

import CustomLink from "@/components/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, PlusIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
}

const mockProducts2: {
  chair: Product[];
  bed: Product[];
  sofa: Product[];
  lamp: Product[];
} = {
  chair: [
    {
      id: "1",
      name: "Sakarias Armchair",
      price: 200,
      image: "/chair1.png",
      category: "chair",
      rating: 4,
    },
    {
      id: "2",
      name: "Sakarias Armchair",
      price: 200,
      image: "/chair1.png",
      category: "chair",
      rating: 4,
    },
    {
      id: "3",
      name: "Sakarias Armchair",
      price: 200,
      image: "/chair1.png",
      category: "chair",
      rating: 4,
    },
    {
      id: "4",
      name: "Sakarias Armchair",
      price: 200,
      image: "/chair1.png",
      category: "chair",
      rating: 4,
    },
  ],
  bed: [
    {
      id: "1",
      name: "Bed",
      price: 500,
      image: "/chair2.png",
      category: "bed",
      rating: 5,
    },
    {
      id: "2",
      name: "Bed",
      price: 500,
      image: "/chair2.png",
      category: "bed",
      rating: 5,
    },
    {
      id: "3",
      name: "Bed",
      price: 500,
      image: "/chair2.png",
      category: "bed",
      rating: 5,
    },
    {
      id: "4",
      name: "Bed",
      price: 500,
      image: "/chair2.png",
      category: "bed",
      rating: 5,
    },
  ],
  sofa: [
    {
      id: "1",
      name: "Sofa",
      price: 300,
      image: "/chair3.png",
      category: "sofa",
      rating: 4,
    },
    {
      id: "2",
      name: "Sofa",
      price: 300,
      image: "/chair3.png",
      category: "sofa",
      rating: 4,
    },
    {
      id: "3",
      name: "Sofa",
      price: 300,
      image: "/chair3.png",
      category: "sofa",
      rating: 4,
    },
    {
      id: "4",
      name: "Sofa",
      price: 300,
      image: "/chair3.png",
      category: "sofa",
      rating: 4,
    },
  ],
  lamp: [
    {
      id: "1",
      name: "Lamp",
      price: 100,
      image: "/chair4.png",
      category: "lamp",
      rating: 3,
    },
    {
      id: "2",
      name: "Lamp",
      price: 100,
      image: "/chair4.png",
      category: "lamp",
      rating: 3,
    },
    {
      id: "3",
      name: "Lamp",
      price: 100,
      image: "/chair4.png",
      category: "lamp",
      rating: 3,
    },
    {
      id: "4",
      name: "Lamp",
      price: 100,
      image: "/chair4.png",
      category: "lamp",
      rating: 3,
    },
  ],
};

const ProductCard = ({
  product: { name, price, image, rating, category },
}: {
  product: Product;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="group mx-auto w-full max-w-[270px] rounded-xl shadow-lg hover:cursor-pointer"
    >
      <div className="flex w-full items-center justify-center overflow-hidden">
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
          <Image
            src={image}
            alt={name}
            width={240}
            height={280}
            className="h-[300px] w-full object-cover"
          />
        </motion.div>
      </div>
      <motion.div
        whileHover={{ backgroundColor: "#f0f0f0" }}
        className="flex flex-col gap-4 rounded-b-xl bg-white px-4 py-3 transition-colors group-hover:text-primary sm:gap-8 sm:px-6 sm:py-4"
      >
        <div className="flex flex-col">
          <p className="text-xs capitalize text-gray-400 group-hover:text-primary sm:text-sm">
            {category}
          </p>
          <p className="text-lg font-bold sm:text-xl">{name}</p>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon
                  key={star}
                  fill={star <= rating ? "#FFD700" : "none"}
                  className={cn(
                    "h-3 w-3 sm:h-4 sm:w-4",
                    star <= rating ? "text-[#FFD700]" : "text-gray-400",
                  )}
                />
              ))}
            </div>
            <p className="text-xs text-gray-400 sm:text-sm">({rating})</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-bold sm:text-base">Ghc{price}</p>
          <Button
            size={"icon"}
            className="h-8 w-8 rounded-full bg-black transition-transform duration-150 hover:rotate-[90deg] sm:h-10 sm:w-10"
          >
            <PlusIcon className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const BestSellingProducts = () => {
  const [activeTab, setActiveTab] = useState<number>(tabs[0].value);

  const getProductsForActiveTab = () => {
    switch (activeTab) {
      case 0:
        return mockProducts2.chair;
      case 1:
        return mockProducts2.bed;
      case 2:
        return mockProducts2.sofa;
      case 3:
        return mockProducts2.lamp;
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
            {getProductsForActiveTab().map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <CustomLink href="/products">View All Products</CustomLink>
      </motion.div>
    </motion.section>
  );
};

export default BestSellingProducts;

const tabs = [
  {
    name: "Chair",
    value: 0,
  },
  {
    name: "Beds",
    value: 1,
  },
  {
    name: "Sofa",
    value: 2,
  },
  {
    name: "Lamp",
    value: 3,
  },
];

const TabSwitcher = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="flex flex-wrap justify-center space-x-2 rounded-full bg-gray-200 p-2 sm:space-x-4"
    >
      {tabs.map((tab, index) => {
        return (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              className={cn(
                "rounded-full bg-transparent px-3 py-1 text-sm font-medium text-black hover:text-white sm:px-4 sm:py-2 sm:text-lg",
                tab.value === activeTab
                  ? "bg-white"
                  : "bg-transparent text-black",
              )}
              onClick={() => setActiveTab(tab.value)}
            >
              {tab.name}
            </Button>
          </motion.div>
        );
      })}
    </motion.div>
  );
};
