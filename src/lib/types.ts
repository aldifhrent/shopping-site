import { Category, Prisma } from "@prisma/client";

export interface ProductType {
  products: any;
  id: string;
  name: string;
  description: string | null;
  price: number;
  images: string | null;
  quantity: number;
  category: Category[];
}

export function getProductData() {
  return {
    id: true,
    name: true,
    price: true,
    description: true,
    images: true,
    categories: {
      select: {
        id: true,
        name: true,
      },
    },
  } satisfies Prisma.ProductSelect;
}

export type ProductData = Prisma.UserGetPayload<{
  select: ReturnType<typeof getProductData>;
}>;
