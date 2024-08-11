import CustomLink from "@/components/link";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Personalization = () => {
  return (
    <section className="flex items-center justify-between bg-white p-20 pr-0">
      <div className="flex max-w-[556px] flex-col gap-10">
        <p className="font-semibold uppercase text-primary">Personalization</p>
        <h3 className="max-w-[413px] text-[42px] font-bold capitalize leading-[3rem]">
          Furniture Tailored to Your Unique Style
        </h3>
        <p className="">
          Personalization is key. We offer customizable options for our
          furniture, allowing you to choose finishes and fabrics that perfectly
          match your unique style and space.
        </p>
        <CustomLink href="/about">More info</CustomLink>
      </div>
      <div className="grid grid-cols-3 grid-rows-3">
        <Image
          src="/personalization/personalization-1.png"
          width={225}
          height={350}
          alt="personalization image 1"
          className="col-span-1 row-span-1"
        />
        <Image
          src="/personalization/personalization-3.png"
          width={629}
          height={445}
          alt="personalization image 3"
          className="col-span-2 row-span-3 self-center"
        />
        <Image
          src="/personalization/personalization-2.png"
          width={223}
          height={317}
          alt="personalization image 2"
          className="col-span-1 row-span-2"
        />
      </div>
    </section>
  );
};

export default Personalization;
