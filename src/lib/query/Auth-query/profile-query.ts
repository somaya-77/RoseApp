import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ChangePasswordSchemaType } from "@/lib/schemas/dashboard/change-password.schema";

// change password
export const useChangePasswordMutation = () => {
    const router = useRouter();
    return useMutation({
        mutationFn: async (data: ChangePasswordSchemaType) => {
            const res = await axiosInstance.put(`auth/change-password`, data);
            return res.data;
        },
        onSuccess: (data) => {
            toast.success(data?.message);
            console.log("Registered successfully:", data);
            router.push(`/login`);
        },
        onError: (error: any) => {
            console.log("Error during registration:", error.response?.data || error.message);
            const errorMessage = error.response?.data?.message || "Something went wrong";
            toast.error(errorMessage);
        },
    });
};