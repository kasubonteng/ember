import CustomLink from "@/components/link";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Materials = () => {
  return (
    <section className="flex items-center justify-between bg-white p-20 pr-0">
      <div className="flex max-w-[556px] flex-col gap-10">
        <p className="font-semibold uppercase text-primary">Materials</p>
        <h3 className="max-w-[413px] text-[42px] font-bold capitalize leading-[3rem]">
          Very Serious Materials For Making Furniture
        </h3>
        <p className="">
          Because Ember was very serious about designing furniture for our
          environment, using a very expensive and famous capital but at a
          relatively low price
        </p>
        <CustomLink href="/about">More info</CustomLink>
      </div>
      <div className="grid grid-cols-3 grid-rows-3">
        <Image
          src="/materials/materials-1.png"
          width={225}
          height={350}
          alt="material image 1"
          className="col-span-1 row-span-1"
        />
        <Image
          src="/materials/materials-3.png"
          width={629}
          height={445}
          alt="material image 3"
          className="col-span-2 row-span-3 self-center"
        />
        <Image
          src="/materials/materials-2.png"
          width={223}
          height={317}
          alt="material image 2"
          className="col-span-1 row-span-2"
        />
      </div>
    </section>
  );
};

export default Materials;
