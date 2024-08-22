"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React, { useEffect, useState } from "react";
import ActionDashboard from "../components/action-dashboard";
import { formatPrice } from "@/lib/formatprice";
import { axiosInstance } from "@/lib/axios";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { EllipsisVertical } from "lucide-react";
import { slugify } from "@/lib/utils";
import { ProductType } from "@/lib/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Product } from "@prisma/client";
import useRemoveData from "./action";
import useFetchProducts from "@/app/hooks/useFetchProduct";

const ProductsDashboard = () => {
  const { data: products } = useFetchProducts();

  const handleDelete = () => {};
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>No</TableHead>
          <TableHead>Product Name</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products?.data?.map((product: Product, index: number) => (
          <TableRow key={product.id}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{product.name}</TableCell>
            <TableCell>
              {/* {product.ca.map(
                (category: Category) => category.name
              ).join(", ")} */}
            </TableCell>
            <TableCell>{formatPrice(product.price)}</TableCell>
            <TableCell>{product.quantity}</TableCell>
            <TableCell>
              {product.quantity === 0 ? "Out Of Stock" : "Ready"}
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex gap-1">
                  <EllipsisVertical />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="mt-2">
                  <Link href={`/dashboard/products/edit/${product.name}`}>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                  </Link>
                  <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ProductsDashboard;
