"use client";

import React, { useState, useEffect } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Furniture", href: "/furniture" },
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setHasScrolled(scrollPosition > 70);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={cn(
        `fixed z-50 ml-[5%] mt-6 w-[90%] rounded-full px-4 py-4 transition-all duration-300 sm:px-8`,
        hasScrolled
          ? "border border-primary bg-primary/40 shadow-md backdrop-blur-md"
          : "bg-transparent",
        isMenuOpen && "rounded-xl duration-0",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <motion.div variants={linkVariants}>
          <Link
            href="/"
            className="text-2xl font-bold transition-colors duration-150 hover:text-primary"
          >
            Ember
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          variants={linkVariants}
          className="hidden gap-6 md:flex lg:gap-10"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative text-lg font-bold transition-colors duration-300 hover:text-primary"
            >
              {link.name}
              <motion.span
                initial={{ width: "0%" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 h-[2px] bg-primary"
              ></motion.span>
            </Link>
          ))}
        </motion.div>

        <motion.div variants={linkVariants} className="flex items-center gap-4">
          <Link
            href="/cart"
            className="transition-colors duration-150 hover:text-primary"
          >
            <ShoppingBag className="size-[34px]" />
          </Link>
          <button
            onClick={toggleMenu}
            className="text-2xl focus:outline-none md:hidden"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </motion.div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 overflow-hidden rounded-lg bg-white shadow-lg md:hidden"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="block px-4 py-3 text-lg font-bold transition-colors duration-300 hover:bg-primary/10 hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
