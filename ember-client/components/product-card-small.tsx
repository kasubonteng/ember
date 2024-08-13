import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProductCardSmallProps {
  product: {
    title: string;
    category: string;
    image: string;
    price: number;
  };
  index: number;
}

const ProductCardSmall: React.FC<ProductCardSmallProps> = ({
  product,
  index,
}) => {
  return (
    <motion.div
      key={`${product.title}-${index}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <a
        href={`/shop/products/${product.category}/${product.title.toLowerCase().replace(" ", "-")}`}
        className="group flex w-64 flex-col gap-2"
      >
        <div className="relative h-64 w-64 overflow-hidden rounded-xl">
          <Image
            src={product.image}
            width={256}
            height={256}
            alt={`${product.title} image`}
            className="size-[256px] object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
        <p className="text-lg font-medium group-hover:font-bold">
          {product.title}
        </p>
        <p className="font-medium text-primary group-hover:font-bold">
          Ghc{product.price.toLocaleString()}
        </p>
      </a>
    </motion.div>
  );
};

export default ProductCardSmall;
