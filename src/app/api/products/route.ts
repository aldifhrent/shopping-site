import prismadb from "@/lib/db";
import { NextResponse } from "next/server";
import { getSession } from "next-auth/react";
import { auth } from "../../../../auth";
import { error } from "console";
export const GET = async () => {
  try {
    const products = await prismadb.product.findMany({});
    return NextResponse.json(products);
  } catch (err) {
    console.error(err);
    return new Response("Internal Server Error", { status: 500 });
  }
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, description, price, images } = body;

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
  }
}
