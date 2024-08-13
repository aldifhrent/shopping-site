import { Product } from "@prisma/client";
import toast from "react-hot-toast";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface StoreState {
  cart: Product[];
  addToCart: (userId: string, product: Product, quantity?: number) => void;
  removeFromCart: (userId: string, productId: string) => void;
  clearCart: (userId: string) => void;
}

// Helper function to create a cart store
const createCartStore = (userId: string) =>
  create<StoreState>()(
    persist(
      (set) => ({
        cart: [],
        addToCart: (userId, product, quantity = 1) =>
          set((state) => {
            const existingItem = state.cart.find(
              (item) => item.id === product.id
            );
            if (existingItem) {
              toast.error("Product is already added to cart");
              return {
                cart: state.cart.map((item) =>
                  item.id === product.id ? { ...item } : item
                ),
              };
            }
            toast.success(`${product.name} added to cart`);
            return { cart: [...state.cart, { ...product, quantity }] };
          }),
        removeFromCart: (userId, productId) =>
          set((state) => {
            const newCart = state.cart.filter(
              (item) => item.id !== productId
            );
            toast.success("Product removed from cart");
            return { cart: newCart };
          }),
        clearCart: (userId) =>
          set(() => {
            toast.success("Cart cleared");
            return { cart: [] };
          }),
      }),
      {
        name: `cart-storage-${userId}`, // Unique storage key for each user
        storage: createJSONStorage(() => localStorage),
      }
    )
  );

export const useCart = (userId: string) => createCartStore(userId);
