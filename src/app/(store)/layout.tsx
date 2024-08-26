import Header from "@/components/header";
import Wrapper from "@/components/wrapper";
import { Children } from "react";

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}
