import { useCart } from "@/features/cart/hooks/use-cart";
import { formatPrice } from "@/lib/formatprice";
import Image from "next/image";
import { X } from "lucide-react";
import { Product } from "@prisma/client";

interface CardItem {
  data: Product;
}
const CartItem = ({ data }: CardItem) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeFromCart(data.id);
  };
  return (
    <li className="flex py-6 border-b">
      <div className="relative h-48 w-48 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          src={data.images || "/arrivals/arrivals-1.svg"}
          alt={data.name}
          width="100"
          height="100"
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <X onClick={onRemove} />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className=" text-lg font-semibold text-black">{data.name}</p>
          </div>

          <p>{formatPrice(data.price)}</p>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
