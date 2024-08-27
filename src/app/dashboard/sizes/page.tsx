"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React, { useState, useEffect } from "react";
import { axiosInstance } from "@/lib/axios";

const SizesPage = () => {
  const [sizes, setSizes] = useState([]);

  const fetchSizes = async () => {
    try {
      const response = await axiosInstance.get("/api/store/sizes");

      setSizes(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSizes();
  });
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Value</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sizes?.map((size: any, index: number) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{size.name}</TableCell>
              <TableCell>{size.value}</TableCell>
              <TableCell></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default SizesPage;
