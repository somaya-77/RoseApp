"use client";

import { useMutation } from "@tanstack/react-query";
import { CreateCashOrderPayload } from "@/lib/types/address";
import { createOrderCash } from "@/lib/actions/order-cash.action";

export const useOrderCash = () => {
  return useMutation({
    mutationFn: async (payload: CreateCashOrderPayload) =>
      await createOrderCash(payload),
  });
};