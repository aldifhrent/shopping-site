import Image from "next/image";
import { Button } from "./ui/button";
import Wrapper from "./wrapper";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
const Hero = () => {
  return (
    <Wrapper>
      <div className="mt-[24.9px] w-full h-full bg-[#F4F6F5] rounded-xl">
        <div className="flex flex-col justify-between md:flex-row  ">
          <div className="flex flex-col pl-[56.53px] pb-[43.15px] pt-[36.57px]">
            <h1
              className={cn(
                "max-w-[225.15px] font-bold text-[45.6px] uppercase"
              )}
            >
              let&apos;s explore{" "}
              <span className="bg-[#EBD96B] rotate-5 px-[12px]">unique</span>{" "}
              clothes.
            </h1>
            <p
              className={cn(
                "text-[15.2px] tracking-[-5%] mt-[19px] mb-[15.2px]"
              )}
            >
              Live for Influential and Innovative fashion!
            </p>
            <Button
              className={cn(
                "bg-[#000000] px-[15.12px]py-[9.1px] max-w-[104px]"
              )}
            >
              SHOP NOW
            </Button>
          </div>
          <div className="flex items-end">
            <Image src="/hero.svg" alt="Hero Images" width={422} height={377} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
