"use client";

import React from "react";
import { motion } from "framer-motion";
import CustomLink from "@/components/link";
import Image from "next/image";

const Craftsmanship = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={containerVariants}
      className="flex items-center justify-center bg-gray-100 px-8 py-24 lg:px-20"
    >
      <motion.div className="flex w-full max-w-screen-2xl flex-col items-center justify-between gap-10 lg:flex-row">
        <motion.div
          variants={itemVariants}
          className="flex max-w-[556px] flex-col gap-8 lg:order-1"
        >
          <motion.p
            variants={itemVariants}
            className="font-semibold uppercase text-primary"
          >
            Craftsmanship
          </motion.p>
          <motion.h3
            variants={itemVariants}
            className="max-w-[413px] text-4xl font-bold capitalize leading-tight lg:text-5xl"
          >
            Sustainable Craftsmanship for a Better Tomorrow
          </motion.h3>
          <motion.p variants={itemVariants} className="text-gray-600">
            We commit to eco-friendly practices. Our furniture is crafted using
            sustainable materials and methods, ensuring that your home remains
            beautiful without compromising the environment.
          </motion.p>
          <motion.div variants={itemVariants}>
            <CustomLink href="/about">More info</CustomLink>
          </motion.div>
        </motion.div>
        <motion.div
          variants={imageVariants}
          className="relative w-full lg:order-2 lg:w-1/2"
        >
          <Image
            src="/craftsmanship/craftsmanship-1.webp"
            width={629}
            height={445}
            alt="craftsmanship image"
            className="aspect-square rounded-lg shadow-xl lg:h-[445px] lg:w-[629px]"
          />
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className="absolute -right-10 -top-10 hidden h-40 w-40 rounded-full bg-green-500 opacity-20 lg:block"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className="absolute -bottom-5 -left-5 hidden h-20 w-20 rounded-full bg-primary opacity-30 lg:block"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Craftsmanship;
