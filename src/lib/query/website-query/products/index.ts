
import { useAxiosAuth } from "@/hooks/auth/use-axios-auth";
import { axiosInstance } from "@/lib/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";




export const useAllProducts = (token: string | undefined) => {
    return useQuery({
        queryKey: ["dashboard", "products", token],
        queryFn: async () => {
            const res = await axiosInstance.get(`products`, {
                headers: {
                    token: token
                }
            });
            return res.data;
        },
    });
};


