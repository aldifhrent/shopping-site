import { axiosInstance } from "@/lib/axios";
import { ProductValues } from "@/lib/schema";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useAddProduct = () => {
  return useMutation({
    mutationFn: async (data: ProductValues) => {
      console.log("Attempting to send data to API:", data);
      try {
        const response = await axiosInstance.post("/api/store/products", data);
        console.log("API response:", response);
        return response.data;
      } catch (error) {
        console.error("API call failed:", error);
        throw error;
      }
    },
    onError: (err: Error) => {
      console.error("Mutation error:", err);
      toast.error(err.message);
    },
    onSuccess: () => {
      console.log("Product added successfully");
      toast.success("Product added successfully");
    },
  });
};
