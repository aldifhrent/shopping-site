import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export default function useFetchProducts() {
  const query = useQuery({
    queryKey: ["fetch-products"],
    queryFn: async () => {
      return await axiosInstance.get("/api/store/products");
    },
  });

  return query;
}
