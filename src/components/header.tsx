"use client";

import { useState } from "react";
import Image from "next/image";
import { Abel } from "next/font/google";
import { cn } from "@/lib/utils";
import { signIn, useSession } from "next-auth/react";
import { useCart } from "@/features/cart/hooks/use-cart";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { LogOut, X } from "lucide-react";
import { signOut } from "next-auth/react";
import SheetCart from "./sheet-cart";
import { navbar } from "@/const";
import { Button } from "./ui/button";
import Wrapper from "./wrapper";
import Link from "next/link";
import { useRegisterModal } from "@/app/hooks/registerModal";
import { useLoginModal } from "@/app/hooks/loginModal";
import { Separator } from "./ui/separator";
import SignInModal from "./ui/sign-in-modal";
const abel = Abel({ weight: "400", subsets: ["latin"] });

const Header = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const user = useSession();
  const cart = useCart((state) => state.cart);
  const handleLogin = async (provider: "google" | "github") => {
    try {
      ("user server");
      await signIn(provider);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Wrapper>
      <header className=" h-full w-full">
        <div className="flex justify-between items-center">
          <Image src="/logo.svg" alt="Logo" height={29} width={115.5} />
          <nav className="hidden md:flex justify-between space-x-[56px] items-center">
            {navbar.map((nav) => (
              <Link
                href={nav.href}
                key={nav.name}
                className={cn(
                  "cursor-pointer text-gray-500 hover:text-black",
                  abel.className
                )}
              >
                {nav.name}
              </Link>
            ))}
            {user.status === "unauthenticated" ? (
              <div className="flex gap-x-2 w-full h-full">
              <Button onClick={registerModal.onOpen} >Sign Up</Button>
              <Separator orientation="vertical" className="text-black"/>
              <Button onClick={loginModal.onOpen} variant="outline">Sign In</Button>
              </div>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger className="p-2">
                  <h1
                    className={cn(
                      "cursor-pointer font-bold hover:text-black",
                      abel.className
                    )}
                  >
                    Hi,{" "}
                    {/* <span className="font-bold">{user.data?.username}</span> */}
                  </h1>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => signOut()}>
                    Log Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </nav>
          {/* Mobile  */}

          <X onClick={handleOpen} className="md:hidden" />
          <nav
            className={cn(
              "fixed inset-0 lg:hidden mt-16 px-12 mx-12 w-fit max-h-fit bg-gray-400 space-y-4",
              isOpen ? "block" : "hidden"
            )}
          >
            {navbar.map((nav) => (
              <p
                key={nav.name}
                className={cn(
                  "cursor-pointer  hover:text-black hover:bg-gray-500",
                  abel.className
                )}
              >
                {nav.name}
              </p>
            ))}
          </nav>
        </div>
      </header>
    </Wrapper>
  );
};

export default Header;
