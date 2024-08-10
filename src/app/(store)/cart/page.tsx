import { useCart } from "@/features/cart/hooks/use-cart";
import React from "react";

const CartPage = () => {
  const cart = useCart();

  return <div>CartPage</div>;
};

export default CartPage;
