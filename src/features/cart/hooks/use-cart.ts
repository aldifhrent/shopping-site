import { Product } from "@prisma/client";
import toast from "react-hot-toast";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface StoreState {
  cart: Product[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
}

export const useCart = create(
  persist<StoreState>(
    (set) => ({
      cart: [],
      addToCart: (product: Product, quantity: number = 1) =>
        set((state) => {
          const existingItem = state.cart.find(
            (item) => item.id === product.id
          );
          if (existingItem) {
            toast.error('Product is already added to cart')
            return {
              cart: state.cart.map((item) =>
                item.id === product.id ? { ...item } : item
              ),
            };
          }
          toast.success(`${product.name} added to cart`)
          return { cart: [...state.cart, { ...product, quantity }] };
        }),
      removeFromCart: (productId: string) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
        })),
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
