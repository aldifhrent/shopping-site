"use client";

import Image from "next/image";
<<<<<<< HEAD
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
=======
import { Abel } from "next/font/google";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import { useCart } from "@/features/cart/hooks/use-cart";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Menu, X } from "lucide-react"; // Import the Menu icon
import { signOut } from "next-auth/react";
import SheetCart from "./sheet-cart";
import { navbar } from "@/const";
import { Button } from "./ui/button";
import Wrapper from "./wrapper";
import Link from "next/link";
import { useRegisterModal } from "@/app/hooks/registerModal";
import { useLoginModal } from "@/app/hooks/loginModal";
import { Separator } from "./ui/separator";
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

  return (
    <Wrapper>
      <header className="h-full w-full">
>>>>>>> 8d80a130897fc9effc781d0d54fe31fcf3c1f3fe
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" height={29} width={115.5} />
          </Link>
<<<<<<< HEAD
          <NavItems />
          {/* Mobile  */}
          <NavMobile />
=======

          <nav className="hidden lg:flex justify-between space-x-[56px] items-center">
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
            <SheetCart />
            {user ? (
              <div className="flex gap-x-2 w-full h-full">
                <Button onClick={registerModal.onOpen}>Sign Up</Button>
                <Separator orientation="vertical" className="text-black" />
                <Button onClick={loginModal.onOpen} variant="outline">
                  Sign In
                </Button>
              </div>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger className="p-2 focus:outline-none">
                  <div className="flex items-center gap-x-2">
                    <Image
                      src={user || ""}
                      width={30}
                      height={30}
                      alt={user || ""}
                      className="rounded-full"
                    />
                    <h1
                      className={cn(
                        "cursor-pointer font-bold hover:text-black",
                        abel.className
                      )}
                    >
                      Hi,{" "}
                      <span className="font-bold">{user}</span>
                    </h1>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => signOut()}>
                    Log Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </nav>

          {/* Mobile */}
          <button
            onClick={handleOpen}
            className={cn(
              "z-50 lg:hidden transition-transform duration-300 ease-in-out",
              isOpen ? "rotate-180" : "rotate-0"
            )}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <nav
            className={cn(
              "fixed inset-0 lg:hidden flex flex-col justify-center items-center w-full h-full bg-gray-400 space-y-4 transition-transform duration-300 ease-in-out z-40",
              isOpen ? "translate-y-0" : "-translate-y-full"
            )}
          >
            {navbar.map((nav) => (
              <Link
                href={nav.href}
                key={nav.name}
                className={cn(
                  "cursor-pointer text-2xl text-white hover:text-black hover:bg-gray-500 px-4 py-2",
                  abel.className
                )}
              >
                {nav.name}
              </Link>
            ))}
             {user ? (
              <div className="flex flex-col gap-y-2 divide divide-y-2 overflow-y-hidden ">
                <Button onClick={registerModal.onOpen}>Sign Up</Button>
                <Button onClick={loginModal.onOpen} variant="outline">
                  Sign In
                </Button>
              </div>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger className="p-2 focus:outline-none">
                  <div className="flex items-center gap-x-2">
                    <Image
                      src={user || ""}
                      width={30}
                      height={30}
                      alt={user || ""}
                      className="rounded-full"
                    />
                    <h1
                      className={cn(
                        "cursor-pointer font-bold hover:text-black",
                        abel.className
                      )}
                    >
                      Hi,{" "}
                      <span className="font-bold">{user}</span>
                    </h1>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => signOut()}>
                    Log Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </nav>
>>>>>>> 8d80a130897fc9effc781d0d54fe31fcf3c1f3fe
        </div>
      </header>
    </Wrapper>
  );
};

export default Header;
