'use client';

import { cn } from "@/lib/utils";
import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useCart } from "@/features/cart/hooks/use-cart";

interface ProductCardProps {
  id: string;
  images?: string;
  name?: string;
  price?: string;
  onClick?: (product: Product) => void;
}

const ProductCard = ({ id, images, name, price, onClick }: ProductCardProps) => {
  return (
    <div className="max-w-[229.9px] max-h-[384.13px]">
      <div className="flex flex-col items-start">
        <Image
          src={images || "/arrivals/arrivals-1.svg"}
          alt={name || "Arrival Products"}
          width={229.9}
          height={334.4}
        />

        <h1 className={cn("font-medium mt-[13.3px] text-[13px] md:text-[15.2px] ")}>
          {name || "Arrival Products"}
        </h1>
        <p>{price}</p>
        <button>
          <Link
            href={`/product/${id}`}
            className="text-[10px] md:text-[11.4px] font-medium leading-[23.8px] text-[#7F7F7F]"
          >
            View Details
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
