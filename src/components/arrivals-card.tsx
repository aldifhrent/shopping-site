import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const ArrivalsCard = () => {
  return (
    <div className="max-w-[229.9px] max-h-[384.13px]">
      <div>
        <Image
          src="/arrivals/arrivals-1.svg"
          alt="Arrival Products"
          width={229.9}
          height={334.4}
        />

        <h1 className={cn("font-medium mt-[13.3px] text-[13px] md:text-[15.2px] ")}>
          Hoodies & Sweetshirt
        </h1>
        <Link href='/explore/products' className="text-[10px] md:text-[11.4px] font-medium leading-[23.8px] text-[#7F7F7F]">
          Explore now
        </Link>
      </div>
    </div>
  );
};

export default ArrivalsCard;
