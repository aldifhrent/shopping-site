"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";
import Image from "next/image";
const DashboardPage = () => {
  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    redirect("/");
  }

  return (
    <div className="container">
      <div className="flex flex-row space-x-4 items-center mt-12 justify-end">
        <Image
          src={session?.user?.image || ""}
          alt="Image User"
          width={40}
          height={30}
          className="rounded-full"
        />
        <h1> Welcome, {session?.user?.name}</h1>
      </div>

      <Table className="mt-12">
        <TableCaption>A list of your order.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead>Product Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Testor</TableCell>
            <TableCell>TShirt</TableCell>
            <TableCell>1</TableCell>
            <TableCell>PENDING PAYMENT</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2</TableCell>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Testor</TableCell>
            <TableCell>TShirt</TableCell>
            <TableCell>1</TableCell>
            <TableCell>PENDING PAYMENT</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default DashboardPage;
