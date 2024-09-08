"use client";

import { formatCurrency } from "@/lib/utils";
import useCartStore, { CartItem as ICartItem } from "@/stores/cart";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";

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
    className="mb-4 overflow-hidden rounded-xl bg-gray-200 shadow-md"
  >
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-6 md:items-center">
      <div className="col-span-1 sm:col-span-2 md:col-span-3">
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative h-40 w-full overflow-hidden rounded-lg sm:h-32 sm:w-32">
            <Image
              src={item.imageUrl}
              alt={item.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg font-bold md:text-xl">{item.name}</p>
            <p className="text-sm text-gray-600 md:hidden">
              {formatCurrency(item.price)}
            </p>
          </div>
        </div>
      </div>

      <div className="hidden items-center justify-center font-medium md:flex">
        <p>{formatCurrency(item.price)}</p>
      </div>

      <div className="flex items-center justify-start sm:justify-center">
        <button
          onClick={() => updateQuantity(item.id, -1)}
          className="rounded-full bg-gray-300 p-1 hover:bg-gray-400"
          aria-label="Decrease quantity"
        >
          <Minus size={16} />
        </button>
        <span className="mx-2 min-w-[20px] text-center">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.id, 1)}
          className="rounded-full bg-gray-300 p-1 hover:bg-gray-400"
          aria-label="Increase quantity"
        >
          <Plus size={16} />
        </button>
      </div>

      <div className="flex items-center justify-between sm:justify-center">
        <p className="text-lg font-bold text-primary md:text-xl">
          {formatCurrency(item.price * item.quantity)}
        </p>
        <button
          onClick={() => removeItem(item)}
          className="ml-4 rounded-full bg-red-100 p-2 text-primary hover:bg-red-200"
          aria-label="Remove item"
        >
          <Trash2 size={16} />
        </button>
      </div>
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
              <p>{formatCurrency(getTotalPrice())}</p>
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
