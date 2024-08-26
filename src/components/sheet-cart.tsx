import React from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { useCart } from "@/features/cart/hooks/use-cart";
import { formatPrice } from "@/lib/formatprice";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Abel } from "next/font/google";
import Image from "next/image";
import { Product } from "@prisma/client";
import toast from "react-hot-toast";
import CartItem from "./cart/cart-item";

const abel = Abel({ weight: "400", subsets: ["latin"] });

const SheetCart = () => {
  const cart = useCart();

  return (
    <Sheet>
      <SheetTrigger className={cn("cursor-pointer text-gray-500 hover:text-black",abel.className)}>
        CART {cart.cart.length > 0 ? `(${cart.cart.length})` : ''}
      </SheetTrigger>
      <SheetContent>
        <SheetTitle>Shopping Cart</SheetTitle>
        <div className="lg:col-span-7">
          {cart.cart.length === 0 && <p>No items add to cart</p>}
          {cart.cart.map((cartItem, index) => (
            <CartItem key={index} data={cartItem} />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SheetCart;
