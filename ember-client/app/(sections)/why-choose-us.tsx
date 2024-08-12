"use client";

import React from "react";
import { motion } from "framer-motion";
import CustomLink from "@/components/link";

const WhyChooseUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="flex items-center justify-center bg-white px-4 py-12"
    >
      <motion.div className="flex max-w-screen-2xl flex-col items-start justify-between gap-10 lg:flex-row lg:gap-52 lg:px-36 lg:py-24">
        <motion.div
          variants={itemVariants}
          className="w-3/4 text-wrap px-4 text-4xl font-bold capitalize leading-tight lg:px-0 lg:text-5xl"
        >
          <h3>Why Choose Us</h3>
        </motion.div>
        <div className="flex flex-col gap-14">
          <motion.div variants={itemVariants} className="px-4 text-lg">
            <p>
              At Ember, we believe that less is more. Our carefully curated
              collection of modern furniture is crafted with precision, using
              the highest quality materials. Each piece is designed to blend
              seamlessly with your space, adding a touch of sophistication
              without overwhelming your environment. With Ember, you don&apos;t
              just furnish your home; you create an oasis of calm, style, and
              functionality.
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 gap-6 lg:grid-cols-3"
          >
            {[
              {
                title: ["Timeless", "Design"],
                description:
                  "Our pieces feature clean lines and neutral tones, ensuring they stay stylish for years to come.",
              },
              {
                title: ["Uncompromising Quality"],
                description:
                  "Crafted from premium materials, our furniture is built to last, offering durability you can trust.",
              },
              {
                title: ["Customer-Centric Service"],
                description:
                  "We prioritize your satisfaction with personalized support and a seamless shopping experience.",
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group flex flex-col gap-4 rounded-xl border border-transparent p-4 transition-all hover:border hover:border-primary hover:bg-primary/20"
              >
                <p className="text-2xl font-bold transition-colors group-hover:text-primary">
                  {card.title.map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </p>
                <p>{card.description}</p>
                <CustomLink href="/about">More info</CustomLink>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default WhyChooseUs;
