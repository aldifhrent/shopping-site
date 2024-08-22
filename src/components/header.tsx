"use client";

import Image from "next/image";
import { useCart } from "@/features/cart/hooks/use-cart";
import Link from "next/link";
import { useRegisterModal } from "@/app/hooks/registerModal";
import { useLoginModal } from "@/app/hooks/loginModal";
import Wrapper from "./wrapper";
import NavItems from "./navItems";
import NavMobile from "./navMobile";

const Header = () => {
  return (
    <Wrapper>
      <header className="h-full w-full ">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" height={29} width={115.5} />
          </Link>
          <NavItems />
          {/* Mobile  */}
          <NavMobile />
        </div>
      </header>
    </Wrapper>
  );
};

export default Header;
