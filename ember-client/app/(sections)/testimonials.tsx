"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    name: "John Doe",
    position: "CEO",
    company: "Company Name",
    image: "/testimonials/testimonial-1.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.",
  },
  {
    name: "Jane Smith",
    position: "CTO",
    company: "Tech Corp",
    image: "/testimonials/testimonial-2.webp",
    content:
      "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam quis risus eget urna mollis ornare vel eu leo.",
  },
  {
    name: "Alice Johnson",
    position: "Designer",
    company: "Creative Studios",
    image: "/testimonials/testimonial-3.webp",
    content:
      "Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla.",
  },
];

const ImageBackgroundReviewCard = ({
  name,
  avatar,
  rating,
  review,
  productImage,
}: {
  name: string;
  avatar: string;
  rating: number;
  review: string;
  productImage: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative h-[340px] w-full overflow-hidden rounded-xl shadow-xl transition-all duration-500 ease-in-out hover:shadow-2xl sm:h-[380px] sm:w-72 md:h-96 md:w-80"
    >
      <Image
        src={productImage}
        alt="Product"
        width={320}
        height={320}
        className="absolute inset-0 h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-all duration-500 ease-in-out group-hover:from-black/80"
      ></motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className={`absolute bottom-0 left-0 right-0 p-4 text-white transition-all duration-500 ease-in-out sm:p-6 ${
          isExpanded ? "h-full" : "h-2/3"
        }`}
      >
        <div className="flex items-center space-x-3 sm:space-x-4">
          <Image
            src={avatar}
            alt={`${name}'s avatar`}
            width={48}
            height={48}
            className="h-10 w-10 rounded-full border-2 border-white object-cover sm:h-12 sm:w-12"
          />
          <div>
            <h3 className="text-base font-semibold sm:text-lg">{name}</h3>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                >
                  <Star
                    className={`h-3 w-3 sm:h-4 sm:w-4 ${
                      i < rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-400"
                    }`}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <AnimatePresence>
          <motion.p
            key={isExpanded ? "expanded" : "collapsed"}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`mt-3 overflow-hidden text-sm sm:mt-4 sm:text-base`}
          >
            &quot;{review}&quot;
          </motion.p>
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-primary-300 hover:text-primary-200 mt-3 flex items-center text-xs font-medium sm:mt-4 sm:text-sm"
        >
          {isExpanded ? (
            <>
              Read less <ChevronUp className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
            </>
          ) : (
            <>
              Read more <ChevronDown className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
            </>
          )}
        </motion.button>

        {/* <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-4 sm:mt-6"
        >
          <span className="text-primary-200 inline-block rounded-full bg-primary/20 px-2 py-1 text-xs font-medium transition-all duration-300 ease-in-out group-hover:bg-primary/30 sm:px-3 sm:py-1 sm:text-sm">
            Verified Purchase
          </span>
        </motion.div> */}
      </motion.div>
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
      className="flex flex-col items-center justify-center gap-6 bg-white px-4 py-16 sm:gap-10 sm:px-6 sm:py-24 md:py-44"
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center"
      >
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-4 text-sm font-semibold uppercase text-primary sm:mb-6 sm:text-base"
        >
          Testimonials
        </motion.p>
        <motion.h3
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-[413px] text-2xl font-bold capitalize leading-tight sm:text-3xl sm:leading-[3rem] md:text-[42px]"
        >
          Our Client Reviews
        </motion.h3>
      </motion.div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="w-full max-w-6xl"
      >
        <Carousel
          opts={{
            align: "center",
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={testimonial.name}
                className="pl-4 sm:basis-1/2 sm:pl-6 lg:basis-1/3"
              >
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  className="w-full p-1 sm:w-fit"
                >
                  <ImageBackgroundReviewCard
                    name={testimonial.name}
                    avatar={testimonial.image}
                    rating={5}
                    review={testimonial.content}
                    productImage="/testimonials/testimonial-2.webp"
                  />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:block" />
          <CarouselNext className="hidden lg:block" />
        </Carousel>
      </motion.div>
    </motion.section>
  );
};

export default Testimonials;
