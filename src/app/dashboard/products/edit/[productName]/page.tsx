"use client";

import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { axiosInstance } from "@/lib/axios";
import { ProductDTO } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMutation } from "@tanstack/react-query";
import { ProductType } from "@/lib/types";
const DashboardProductEdit = ({
  params,
}: {
  params: { productName: string };
}) => {
  const form = useForm<z.infer<typeof ProductDTO>>({
    resolver: zodResolver(ProductDTO),
    defaultValues: {
      id: "", // Ini bisa berupa string kosong atau UUID default
      name: "",
      description: "",
      price: 0,
      images: null, // karena images bisa null
      quantity: 0,
      Categories: [{ id: "", name: "" }], // default untuk array categories
    },
  });

  const onSubmit = (values: z.infer<typeof ProductDTO>) => {
    console.log(values);
  };

  const product = useMutation({
    mutationFn: async (name: string) => {
      const query = await axiosInstance.get("/api/store/products/" + name);

      return query;
    },
  });

  console.log(product.data);
  return (
    <div>
      <Card className="p-12">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Name</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Product Name" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Product Price"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="images"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Images</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          field.onChange(e);
                          // Handle file upload separately if needed
                        }
                      }}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantity</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Quantity" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Categories"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Categories</FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select categories" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectContent>
                          {product.data?.data?.map((category: ProductType) => (
                            <SelectGroup key={category.id}>
                              <SelectItem value={category.id}>
                                {category.name}
                              </SelectItem>
                            </SelectGroup>
                          ))}
                        </SelectContent>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
            {/* Tambahkan fields lainnya sesuai dengan schema ProductDTO */}
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default DashboardProductEdit;
