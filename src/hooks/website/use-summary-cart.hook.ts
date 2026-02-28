"use client";

import { useTranslations, useLocale } from "next-intl";
import { useSession } from "next-auth/react";
import { useRouter } from "@/i18n/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchCartResponse } from "@/lib/services/cart.service";

export function useSummaryCart() {

    //Translation
    const t = useTranslations("cart.summary");
    const locale = useLocale();
    const isRTL = locale === "ar";

    //Hooks
    const router = useRouter();
    const { data: session } = useSession();

    //Queries
    const { data: cartResponse } = useQuery({
        queryKey: ["cart-response"],
        queryFn: fetchCartResponse,
    });

    //State
    const total = cartResponse?.cart?.totalPrice || 0;
    const isAuthenticated =
        !!session?.accessToken ||
        (typeof window !== "undefined" && !!sessionStorage.getItem("token"));
    const isCheckoutDisabled = total === 0 || !isAuthenticated;

    //Function
    const handleCheckout = () => {
        if (isCheckoutDisabled) {
            router.push("/login");
            return;
        }

        router.push("/checkout");
    };


    return {
        isRTL, t, total, isCheckoutDisabled, handleCheckout 
    }
}