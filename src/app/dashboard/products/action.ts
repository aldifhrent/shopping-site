import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export default function useRemoveData(productId: string) {
  const mutate = useMutation({
    mutationFn: async () => {
      await axiosInstance.delete("/api/store/products/" + productId);
    },
  });

  return mutate;
}
