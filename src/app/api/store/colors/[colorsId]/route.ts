import prismadb from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  { params }: { params: { colorsId: string } }
) => {
  try {
    const colors = await prismadb.color.findUnique({
      where: {
        id: params.colorsId,
      },
    });

    if (!colors) {
      return NextResponse.json(
        { message: "No category found" },
        { status: 404 }
      );
    }
    return NextResponse.json(colors, { status: 200 });
  } catch (error) {
    console.log(error);
  }
};
