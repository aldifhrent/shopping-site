import prismadb from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  { params }: { params: { productName: string } }
) => {
  try {
    const product = await prismadb.product.findFirst({
      where: {
        name: params.productName,
      },
      include: {
        categories: true,
      },
    });

    if (!product) {
      return NextResponse.json(
        { message: "No product found" },
        { status: 404 }
      );
    }
    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    console.log(error);
  }
};
