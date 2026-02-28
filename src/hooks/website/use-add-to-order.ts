"use client";

import { useMutation } from "@tanstack/react-query";
import { CreateCardOrderPayload } from "@/lib/types/address";
import { createCardOrder } from "@/lib/actions/card-order.action";

export const useAddToOrder = () => {
  return useMutation({
    mutationFn: async (payload: CreateCardOrderPayload) =>
      await createCardOrder(payload),
  });
};