import CustomLink from "@/components/link";
import Search from "@/components/search";
import BestSellingProducts from "./(sections)/best-selling-products";
import Craftsmanship from "./(sections)/craftsmanship";
import Innovation from "./(sections)/innovation";
import Personalization from "./(sections)/personalization";
import Testimonials from "./(sections)/testimonials";

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
              {/* Make your interior more minimalistic & modern */}
              Where Elegance Meets Modern Design
            </h1>
            <p className="mt-[55px] max-w-[606px] text-2xl text-black">
              {/* Turn your room with ember into a lot more minimalist and modern
              with ease and speed */}
              Minimalist furniture designed to transform your space with elegant
              and timeless beauty
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-start justify-between gap-52 bg-white px-36 py-24 lg:flex-row">
        <div className="w-3/4 text-wrap text-5xl font-bold">
          <h3>Why Choose Us</h3>
        </div>
        <div className="flex flex-col gap-14">
          <div className="px-4 text-lg">
            <p>
              At Ember, we believe that less is more. Our carefully curated
              collection of modern furniture is crafted with precision, using
              the highest quality materials. Each piece is designed to blend
              seamlessly with your space, adding a touch of sophistication
              without overwhelming your environment. With Ember, you don’t just
              furnish your home; you create an oasis of calm, style, and
              functionality.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="group flex flex-col gap-4 rounded-xl border border-transparent p-4 transition-all hover:border hover:border-primary hover:bg-primary/20">
              <p className="text-2xl font-bold transition-colors group-hover:text-primary">
                <span className="block">Timeless</span>
                Design
              </p>
              <p>
                Our pieces feature clean lines and neutral tones, ensuring they
                stay stylish for years to come.
              </p>
              <CustomLink href="/about">More info</CustomLink>
            </div>
            <div className="group flex flex-col gap-4 rounded-xl border border-transparent p-4 transition-all hover:border hover:border-primary hover:bg-primary/20">
              <p className="text-2xl font-bold transition-colors group-hover:text-primary">
                Uncompromising Quality
              </p>
              <p>
                Crafted from premium materials, our furniture is built to last,
                offering durability you can trust.
              </p>
              <CustomLink href="/about">More info</CustomLink>
            </div>
            <div className="group flex flex-col gap-4 rounded-xl border border-transparent p-4 transition-all hover:border hover:border-primary hover:bg-primary/20">
              <p className="text-2xl font-bold transition-colors group-hover:text-primary">
                Customer-Centric Service
              </p>
              <p>
                We prioritize your satisfaction with personalized support and a
                seamless shopping experience.
              </p>
              <CustomLink href="/about">More info</CustomLink>
            </div>
          </div>
        </div>
      </section>

      <BestSellingProducts />
      <Innovation />
      <Personalization />
      <Craftsmanship />
      <Testimonials />
    </main>
  );
}
