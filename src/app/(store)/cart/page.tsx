import CartItem from "@/components/cart/cart-item";
import { useCart } from "@/features/cart/hooks/use-cart";
import React from "react";
import ClientCart from "./components/client-cart";

const CartPage = () => {
  return (
    <main className="flex flex-col items-center">
      <ClientCart />
    </main>
  );
};

export default CartPage;
