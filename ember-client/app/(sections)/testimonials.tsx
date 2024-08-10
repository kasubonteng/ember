"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronDown, ChevronUp, Star } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

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
    name: "John Doe",
    position: "CEO",
    company: "Company Name",
    image: "/testimonials/testimonial-2.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.",
  },
  {
    name: "John Doe",
    position: "CEO",
    company: "Company Name",
    image: "/testimonials/testimonial-3.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.",
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
    <div className="group relative h-96 w-80 overflow-hidden rounded-xl shadow-xl transition-all duration-500 ease-in-out hover:shadow-2xl">
      {/* Product Image Background */}
      <img
        src={productImage || "/api/placeholder/320/400"}
        alt="Product"
        className="absolute inset-0 h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-all duration-500 ease-in-out group-hover:from-black/80"></div>

      {/* Review Content */}
      <div
        className={`absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 ease-in-out ${isExpanded ? "h-full" : "h-2/3"}`}
      >
        <div className="flex items-center space-x-4">
          <img
            src={avatar || "/api/placeholder/32/32"}
            alt={`${name}'s avatar`}
            className="h-12 w-12 rounded-full border-2 border-white object-cover"
          />
          <div>
            <h3 className="text-lg font-semibold">{name}</h3>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-400"}`}
                />
              ))}
            </div>
          </div>
        </div>

        <p
          className={`mt-4 overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? "max-h-96" : "max-h-20"}`}
        >
          "{review}"
        </p>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-primary-300 hover:text-primary-200 mt-4 flex items-center text-sm font-medium"
        >
          {isExpanded ? (
            <>
              Read less <ChevronUp className="ml-1 h-4 w-4" />
            </>
          ) : (
            <>
              Read more <ChevronDown className="ml-1 h-4 w-4" />
            </>
          )}
        </button>

        <div className="mt-6">
          <span className="text-primary-200 inline-block rounded-full bg-primary/20 px-3 py-1 text-sm font-medium transition-all duration-300 ease-in-out group-hover:bg-primary/30">
            Verified Purchase
          </span>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-10 bg-white py-44">
      <div>
        <p className="font-semibold uppercase text-primary">Materials</p>
        <h3 className="max-w-[413px] text-[42px] font-bold capitalize leading-[3rem]">
          Our Client Reviews
        </h3>
      </div>

      <div>
        <Carousel
          opts={{
            align: "center",
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.name}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <ImageBackgroundReviewCard
                    name={testimonial.name}
                    avatar={testimonial.image}
                    rating={5}
                    review={testimonial.content}
                    productImage="/testimonials/testimonial-2.jpg"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
