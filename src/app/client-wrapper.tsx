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
    <SessionProvider>
      <QueryProvider>
        <SignInModal />
        <RegisterModal />
        {children}
        <Toaster />
      </QueryProvider>
    </SessionProvider>
  );
}
