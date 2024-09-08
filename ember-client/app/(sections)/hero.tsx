"use client";

import Search from "@/components/search";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex h-screen w-full items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="relative flex h-full w-full justify-center bg-[url('/hero.webp')] bg-cover bg-center bg-no-repeat xl:bg-bottom"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-[120px] flex flex-col items-center gap-4 px-4 text-center lg:mt-[160px] lg:px-0 5xl:mt-[300px]"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Search />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-[10px] max-w-[861px] text-6xl font-bold text-black lg:text-7xl 5xl:mt-[70px] 5xl:max-w-[1000px] 5xl:text-9xl"
          >
            Where Elegance Meets Modern Design
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-[40px] max-w-[606px] text-2xl text-black lg:mt-[55px] 5xl:max-w-[800px] 5xl:text-5xl"
          >
            Minimalist furniture designed to transform your space with elegant
            and timeless beauty
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
