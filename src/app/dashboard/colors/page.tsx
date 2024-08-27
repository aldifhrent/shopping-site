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
import { axiosInstance } from "@/lib/axios";

const ColorsPage = () => {
  const [color, setColor] = useState([]);

  const fetchColor = async () => {
    try {
      const response = await axiosInstance.get("/api/store/colors");

      setColor(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchColor();
  });
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead>Color Name</TableHead>
            <TableHead>Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {color?.map((color: any, index: number) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{color.name}</TableCell>
              <TableCell>
                <div
                  className="h-6 w-6 rounded-full border"
                  style={{ backgroundColor: `#${color.value}` }}
                />
              </TableCell>

              <TableCell></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ColorsPage;
