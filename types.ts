export interface Product {
  id: string;
  name: string;
  description: string | null;
  quantity: number;
  price: number;
  images: string | null;
  categories: {
    id: string;
    name: string;
  }[];
  colors: {
    id: string;
    name: string;
  }[];
  createdAt: Date;
  updatedAt: Date;
}
