import { Category } from "@prisma/client";

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
