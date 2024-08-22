"use client";

import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const DashboardHeader = () => {
  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    redirect("/");
  }
  return (
    <div className="flex flex-row space-x-4 items-center justify-end p-4">
      <Image
        src={session?.user?.image || ""}
        alt="Image User"
        width={40}
        height={30}
        className="rounded-full"
      />
      <h1> Welcome, {session?.user?.name}</h1>
    </div>
  );
};

export default DashboardHeader;
