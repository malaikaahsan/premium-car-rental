import { useQuery } from "@tanstack/react-query";
import { getCars } from "../services/carService";

export default function useCars() {
  return useQuery({
    queryKey: ["cars"],
    queryFn: getCars,
    staleTime: 1000 * 60 * 5,
  });
}