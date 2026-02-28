import { fetchCart } from "@/lib/services/cart-item.service";
import { useQuery } from "@tanstack/react-query";

export function useCart() {
  return useQuery({
    queryKey: ["cart"],
    queryFn: fetchCart,
  });
}