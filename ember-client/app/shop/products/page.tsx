"use client";

import ProductCard from "@/components/product-card-large";
import Filter from "./_components/filter";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const products = [
  {
    title: "Sofa",
    image: "/shop/featured/sofa.jpg",
    price: 799,
    category: "featured",
    rating: 4.5,
    popularity: "Most Popular",
  },
  {
    title: "Armchair",
    image: "/shop/featured/armchair.jpg",
    price: 399,
    category: "featured",
    rating: 4.2,
    popularity: "Newest",
  },
  {
    title: "Coffee Table",
    image: "/shop/featured/coffee-table.jpg",
    price: 199,
    category: "featured",
    rating: 4.0,
    popularity: "Least Popular",
  },
  {
    title: "Dining Table",
    image: "/shop/featured/dining-table.jpg",
    price: 599,
    category: "featured",
    rating: 4.6,
    popularity: "Most Popular",
  },
  {
    title: "Bookshelf",
    image: "/shop/featured/bookshelf.jpg",
    price: 349,
    category: "featured",
    rating: 4.3,
    popularity: "Popular",
  },
  {
    title: "Floor Lamp",
    image: "/shop/featured/floor-lamp.jpg",
    price: 129,
    category: "featured",
    rating: 3.8,
    popularity: "Least Popular",
  },
  {
    title: "Sectional Sofa",
    image: "/shop/living-room/sectional-sofa.jpg",
    price: 1299,
    category: "living room",
    rating: 4.7,
    popularity: "Most Popular",
  },
  {
    title: "TV Stand",
    image: "/shop/living-room/tv-stand.jpg",
    price: 249,
    category: "living room",
    rating: 4.1,
    popularity: "Popular",
  },
  {
    title: "Side Table",
    image: "/shop/living-room/side-table.jpg",
    price: 99,
    category: "living room",
    rating: 3.9,
    popularity: "Least Popular",
  },
  {
    title: "Ottoman",
    image: "/shop/living-room/ottoman.jpg",
    price: 149,
    category: "living room",
    rating: 4.2,
    popularity: "Popular",
  },
  {
    title: "Wall Art",
    image: "/shop/living-room/wall-art.jpg",
    price: 79,
    category: "living room",
    rating: 4.0,
    popularity: "Least Popular",
  },
  {
    title: "Area Rug",
    image: "/shop/living-room/area-rug.jpg",
    price: 199,
    category: "living room",
    rating: 4.3,
    popularity: "Popular",
  },
  {
    title: "Bed Frame",
    image: "/shop/bedroom/bed-frame.jpg",
    price: 599,
    category: "bedroom",
    rating: 4.6,
    popularity: "Most Popular",
  },
  {
    title: "Nightstand",
    image: "/shop/bedroom/nightstand.jpg",
    price: 129,
    category: "bedroom",
    rating: 4.1,
    popularity: "Popular",
  },
  {
    title: "Dresser",
    image: "/shop/bedroom/dresser.jpg",
    price: 449,
    category: "bedroom",
    rating: 4.4,
    popularity: "Popular",
  },
  {
    title: "Wardrobe",
    image: "/shop/bedroom/wardrobe.jpg",
    price: 699,
    category: "bedroom",
    rating: 4.5,
    popularity: "Most Popular",
  },
  {
    title: "Vanity",
    image: "/shop/bedroom/vanity.jpg",
    price: 299,
    category: "bedroom",
    rating: 4.2,
    popularity: "Popular",
  },
  {
    title: "Bedside Lamp",
    image: "/shop/bedroom/bedside-lamp.jpg",
    price: 59,
    category: "bedroom",
    rating: 3.8,
    popularity: "Least Popular",
  },
];

const ShopPage = () => {
  const searchParams = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<typeof products>([]);
  useEffect(() => {
    const categoryFilter = searchParams.get("category");
    const minPriceFilter = searchParams.get("minPrice");
    const maxPriceFilter = searchParams.get("maxPrice");
    const popularityFilter = searchParams.get("popularity");
    const ratingFilter = searchParams.get("rating");
    const searchFilter = searchParams.get("search");

    const filterProducts = (prod: typeof products) => {
      return prod.filter((product) => {
        if (
          categoryFilter &&
          categoryFilter !== "All" &&
          categoryFilter.replace(/\+/g, " ").toLowerCase() !==
            product.category.toLowerCase() &&
          product.category.toLowerCase() !== categoryFilter.toLowerCase()
        ) {
          return false;
        }

        if (minPriceFilter && product.price.toString() < minPriceFilter) {
          return false;
        }

        if (maxPriceFilter && product.price.toString() > maxPriceFilter) {
          return false;
        }

        if (
          popularityFilter &&
          product.popularity.toLowerCase() !==
            popularityFilter.replace(/\+/g, " ").toLowerCase()
        ) {
          return false;
        }

        if (ratingFilter && ratingFilter !== "0") {
          const minRating = parseInt(ratingFilter);
          if (product.rating < minRating) return false;
        }

        if (
          searchFilter &&
          !product.title.toLowerCase().includes(searchFilter.toLowerCase())
        ) {
          return false;
        }
        return true;
      });
    };

    setFilteredProducts(filterProducts(products));
  }, [searchParams]);

  return (
    <div className="flex w-full flex-col items-center justify-center px-4 pt-36 lg:px-8 lg:pt-44">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16 space-y-4 text-center"
      >
        <h2 className="mb-6 text-4xl font-bold">Shop Our Collection</h2>
      </motion.div>

      <div className="w-full max-w-[1096px]">
        <Filter />
      </div>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map((product, index) => (
          <ProductCard key={product.title} index={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
