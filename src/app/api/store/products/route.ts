import prismadb from "@/lib/db";
import { useSession } from "next-auth/react";
import { NextResponse } from "next/server";
import { auth } from "../../../../../auth";

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
