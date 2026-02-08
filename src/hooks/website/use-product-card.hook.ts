
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { useProducts } from "@/hooks/website/use-products.hook";
import { useWishlist } from "@/hooks/website/use-wishlist.hook";

export interface Props {
    initialPage: number;
    initialData: any;
}
export function useProductCardHook({ initialPage, initialData }: Props) {

    const router = useRouter();
    const searchParams = useSearchParams();
    const queryClient = useQueryClient();

    const { toggleWishlist, getGuestWishlist } = useWishlist();

    const page = Number(searchParams.get("page") ?? initialPage);
    const filters = Object.fromEntries(
        [...searchParams.entries()].filter(([k]) => k !== "page")
    );

    const { data, isLoading, isFetching, error } = useProducts({
        page,
        filters,
        initialData,
    });

    const products = data?.products ?? [];
    const totalPages = data?.metadata?.totalPages ?? 1;


    /* ================= Apply Cookies Wishlist ================= */
    useEffect(() => {
        const guestWishlist = getGuestWishlist();
        if (!guestWishlist.length) return;

        queryClient.setQueriesData(
            { queryKey: ["products"], exact: false },
            (old: any) => {
                if (!old) return old;

                return {
                    ...old,
                    products: old.products.map((p: any) => ({
                        ...p,
                        isInWishlist: guestWishlist.includes(p._id),
                    })),
                };
            }
        );
    }, [queryClient, getGuestWishlist]);
    /* ========================================================== */

    const handlePageChange = (p: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", String(p));
        router.push(`?${params.toString()}`);
    };
    return { error, isLoading, products, totalPages, page, handlePageChange,isFetching }
}