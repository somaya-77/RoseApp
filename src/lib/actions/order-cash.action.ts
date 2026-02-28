"use server";

import { CreateCashOrderPayload, CreateCashOrderResponse } from "../types/address";
import getToken from "../utils/manage-token";

export const createOrderCash = async ({
  shippingAddress,
  clientToken,
}: CreateCashOrderPayload): Promise<CreateCashOrderResponse> => {
  const token = await getToken();

  if (!token) throw new Error("Not logged in");

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token?.accessToken || clientToken}`,
    },
    body: JSON.stringify({ shippingAddress }),
    cache: "no-store",
  });

  const data = await response.json();
  if (!response.ok)
    throw new Error(data?.message || "Backend rejected request");

  return data;
};