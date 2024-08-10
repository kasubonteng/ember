import Search from "@/components/search";
import Image from "next/image";
import Link from "next/link";
import BestSellingProducts from "./(sections)/best-selling-products";
import Experiences from "./(sections)/experiences";
import Materials from "./(sections)/materials";
import Testimonials from "./(sections)/testimonials";
import CustomLink from "@/components/link";

export default function Home() {
  return (
    <main>
      <section className="flex h-screen w-full items-center justify-center">
        <div className="relative flex h-full w-full justify-center bg-[url('/hero-2.jpg')] bg-cover bg-center bg-no-repeat xl:bg-bottom">
          <div className="mt-[160px] flex flex-col items-center gap-4 text-center">
            <div>
              <Search />
            </div>
            <h1 className="mt-[10px] max-w-[861px] text-7xl font-bold text-black">
              Make your interior more minimalistic & modern
            </h1>
            <p className="mt-[55px] max-w-[606px] text-2xl text-black">
              Turn your room with ember into a lot more minimalist and modern
              with ease and speed
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-between gap-52 bg-white px-36 py-24 lg:flex-row">
        <div className="w-3/4 text-wrap text-5xl font-bold">
          <h3>Why Choose Us</h3>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-bold">Luxury facilities</p>
            <p>
              The advantage of hiring a workspace with us is that gives you
              comfortable service and all-around facilities.
            </p>
            <CustomLink href="/about">More info</CustomLink>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-bold">Luxury facilities</p>
            <p>
              The advantage of hiring a workspace with us is that gives you
              comfortable service and all-around facilities.
            </p>
            <CustomLink href="/about">More info</CustomLink>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-bold">Luxury facilities</p>
            <p>
              The advantage of hiring a workspace with us is that gives you
              comfortable service and all-around facilities.
            </p>
            <CustomLink href="/about">More info</CustomLink>
          </div>
        </div>
      </section>

      <BestSellingProducts />
      <Experiences />
      <Materials />
      <Testimonials />
    </main>
  );
}
