import prismadb from "@/lib/db";
import { NextResponse } from "next/server";
import { auth } from "../../../../../auth";

export const GET = async () => {
  try {
    const user = auth();

    if (!user) {
      throw new Error("User not found");
    }

    const categories = await prismadb.category.findMany({
      include: {
        product: true,
      },
    });

    if (!categories || categories.length === 0) {
      return NextResponse.json(
        { message: "No categories found" },
        { status: 404 }
      );
    }

    return NextResponse.json(categories, { status: 200 });
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
};
