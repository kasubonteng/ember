"use client";

import React from "react";
import { motion } from "framer-motion";
import CustomLink from "@/components/link";
import Image from "next/image";

const Innovation = () => {
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
      className="flex items-center justify-center bg-gradient-to-b to-gray-100 px-8 py-20 lg:px-20"
    >
      <motion.div className="flex w-full max-w-screen-2xl flex-col-reverse items-center justify-between gap-10 lg:flex-row">
        <motion.div
          variants={imageVariants}
          className="relative w-full lg:w-1/2"
        >
          <Image
            src="/innovation/innovation-1.jpg"
            width={629}
            height={445}
            alt="innovation image 1"
            className="rounded-lg shadow-xl"
          />
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
            className="absolute -bottom-10 -left-10 hidden h-40 w-40 rounded-full bg-primary lg:block"
          />
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="flex max-w-[556px] flex-col gap-8"
        >
          <motion.p
            variants={itemVariants}
            className="font-semibold uppercase text-primary"
          >
            Innovation
          </motion.p>
          <motion.h3
            variants={itemVariants}
            className="max-w-[413px] text-4xl font-bold capitalize leading-tight lg:text-5xl"
          >
            Innovative Designs for Modern Living
          </motion.h3>
          <motion.p variants={itemVariants} className="text-gray-600">
            We stay ahead of the curve. Our furniture combines cutting-edge
            design with functional elegance, ensuring your home is both stylish
            and practical.
          </motion.p>
          <motion.div variants={itemVariants}>
            <CustomLink href="/about">More info</CustomLink>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Innovation;
