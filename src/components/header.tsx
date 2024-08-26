"use client";

import Image from "next/image";
import { useCart } from "@/features/cart/hooks/use-cart";
import Link from "next/link";
import { useRegisterModal } from "@/app/hooks/registerModal";
import { useLoginModal } from "@/app/hooks/loginModal";
import Wrapper from "./wrapper";
import NavItems from "./navItems";
import NavMobile from "./navMobile";
import { navbar } from "@/const";
import { cn } from "@/lib/utils";
import SheetCart from "./sheet-cart";
const Header = () => {
  return (
    <Wrapper>
      <header className="flex justify-between items-center ">
        <Image src="./logo.svg" alt="" width={150} height={150} />
        <NavItems />
        {/* Mobile  */}
        <NavMobile />
      </header>
    </Wrapper>
  );
};

export default Header;
