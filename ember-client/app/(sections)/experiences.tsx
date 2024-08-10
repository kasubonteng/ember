import CustomLink from "@/components/link";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Experiences = () => {
  return (
    <section className="flex gap-10 bg-white pb-36 pl-0 pr-20 pt-96">
      <div>
        <Image
          src="/experiences/experience-1.png"
          width={629}
          height={445}
          alt="experience image 1"
          className="col-span-1 row-span-1"
        />
      </div>
      <div className="ml-20 flex max-w-[556px] flex-col gap-10">
        <p className="font-semibold uppercase text-primary">Experiences</p>
        <h3 className="max-w-[413px] text-[42px] font-bold capitalize leading-[3rem]">
          we provide you the best experience
        </h3>
        <p className="">
          You don&apos;t have to worry about the result because all of these
          interiors are made by people who are professionals in their fields
          with an elegant and lucurious style and with premium quality materials
        </p>
        <CustomLink href="/about">More info</CustomLink>
      </div>
    </section>
  );
};

export default Experiences;
