"use client";

import CustomLink from "@/components/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, PlusIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

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
    <div className="group w-[270px] rounded-xl shadow-lg hover:cursor-pointer">
      <div className="flex w-full items-center justify-center">
        <Image
          src={image}
          alt={name}
          width={240}
          height={280}
          className="h-[300px] transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col gap-8 rounded-b-xl bg-white px-6 py-4 transition-colors group-hover:text-primary">
        <div className="flex flex-col">
          <p className="text-sm capitalize text-gray-400 group-hover:text-primary">
            {category}
          </p>
          <p className="text-xl font-bold">{name}</p>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon
                  key={star}
                  fill={star <= rating ? "#FFD700" : "none"}
                  className={cn(
                    "h-4 w-4",
                    star <= rating ? "text-[#FFD700]" : "text-gray-400",
                  )}
                />
              ))}
            </div>
            <p className="text-gray-400">({rating})</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-bold">Ghc{price}</p>
          <Button
            size={"icon"}
            className="rounded-full bg-black transition-transform duration-150 hover:rotate-[90deg]"
          >
            <PlusIcon />
          </Button>
        </div>
      </div>
    </div>
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
    <section className="flex flex-col items-center gap-10 py-24">
      <h3 className="text-5xl font-bold">Best Selling Product</h3>
      <TabSwitcher activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="relative max-w-[1200px]">
        <Button
          size="icon"
          className="absolute -left-6 top-1/2 -translate-y-1/2 transform rounded-full bg-white text-black shadow-lg hover:bg-gray-100 hover:text-black"
          onClick={() =>
            setActiveTab(activeTab === 0 ? tabs.length - 1 : activeTab - 1)
          }
        >
          <ArrowLeft />
        </Button>
        <Button
          size="icon"
          className="absolute -right-6 top-1/2 -translate-y-1/2 transform rounded-full bg-white text-black shadow-lg hover:bg-gray-100 hover:text-black"
          onClick={() =>
            setActiveTab(activeTab === tabs.length - 1 ? 0 : activeTab + 1)
          }
        >
          <ArrowRight />
        </Button>
        <div className="mx-auto grid w-full grid-cols-4 content-center items-center gap-10 justify-self-center">
          {getProductsForActiveTab().map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <CustomLink href="/products">View All Products</CustomLink>
    </section>
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
    <div className="space-x-4 rounded-full bg-gray-200 p-2">
      {tabs.map((tab, index) => {
        return (
          <Button
            key={index}
            className={cn(
              "rounded-full bg-transparent px-4 py-2 text-lg font-medium text-black hover:text-white",
              tab.value === activeTab
                ? "bg-white"
                : "bg-transparent text-black",
            )}
            onClick={() => setActiveTab(tab.value)}
          >
            {tab.name}
          </Button>
        );
      })}
    </div>
  );
};
