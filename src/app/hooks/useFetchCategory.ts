import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export default function useFetchCategory() {
  const query = useQuery({
    queryKey: ["fetch-category"],
    queryFn: async () => {
      return await axiosInstance.get("/api/store/category");
    },
  });

  return query;
}
