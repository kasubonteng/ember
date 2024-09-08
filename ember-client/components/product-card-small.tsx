import { formatCurrency } from "@/lib/utils";
import { Product } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductCardSmallProps {
  product: Product;
  index: number;
}

const ProductCardSmall: React.FC<ProductCardSmallProps> = ({
  product,
  index,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <Link
        href={`/shop/products/${encodeURIComponent(product.id.toString())}`}
        className="group flex w-64 flex-col gap-2"
      >
        <div className="relative h-64 w-64 overflow-hidden rounded-xl">
          <Image
            src={product.imageUrl}
            width={256}
            height={256}
            alt={`${product.name} image`}
            className="size-[256px] object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
        <p className="text-lg font-medium group-hover:font-bold">
          {product.name}
        </p>
        <p className="font-medium text-primary group-hover:font-bold">
          {formatCurrency(product.price)}
        </p>
      </Link>
    </motion.div>
  );
};

export default ProductCardSmall;
