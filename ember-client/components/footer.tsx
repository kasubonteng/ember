"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    name: "Interior Design",
    href: "#",
  },
  {
    name: "Furniture Design",
    href: "#",
  },
  {
    name: "Home Decor",
    href: "#",
  },
  {
    name: "Architecture",
    href: "#",
  },
];
//localhost:3002/shop/products?category=featured
const furniture = [
  {
    name: "Featured",
    href: "/shop/products?category=featured",
  },
  {
    name: "Bedroom",
    href: "/shop/products?category=bedroom",
  },
  {
    name: "Living Room",
    href: "/shop/products?category=living-room",
  },
  {
    name: "Dining",
    href: "/shop/products?category=dining",
  },
  {
    name: "Office",
    href: "/shop/products?category=office",
  },
  {
    name: "All",
    href: "/furniture",
  },
];

const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com",
  },
  {
    name: "Twitter",
    href: "https://www.twitter.com",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com",
  },
  {
    name: "Pinterest",
    href: "https://www.pinterest.com",
  },
];

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  return (
    <div className="mx-auto max-w-screen-2xl">
      <footer className="flex w-full flex-col gap-32 px-8 pb-12 pt-12 lg:px-36 lg:pt-36">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          // viewport={{ once: true }}
          className="flex flex-col justify-between gap-10 lg:flex-row lg:gap-0"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
            className="max-w-[300px] space-y-4"
          >
            <Link
              href={"/"}
              className="text-5xl font-bold transition-colors duration-150 hover:text-primary"
            >
              Ember
            </Link>
            <p>
              The advantage of hiring a workspace with us is that gives you
              comfortable service and all-around facilities.
            </p>
          </motion.div>
          <div className="grid grid-cols-3 gap-14 lg:mr-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={textVariants}
              className="flex flex-col gap-4"
            >
              <p className="font-medium text-primary">Services</p>
              {services.map((service, index) => {
                return (
                  <Link
                    href={service}
                    key={index}
                    className="transition-all duration-150 hover:text-primary"
                  >
                    {service.name}
                  </Link>
                );
              })}
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={textVariants}
              className="flex flex-col gap-4"
            >
              <p className="font-medium text-primary">Furniture</p>
              {furniture.map((furniture, index) => {
                return (
                  <Link
                    href={furniture}
                    key={index}
                    className="transition-all duration-150 hover:text-primary"
                  >
                    {furniture.name}
                  </Link>
                );
              })}
            </motion.div>
            <motion.div
              className="flex flex-col gap-4"
              initial="hidden"
              whileInView="visible"
              variants={textVariants}
            >
              <p className="font-medium text-primary">Follow Us</p>
              {socials.map((social, index) => {
                return (
                  <Link
                    href={social}
                    key={index}
                    className="transition-all duration-150 hover:text-primary"
                  >
                    {social.name}
                  </Link>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          className="flex flex-col items-center justify-between lg:mr-24 lg:flex-row"
        >
          <span className="order-2 lg:order-1">
            Copyright &copy; {new Date().getFullYear()}
          </span>
          <div className="order-1 flex gap-5 font-medium lg:order-2">
            <Link href={"/"}>Terms & Conditions</Link>
            <Link href={"/"}>Privacy Policy</Link>
          </div>
        </motion.div>
      </footer>
    </div>
  );
};

export default Footer;
