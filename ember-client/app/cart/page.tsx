"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Plus, Minus, Trash2 } from "lucide-react";
import useCartStore, { CartItem as ICartItem } from "@/stores/cart";

interface CartItemProps {
  item: ICartItem;
  updateQuantity: (id: number, quantity: number) => void;
  removeItem: (product: ICartItem) => void;
}

const CartItem = ({ item, updateQuantity, removeItem }: CartItemProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="mb-4 grid grid-cols-1 rounded-xl bg-gray-200 pb-6 md:grid-cols-6 md:pb-0"
  >
    <div className="col-span-3 flex flex-col gap-3 p-4 md:flex-row">
      <Image
        src={item.imageUrl}
        alt={item.name}
        width={200}
        height={200}
        objectFit="cover"
        className="w-full rounded-lg md:w-auto"
      />
      <div className="my-auto">
        <p className="text-lg font-bold md:text-xl">{item.name}</p>
      </div>
    </div>
    <div className="flex items-center justify-center font-medium">
      <p>Ghc {item.price.toFixed(2)}</p>
    </div>
    <div className="flex items-center justify-center">
      <button
        onClick={() => updateQuantity(item.id, item.quantity - 1)}
        className="p-1"
      >
        <Minus size={20} />
      </button>
      <span className="mx-2">{item.quantity}</span>
      <button
        onClick={() => updateQuantity(item.id, item.quantity + 1)}
        className="p-1"
      >
        <Plus size={20} />
      </button>
    </div>
    <div className="flex items-center justify-center">
      <p className="text-lg font-bold text-primary md:text-xl">
        Ghc {(item.price * item.quantity).toFixed(2)}
      </p>
      <button onClick={() => removeItem(item)} className="ml-4 text-red-500">
        <Trash2 size={20} />
      </button>
    </div>
  </motion.div>
);

const CartPage = () => {
  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } =
    useCartStore();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center gap-20 px-4 pt-36 lg:px-0 lg:pt-44"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-2 text-center"
      >
        <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
          Your Shopping Cart
        </h2>
      </motion.div>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex w-full items-center justify-center"
      >
        <div className="flex w-full max-w-screen-2xl flex-col gap-10 lg:flex-row">
          <div className="flex w-full flex-col rounded-xl bg-white p-4 shadow-lg md:p-8">
            <div className="mb-4 hidden grid-cols-6 font-medium md:grid">
              <div className="col-span-3">Product</div>
              <div className="text-center">Price</div>
              <div className="text-center">Quantity</div>
              <div className="text-center">Total Price</div>
            </div>
            <motion.div layout className="py-4 md:py-8">
              <AnimatePresence>
                {items.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    updateQuantity={updateQuantity}
                    removeItem={removeFromCart}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex w-full flex-col items-start justify-start gap-10 rounded-xl border border-primary bg-primary/40 p-4 backdrop-blur-md md:p-8 lg:w-[500px]"
          >
            <h4 className="text-2xl font-medium md:text-3xl">Cart Total</h4>
            <div className="flex w-full items-center justify-between text-base font-medium md:text-lg">
              <p>Subtotal</p>
              <p>Ghc {getTotalPrice().toFixed(2)}</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full rounded-lg bg-primary py-3 font-medium text-white"
              onClick={clearCart}
            >
              Clear Cart
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full rounded-lg bg-primary py-3 font-medium text-white"
            >
              Proceed to Checkout
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </motion.section>
  );
};

export default CartPage;
