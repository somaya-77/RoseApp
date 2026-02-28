"use client";

import React, { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import { toast } from "sonner";
import { useOrderCash } from "@/hooks/website/use-order-cash";
import { Address } from "@/lib/types/address";
import { cn } from "@/lib/utils/utils";
import { useAddToOrder } from "@/hooks/website/use-add-to-order";
import { Card, CardContent, Button, Icon, Separator } from "@/components";
import { PaymentMethod, PaymentMethodStepProps } from "@/lib/types/props.type";

export function usePayment() {
    // Translation
    const t = useTranslations("cart.payment");
    const locale = useLocale();
    const isRTL = locale === "ar";
    const router = useRouter();

    // State
    const [selectedPayment, setSelectedPayment] = useState<"cash" | "card" | "">(
        "",
    );



    // React Query mutation
    const { mutate: createCashOrderMutation, isPending } = useOrderCash();
    const { mutate: createCardOrderMutation, isPending: isCardPending } =
        useAddToOrder();

    // Checkout handler
    const handleCheckout = () => {
        if (!selectedPayment) return;

        if (selectedPayment === "cash") {
            handleCashCheckout();
        }

        if (selectedPayment === "card") {
            handleCardCheckout();
        }
    };

    // Cash order
    const handleCashCheckout = () => {
        const storedAddress = localStorage.getItem("selectedAddress");
        if (!storedAddress) {
            toast.error("No address selected");
            return;
        }

        const parsedAddress: Address = JSON.parse(storedAddress);
        const { _id, username, ...shippingAddress } = parsedAddress;

        // Optional token from sessionStorage
        const clientToken = sessionStorage.getItem("accessToken") || undefined;

        createCashOrderMutation(
            { shippingAddress, clientToken },
            {
                onSuccess: () => {
                    toast.success("Order created successfully!", {
                        duration: 2000,
                        onAutoClose: () => router.push("/allOrders"),
                    });
                    localStorage.removeItem("selectedAddress");
                },
                onError: (error: unknown) => {
                    if (error instanceof Error) {
                        toast.error(`Cash order failed: ${error.message}`, {
                            duration: 3000,
                        });
                    }
                },
            },
        );
    };

    // Card order
    const handleCardCheckout = () => {
        const storedAddress = localStorage.getItem("selectedAddress");

        if (!storedAddress) {
            toast.error("No address selected");
            return;
        }

        const parsedAddress: Address = JSON.parse(storedAddress);
        const { _id, username, ...shippingAddress } = parsedAddress;

        const clientToken = sessionStorage.getItem("accessToken") || undefined;

        createCardOrderMutation(
            { shippingAddress, clientToken },
            {
                onSuccess: (data) => {
                    if (data?.session?.url) {
                        window.location.href = data.session.url;
                    } else {
                        toast.error("Stripe session URL not found");
                    }
                    localStorage.removeItem("selectedAddress");
                },
                onError: (error: unknown) => {
                    if (error instanceof Error) {
                        toast.error(error.message);
                    }
                },
            },
        );
    };

    return {isRTL, t,selectedPayment,setSelectedPayment, handleCheckout,isPending, isCardPending}
}