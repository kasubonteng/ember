"use client";

import CustomLink from "@/components/link";
import ProductCard from "@/components/product-card-large";
import LoadingProductCard from "@/components/product-loading";
import { useAllProductsData } from "@/hooks/useAllProductsData";
import { Product } from "@/types";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import Filter from "./_components/filter";

interface APIResponse {
  products: Product[];
  page: number;
  pageSize: number;
  totalPages: number;
}

const ShopPage = () => {
  const searchParams = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get("page") || "1"));
  const pageSize = Number(searchParams.get("pageSize") || "12");

  const createQueryString = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    params.set("pageSize", pageSize.toString());
    return params.toString();
  }, [searchParams, page, pageSize]);

  const { data, isPending, isError, isPlaceholderData } = useAllProductsData(
    createQueryString().toString(),
  );

  if (isError) return <div>Error fetching products. Please refresh page!</div>;

  return (
    <div className="flex w-full flex-col items-center justify-center px-4 pt-36 lg:px-8 lg:pt-44">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16 flex w-full max-w-[1096px] flex-col-reverse items-center space-y-4 text-center sm:flex-row"
      >
        <div className="w-[150px]">
          <CustomLink href="/shop" variant="back">
            Back to Shop
          </CustomLink>
        </div>
        <h2 className="mb-6 w-full text-center text-4xl font-bold sm:pr-[100px]">
          Shop Our Collection
        </h2>
      </motion.div>

      <div className="w-full max-w-[1096px]">
        <Filter />
      </div>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
        {isPending
          ? Array.from({ length: pageSize }, (_, i) => (
              <LoadingProductCard key={i} index={i} />
            ))
          : data?.products.map((product, index) => (
              <ProductCard key={product.name} index={index} product={product} />
            ))}
      </div>

      {data?.totalPages && data?.totalPages > 1 && (
        <div className="mt-16 flex items-center justify-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white disabled:cursor-not-allowed disabled:bg-slate-300"
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            Previous
          </motion.button>
          {Array.from({ length: data.totalPages }, (_, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`rounded-lg px-4 py-2 text-sm font-medium ${
                page === i + 1
                  ? "bg-primary text-white"
                  : "border border-primary bg-transparent text-primary"
              }`}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </motion.button>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white disabled:cursor-not-allowed disabled:bg-slate-300"
            onClick={() => setPage(page + 1)}
            disabled={page === data.totalPages}
          >
            Next
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default ShopPage;
