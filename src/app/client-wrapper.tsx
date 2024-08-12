'use client'

import RegisterModal from "@/components/ui/register-modal";
import SignInModal from "@/components/ui/sign-in-modal";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

type ClientWrapper = {
  children: React.ReactNode;
};
export default function ClientWrapper({ children }: ClientWrapper) {
  return (
    <SessionProvider>
      <SignInModal />
      <RegisterModal />
      {children}
      <Toaster/>
    </SessionProvider>
  );
}
