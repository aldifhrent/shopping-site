import prismadb from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  { params }: { params: { sizesId: string } }
) => {
  try {
    const size = await prismadb.size.findUnique({
      where: {
        id: params.sizesId,
      },
    });

    if (!size) {
      return NextResponse.json({ message: "No size found" }, { status: 404 });
    }
    return NextResponse.json(size, { status: 200 });
  } catch (error) {
    console.log(error);
  }
};
