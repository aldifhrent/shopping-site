import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const useFetchProductId = () => {
  const mutation = useMutation({
    mutationFn: async (productName: string) => {
      const response = await axiosInstance.get(`/api/products/${productName}`);
      if (!response) throw new Error(`Product ${productName} not found`);
      return response.data;
    },
  });

  return mutation;
};
