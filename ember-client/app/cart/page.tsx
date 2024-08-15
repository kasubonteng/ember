"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const CartPage = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-20 px-4 pt-36 lg:px-0 lg:pt-44">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-2 text-center"
      >
        <h2 className="text-4xl font-bold lg:text-5xl">Your Shopping Cart</h2>
      </motion.div>
      <section className="flex w-full items-center justify-center">
        <div className="flex w-full max-w-screen-2xl gap-10">
          <div className="flex w-full flex-col rounded-xl p-8">
            <div className="grid grid-cols-6 font-medium">
              <div className="col-span-3">Product</div>
              <div className="text-center">Price</div>
              <div className="text-center">Quantity</div>
              <div className="text-center">Total Price</div>
            </div>
            <div className="py-8">
              <div className="grid grid-cols-6 rounded-xl bg-gray-200">
                <div className="col-span-3 flex gap-3 p-4">
                  <Image
                    src="/shop/featured/sofa.jpg"
                    alt="product"
                    width={200}
                    height={200}
                    objectFit="cover"
                    className="rounded-lg"
                  />

                  <div>
                    <p className="text-xl font-bold">Sofa</p>
                  </div>
                </div>

                <div className="flex items-center justify-center font-medium">
                  <p>Ghc 60</p>
                </div>

                <div>{/* component to add or subtract quantity */}</div>

                <div className="flex items-center justify-center text-xl font-bold text-primary">
                  <p>Ghc 60</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[500px] flex-col items-start justify-start gap-10 rounded-xl border border-primary bg-primary/40 p-8 backdrop-blur-md">
            <h4 className="text-3xl font-medium">Cart Total</h4>
            <div className="flex w-full items-center justify-between text-lg font-medium">
              <p className="">Subtotal</p>
              <p>$0.00</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default CartPage;
