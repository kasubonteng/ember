"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  image: string;
  imagePosition: "left" | "right";
}

const Card = ({ title, description, image, imagePosition }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn("flex gap-10 rounded-xl p-6 lg:p-10", {
        "flex-col lg:flex-row": imagePosition === "left",
        "flex-col lg:flex-row-reverse": imagePosition === "right",
      })}
    >
      <Link
        href={`/furniture/${title.toLowerCase().replace(" ", "-")}`}
        className="flex-1"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image
            src={image}
            width={629}
            height={445}
            alt={`${title} image`}
            priority
            className="h-[445px] w-[629px] rounded-xl shadow-lg"
          />
        </motion.div>
      </Link>
      <motion.div
        className="flex flex-1 flex-col justify-center gap-4"
        initial={{ opacity: 0, x: imagePosition === "left" ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link href={`/furniture/${title.toLowerCase().replace(" ", "-")}`}>
          <h2 className="text-3xl font-bold transition-colors duration-300 hover:text-primary lg:text-4xl">
            {title}
          </h2>
        </Link>
        <p className="text-base lg:text-lg">{description}</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 self-start rounded-lg bg-primary px-4 py-2 text-white transition-colors duration-300 hover:bg-primary"
        >
          Explore {title}
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

const furnitureItems = [
  {
    title: "Living Room",
    description:
      "Create a serene and stylish living space with our modern sofas, coffee tables, and storage solutions. Perfect for unwinding or entertaining.",
    image: "/furniture/living-room.jpg",
    imagePosition: "left" as const,
  },
  {
    title: "Bedroom",
    description:
      "Transform your bedroom into a peaceful retreat with our minimalist bed frames, dressers, and nightstands. Sleep better in a space that soothes the senses.",
    image: "/furniture/bedroom.jpg",
    imagePosition: "right" as const,
  },
  {
    title: "Office",
    description:
      "Work efficiently and elegantly with our modern desks, chairs, and shelving. Designed to enhance productivity and keep your workspace clutter-free.",
    image: "/furniture/office.jpg",
    imagePosition: "left" as const,
  },
  {
    title: "Dining Room",
    description:
      "Gather around our sleek dining tables and chairs for meals that are as stylish as they are delicious. Elevate your dining experience with our modern furniture.",
    image: "/furniture/dining-room.jpg",
    imagePosition: "right" as const,
  },
];

const FurniturePage = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-20 px-4 pt-36 lg:px-0 lg:pt-44">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-2 text-center"
      >
        <h2 className="text-4xl font-bold lg:text-5xl">
          Explore Our Collection
        </h2>
        <p className="max-w-[606px] text-base lg:text-lg">
          Discover our curated selection of modern, minimalist furniture
          designed to elevate every room in your home. Each piece embodies our
          commitment to quality, style, and functionality.
        </p>
      </motion.div>
      <section className="flex w-full items-center justify-center">
        <div className="flex w-full max-w-screen-2xl flex-col gap-10">
          {furnitureItems.map((item, index) => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default FurniturePage;
