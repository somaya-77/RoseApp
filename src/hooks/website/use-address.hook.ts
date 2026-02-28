"use client";

import { useQuery } from "@tanstack/react-query";
import type { Address } from "@/lib/types/address";
import { getAddresses } from "@/lib/services/get-address.service";

export default function useAddresses() {
  const { data, isLoading, error } = useQuery<Address[]>({
    queryKey: ["addresses"],
    queryFn: getAddresses,
  });

  return {
    addresses: data ?? [],
    isLoading,
    error,
  };
}