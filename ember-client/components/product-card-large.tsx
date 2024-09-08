"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Plus, ShoppingCart } from "lucide-react";
import { cn, formatCurrency } from "@/lib/utils";
import { Product } from "@/types";
import useCartStore from "@/stores/cart";

interface ProductCardLargeProps {
  product: Product;
  index: number;
}

const ProductCardLarge: React.FC<ProductCardLargeProps> = ({
  product,
  index,
}) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      key={`${product.name}-${index}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <div className="group flex w-80 flex-col gap-2 sm:w-64">
        <Link
          href={`/shop/products/${product.id}`}
          className="relative size-80 overflow-hidden rounded-xl sm:h-64 sm:w-64"
        >
          <Image
            src={product.imageUrl}
            width={256}
            height={256}
            alt={`${product.name} image`}
            className="size-[320px] object-cover transition-transform duration-300 hover:scale-110 sm:size-[256px]"
          />
        </Link>
        <div className="flex items-center justify-between">
          <Link href={`/shop/products/${product.id}`} className="">
            <p className="text-lg font-medium group-hover:font-bold">
              {product.name}
            </p>
            {/* <p className="my-1 text-xs text-gray-500">
              {product.rating} ★{" "}
              {product.popularity === "Most Popular" ? "Most Popular" : ""}
            </p> */}
            <p className="font-medium text-primary group-hover:font-bold">
              {formatCurrency(product.price)}
            </p>
          </Link>
          <div>
            <motion.button
              className={cn(
                "relative flex items-center justify-center overflow-hidden rounded-full text-white",
                isHovered ? "bg-primary" : "bg-black",
              )}
              initial={{ width: "40px", height: "40px" }}
              animate={{ width: isHovered ? "140px" : "40px" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={() => addToCart(product, 1)}
            >
              <motion.span
                className="absolute flex items-center justify-center"
                initial={{ opacity: 1 }}
                animate={{ opacity: isHovered ? 0 : 1 }}
                transition={{ duration: 0.2 }}
              >
                <Plus size={24} />
              </motion.span>
              <motion.span
                className="flex items-center justify-center space-x-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.2, delay: isHovered ? 0.2 : 0 }}
              >
                <ShoppingCart size={20} />
                <span className="text-sm font-medium">Add to Cart</span>
              </motion.span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCardLarge;
