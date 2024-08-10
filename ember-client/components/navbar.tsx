"use client";

import React, { useState, useEffect } from "react";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

const navLinks = [
  {
    name: "Furniture",
    href: "/furniture",
  },
  {
    name: "Shop",
    href: "/shop",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 70) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed z-10 ml-[5%] mt-6 flex w-[90%] items-center justify-between rounded-full px-8 py-4 text-black transition-all duration-300 ${
        hasScrolled
          ? "border border-primary/40 bg-primary/20 backdrop-blur-md"
          : "border-none bg-transparent"
      }`}
    >
      <div>
        <Link
          href="/"
          className="text-2xl font-bold transition-colors duration-150 hover:text-primary"
        >
          Ember
        </Link>
      </div>
      <div className="flex gap-10">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group relative text-lg font-bold transition-colors duration-300 hover:text-primary"
          >
            {link.name}
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-150 ease-in-out group-hover:w-full"></span>
          </Link>
        ))}
      </div>
      <Link
        href={"/cart"}
        className="transition-colors duration-150 hover:text-primary"
      >
        <ShoppingBag className="size-[34px]" />
      </Link>
    </nav>
  );
};

export default Navbar;
