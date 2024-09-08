import { Product } from "@/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalItems: number;
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (product: CartItem) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
}

const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      totalItems: 0,

      addToCart: (product, quantity = 1) =>
        set((state) => {
          const existingProduct = state.items.find(
            (item) => item.id === product.id,
          );
          const newItems = existingProduct
            ? state.items.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item,
              )
            : [...state.items, { ...product, quantity }];

          return {
            items: newItems,
            totalItems: newItems.reduce((sum, item) => sum + item.quantity, 0),
          };
        }),

      removeFromCart: (product) =>
        set((state) => {
          const newItems = state.items.filter((item) => item.id !== product.id);
          return {
            items: newItems,
            totalItems: newItems.reduce((sum, item) => sum + item.quantity, 0),
          };
        }),

      updateQuantity: (id, change) =>
        set((state) => {
          const newItems = state.items
            .map((item) =>
              item.id === id
                ? { ...item, quantity: Math.max(0, item.quantity + change) }
                : item,
            )
            .filter((item) => item.quantity > 0);

          return {
            items: newItems,
            totalItems: newItems.reduce((sum, item) => sum + item.quantity, 0),
          };
        }),

      clearCart: () => set({ items: [], totalItems: 0 }),

      getTotalPrice: () =>
        get().items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useCartStore;
