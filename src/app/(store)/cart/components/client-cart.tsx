"use client";

import Wrapper from "@/components/wrapper";
import { useCart } from "@/features/cart/hooks/use-cart";
import { useSession } from "next-auth/react";
import React from "react";
import CartItem from "./CartItems";
import { Product } from "@prisma/client";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const ClientCart = () => {
  const carts = useCart((state) => state.cart);
  const user = useSession();
  return (
    <div className="flex w-full h-full px-24 py-12">
      <div className="flex flex-col w-9/12">
        {carts.map((product: Product, index: number) => (
          <div key={index} className="mb-2">
            <CartItem data={product} />
            <Separator className="mt-2" />
          </div>
        ))}
      </div>
      {/* Right Box */}
      <div></div>
    </div>
  );
};

export default ClientCart;
