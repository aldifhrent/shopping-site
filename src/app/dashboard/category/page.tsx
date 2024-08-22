"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import useFetchCategory from "@/app/hooks/useFetchCategory";
import { ProductType } from "@/lib/types";

const Category = () => {
  const { data: category } = useFetchCategory();

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead>Category Name</TableHead>
            <TableHead>Total Product</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {category?.data.map((category: ProductType, index: number) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{category.name}</TableCell>

              <TableCell>{category.category?.length || "N/A"}</TableCell>
              <TableCell></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Category;
