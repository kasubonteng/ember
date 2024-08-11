import CustomLink from "@/components/link";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Innovation = () => {
  return (
    <section className="flex gap-10 bg-white pb-36 pl-0 pr-20 pt-96">
      <div>
        <Image
          src="/innovation/innovation-1.png"
          width={629}
          height={445}
          alt="innovation image 1"
          className="col-span-1 row-span-1"
        />
      </div>
      <div className="ml-20 flex max-w-[556px] flex-col gap-8">
        <p className="font-semibold uppercase text-primary">Innovation</p>
        <h3 className="max-w-[413px] text-[42px] font-bold capitalize leading-[3rem]">
          Innovative Designs for Modern Living
        </h3>
        <p className="">
          We stay ahead of the curve. Our furniture combines cutting-edge design
          with functional elegance, ensuring your home is both stylish and
          practical
        </p>
        <CustomLink href="/about">More info</CustomLink>
      </div>
    </section>
  );
};

export default Innovation;
