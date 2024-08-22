"use client";

import { formatPrice } from "@/lib/formatprice";
import { cn } from "@/lib/utils";
import { Product } from "@prisma/client";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { useCart } from "@/features/cart/hooks/use-cart";

interface ArrivalsProps {
  product: Product;
}
const ArrivalsCard = ({ product }: ArrivalsProps) => {
  const cart = useCart();
  return (
    <div className="max-w-[229.9px] max-h-[384.13px]">
      <div className="flex flex-col">
        <Link href={`/product/${product.id}`}>
          <Image
            src={product.images || "/arrivals/arrivals-1.svg"}
            alt="Arrival Products"
            width={229.9}
            height={334.4}
          />
        </Link>

        <h1
          className={cn(
            "font-medium mt-[13.3px] text-[13px] md:text-[15.2px] "
          )}
        >
          {product.name}
        </h1>
        <p className="text-[10px] md:text-[11.4px] font-medium leading-[23.8px] text-[#7F7F7F]">
          {formatPrice(product.price)}
        </p>
        <Button
          onClick={() => {
            if (product.quantity > 0) {
              cart.addToCart(product);
            }
          }}
          disabled={product.quantity === 0}
        >
          {product.quantity == 0 ? "Out Of Stock" : "Order Now"}
        </Button>
      </div>
    </div>
  );
};

export default ArrivalsCard;
