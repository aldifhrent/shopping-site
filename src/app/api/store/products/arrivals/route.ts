import { create } from "zustand";
import prismadb from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const arrivals = await prismadb.product.findMany({
      where: {
        createdAt: {
          gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
        },
      },
    });

    return NextResponse.json(arrivals);
  } catch (err) {}
};
