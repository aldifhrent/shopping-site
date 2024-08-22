import prismadb from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  { params }: { params: { categoryId: string } }
) => {
  try {
    const category = await prismadb.category.findUnique({
      where: {
        id: params.categoryId,
      },
    });

    if (!category) {
      return NextResponse.json(
        { message: "No category found" },
        { status: 404 }
      );
    }
    return NextResponse.json(category, { status: 200 });
  } catch (error) {
    console.log(error);
  }
};
