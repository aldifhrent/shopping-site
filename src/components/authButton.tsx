"use client";

import { signOut, useSession } from "next-auth/react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { UserCircle } from "lucide-react";
import { Button } from "./ui/button";
import { useRegisterModal } from "@/app/hooks/registerModal";
import { useLoginModal } from "@/app/hooks/loginModal";

const AuthButton = () => {
  const user = useSession();
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  return (
    <div>
      {user.status == "authenticated" ? (
        <DropdownMenu>
          <DropdownMenuTrigger className="flex gap-1">
            <UserCircle />
            {user.data?.user?.name}
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="mt-2">
            <DropdownMenuItem disabled>Favorites</DropdownMenuItem>
            <DropdownMenuItem disabled>Settings</DropdownMenuItem>
            <DropdownMenuItem onClick={() => signOut()}>
              Log Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div className="flex gap-x-3 w-full h-full divide-x-3">
          <Button onClick={() => registerModal.isOpen}>Sign Up</Button>

          <Button onClick={() => loginModal.isOpen} variant="outline">
            Sign In
          </Button>
        </div>
      )}
    </div>
  );
};

export default AuthButton;
