"use client";

import { Product } from "@prisma/client";
import React from "react";
import Image from "next/image";
import { formatPrice } from "@/lib/formatprice";
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/features/cart/hooks/use-cart";

interface CartProps {
  data: Product;
}
const CartItem = ({ data }: CartProps) => {
  const cart = useCart();
  return (
    <div className="flex justify-between">
      <div className="flex gap-2">
        <Image
          src={data.images || "/arrivals/arrivals-1.svg"}
          width={100}
          height={100}
          alt={data.name}
        />
        <div>
          <h1 className="font-semibold text-lg">{data.name}</h1>
          <p>{data.description}</p>
          <Button
            variant="destructive"
            size="icon"
            className="mt-2"
            onClick={() => cart.removeFromCart(data.id)}
          >
            <Trash className="size-4" />
          </Button>
        </div>
      </div>
      <div>
        <h3>{formatPrice(data.price)}</h3>
      </div>
    </div>
  );
};

export default CartItem;
