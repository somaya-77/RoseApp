"use client";
import { getProductDetails } from "@/lib/_services/product-details.service";
import { useQuery } from "@tanstack/react-query";

export default function useProductDetails(id: string) {
  console.log("id", id)
  const { isLoading, data, error } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductDetails(id),
    enabled: !!id, // only fetch if id exists
  });

  return {
    isLoading,
    product: data,
    error,
  };
}