import prismadb from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const colors = await prismadb.color.findMany();

    if (!colors || colors.length === 0) {
      return NextResponse.json({ message: "No colors found" }, { status: 404 });
    }

    return NextResponse.json(colors, { status: 200 });
  } catch (error) {
    console.error("Error fetching colors:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
};
