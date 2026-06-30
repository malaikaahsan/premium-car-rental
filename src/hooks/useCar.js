import { useQuery } from "@tanstack/react-query";
import { getCarById } from "../services/carService";

export default function useCar(id) {
  return useQuery({
    queryKey: ["car", id],
    queryFn: () => getCarById(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
}