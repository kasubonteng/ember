"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import CustomLink from "@/components/link";

const Personalization = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const textVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const imageContainerVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
      className="flex items-center justify-center overflow-hidden bg-gray-100 p-8 lg:p-20"
    >
      <motion.div className="flex w-full max-w-screen-2xl flex-col items-center justify-between lg:flex-row">
        <motion.div
          variants={itemVariants}
          className="mb-10 flex max-w-[556px] flex-col gap-8 lg:mb-0 lg:gap-10"
        >
          <motion.p
            variants={textVariants}
            className="font-semibold uppercase text-primary"
          >
            Personalization
          </motion.p>
          <motion.h3
            variants={textVariants}
            className="max-w-[413px] text-[42px] font-bold capitalize leading-[3rem]"
          >
            Furniture Tailored to Your Unique Style
          </motion.h3>
          <motion.p variants={textVariants} className="text-gray-600">
            Personalization is key. We offer customizable options for our
            furniture, allowing you to choose finishes and fabrics that
            perfectly match your unique style and space.
          </motion.p>
          <motion.div variants={textVariants}>
            <CustomLink href="/about">More info</CustomLink>
          </motion.div>
        </motion.div>

        <motion.div
          variants={imageContainerVariants}
          className="relative h-[500px] w-full lg:w-[600px]"
        >
          <motion.div
            variants={imageVariants}
            className="absolute left-0 top-0 z-10"
          >
            <Image
              src="/personalization/personalization-1.jpg"
              width={200}
              height={300}
              alt="personalization image 1"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            variants={imageVariants}
            className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 transform"
          >
            <Image
              src="/personalization/personalization-3.jpg"
              width={400}
              height={300}
              alt="personalization image 3"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            variants={imageVariants}
            className="absolute bottom-0 right-0 z-10"
          >
            <Image
              src="/personalization/personalization-2.jpg"
              width={200}
              height={280}
              alt="personalization image 2"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Personalization;
