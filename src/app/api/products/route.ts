import prismadb from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { getSession } from "next-auth/react";
import { auth } from "../../../../auth";
import { error } from "console";
import { ProductDTO } from "@/lib/schema";
export const GET = async () => {
  try {
    const products = await prismadb.product.findMany({});
    return NextResponse.json(products);
  } catch (err) {
    console.error(err);
    return new Response("Internal Server Error", { status: 500 });
  }
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const result = ProductDTO.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ error: "Invalid input data" }, { status: 400 });
    }

    const { name, description, price, images } = result.data;

    const product = await prismadb.product.create({
      data: {
        name,
        description,
        price,
        images,
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    console.error("[PRODUCT_POST]", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
