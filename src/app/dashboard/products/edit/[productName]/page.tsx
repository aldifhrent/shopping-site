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
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMutation } from "@tanstack/react-query";
import { ProductType } from "@/lib/types";
import { useFetchProductId } from "./mutation";

const DashboardProductEdit = ({
  params,
}: {
  params: { productName: string };
}) => {
  const form = useForm<z.infer<typeof ProductDTO>>({
    resolver: zodResolver(ProductDTO),
  });

  const product = useFetchProductId();
  console.log(product.mutate);
  useEffect(() => {
    if (params.productName) {
      product.mutate(params.productName, {
        onSuccess: (data: any) => {
          form.reset({
            name: data.name,
            description: data.description,
            price: data.price,
          });
        },
      });
    }
  }, [params.productName, form, product]);

  const onSubmit = (values: z.infer<typeof ProductDTO>) => {
    console.log(values);
  };

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
                  <FormLabel>Price</FormLabel>
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
            {/* <FormField
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
                          field.onChange(e.target.files[0]);
                        }
                      }}
                    />
                  </FormControl>
                </FormItem>
              )}
            /> */}
            {/* <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantity</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Quantity" {...field} />
                  </FormControl>
                </FormItem>
              )}
            /> */}
            {/* <FormField
              control={form.control}
              name="Categories"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Categories</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={(value) => {
                        const selectedCategory = product.data.find(
                          (cat: ProductType) => cat.id === value
                        );
                        if (selectedCategory) {
                          field.onChange([
                            ...field.value.filter(
                              (cat) => cat.id !== selectedCategory.id
                            ),
                            selectedCategory,
                          ]);
                        }
                      }}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select categories" />
                      </SelectTrigger>
                      <SelectContent>
                        {product.data.map((category: ProductType) => (
                          <SelectGroup key={category.id}>
                            <SelectItem value={category.id}>
                              {category.name}
                            </SelectItem>
                          </SelectGroup>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            /> */}
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default DashboardProductEdit;
