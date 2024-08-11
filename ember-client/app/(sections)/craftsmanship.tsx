import CustomLink from "@/components/link";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Craftsmanship = () => {
  return (
    <section className="flex items-center justify-center gap-10 bg-white py-24 pl-0 pr-20">
      <div className="ml-20 flex max-w-[556px] flex-col gap-8">
        <p className="font-semibold uppercase text-primary">Craftsmanship</p>
        <h3 className="max-w-[413px] text-[42px] font-bold capitalize leading-[3rem]">
          Sustainable Craftsmanship for a Better Tomorrow
        </h3>
        <p className="">
          We commit to eco-friendly practices. Our furniture is crafted using
          sustainable materials and methods, ensuring that your home remains
          beautiful without compromising the environment.
        </p>
        <CustomLink href="/about">More info</CustomLink>
      </div>
      <div>
        <Image
          src="/innovation/innovation-1.png"
          width={629}
          height={445}
          alt="innovation image 1"
          className="col-span-1 row-span-1"
        />
      </div>
    </section>
  );
};

export default Craftsmanship;
