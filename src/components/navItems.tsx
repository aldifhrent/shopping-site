"use client";

import React from "react";
import { Button } from "./ui/button";
import { abel, navbar } from "@/const";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { signOut, useSession } from "next-auth/react";
import { UserCircle } from "lucide-react";
import { useRegisterModal } from "@/app/hooks/registerModal";
import { useLoginModal } from "@/app/hooks/loginModal";
import { useCart } from "@/features/cart/hooks/use-cart";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const NavItems = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const user = useSession();
  const pathname = usePathname();
  const cart = useCart();
  return (
    <nav className="hidden md:flex justify-between space-x-[56px] items-center">
      {navbar.map((nav) => (
        <Link
          href={nav.href}
          key={nav.name}
          className={cn(
            "cursor-pointer hover:text-black",
            abel.className,
            pathname == nav.href ? "text-black font-bold" : "text-gray-500 "
          )}
        >
          {nav.name}
        </Link>
      ))}
      {user.status == "authenticated" ? (
        <DropdownMenu>
          <DropdownMenuTrigger className="flex gap-1">
            <Avatar className="w-full rounded-full object-cover">
              <AvatarImage src={user.data.user?.image || ""} />
              <AvatarFallback> {user.data?.user?.name}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="mt-2">
            <DropdownMenuItem>
              <Link href="/cart"> {`Cart (${cart.cart.length})`}</Link>
            </DropdownMenuItem>
            <DropdownMenuItem disabled>Favorites</DropdownMenuItem>
            <DropdownMenuItem disabled>Settings</DropdownMenuItem>
            <DropdownMenuItem onClick={() => signOut()}>
              Log Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div className="flex gap-x-3 w-full h-full divide-x-3">
          <Button onClick={registerModal.onOpen}>Sign Up</Button>

          <Button onClick={loginModal.onOpen} variant="outline">
            Sign In
          </Button>
        </div>
      )}
    </nav>
  );
};

export default NavItems;
