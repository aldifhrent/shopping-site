import prismadb from "@/lib/db";
import { useSession } from "next-auth/react";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../../../../auth";
import { ProductDTO } from "@/lib/schema";
import { getProductData } from "@/lib/types";

export const GET = async () => {
  try {
    const user = await auth();

    if (!user) {
      throw new Error("User not found");
    }
    const products = await prismadb.product.findMany({
      include: {
        categories: true,
        color: true,
        size: true,
      },
    });

    if (!products || products.length === 0) {
      return NextResponse.json(
        { message: "No products found" },
        { status: 404 }
      );
    }

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
};

export const POST = async () => {
  try {
    const user = await auth();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const addProduct = await prismadb.product.create({
      data: getProductData,
    });

    return NextResponse.json(addProduct, { status: 201 });
  } catch (error) {
    console.error("Error adding product:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
