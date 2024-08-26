"use client";

import RegisterModal from "@/components/ui/register-modal";
import SignInModal from "@/components/ui/sign-in-modal";
import QueryProvider from "@/lib/query-provider";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

type ClientWrapper = {
  children: React.ReactNode;
};
export default function ClientWrapper({ children }: ClientWrapper) {
  return (
<<<<<<< HEAD
    <SessionProvider>
      <QueryProvider>
        <SignInModal />
        <RegisterModal />
        {children}
      </QueryProvider>
      <Toaster />
    </SessionProvider>
=======
      <SessionProvider>
        <SignInModal />
        <RegisterModal />
        {children}
        <Toaster position="top-right" />
      </SessionProvider>
>>>>>>> 8d80a130897fc9effc781d0d54fe31fcf3c1f3fe
  );
}
