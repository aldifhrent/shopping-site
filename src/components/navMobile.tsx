"use client";
import { abel, navbar } from "@/const";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import React, { useState } from "react";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
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
    </>
  );
};

export default NavMobile;
