import prismadb from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const sizes = await prismadb.size.findMany();

    if (!sizes || sizes.length === 0) {
      return NextResponse.json({ message: "No sizes found" }, { status: 404 });
    }

    return NextResponse.json(sizes, { status: 200 });
  } catch (error) {
    console.error("Error fetching sizes:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
};
