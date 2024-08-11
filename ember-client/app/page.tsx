import CustomLink from "@/components/link";
import Search from "@/components/search";
import BestSellingProducts from "./(sections)/best-selling-products";
import Craftsmanship from "./(sections)/craftsmanship";
import Innovation from "./(sections)/innovation";
import Personalization from "./(sections)/personalization";
import Testimonials from "./(sections)/testimonials";
import Hero from "./(sections)/hero";
import WhyChooseUs from "./(sections)/why-choose-us";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <BestSellingProducts />
      <Innovation />
      <Personalization />
      <Craftsmanship />
      <Testimonials />
    </main>
  );
}
