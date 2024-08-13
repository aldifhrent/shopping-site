import prismadb from "@/lib/db";
import { useQuery } from "@tanstack/react-query"


export const useFetchProducts = async() => {
  const productsResponse = await prismadb.product.findMany({})

  return productsResponse;
}

export const useGetProductById = async(productId:string) => {
  const productResponse = await prismadb.product.findUnique({
    where: {
      id: productId
    },
  });

  return productResponse;
}