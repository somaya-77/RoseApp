// import Cookies from "js-cookie";
'use client'

import { useMutation } from "@tanstack/react-query";
import { RegisterFormValues } from "../schemas/register.schema";
import { loginFormValues } from "../schemas/login.schema";
import { createPasswordFormValues } from "../schemas/create-password.schema";
import { axiosInstance } from "../axios";
import { Toaster } from "@/components/ui/sonner";
import { useRouter } from "next/navigation";
import { ProfileFormValues } from "../schemas/profile.schema";
import { ForgotPasswordFormValues } from "../schemas/forgot-password.schema";
import { otpFormValues } from "../schemas/otp.schema";
import { toast } from "sonner";

// React Query mutation hooks
export const useRegisterMutation = () => {
    const router = useRouter();
    return useMutation({
        mutationFn: async (data: RegisterFormValues) => {
            const res = await axiosInstance.post(`auth/signup`, data);
            return res.data;
        },
        onSuccess: (data) => {
            console.log("Registered successfully:", data);
            router.push("/login");
        },
        onError: (error: any) => {
            console.log("Error during registration:", error.response?.data || error.message);
        },
    });
};

// LOGIN
// export const useLoginMutation = () => {
//     return useMutation({
//         mutationFn: async (data: loginFormValues) => {
//             const { data: res } = await axiosInstance.post("auth/signin", data);
//             return res;
//         },
//         onSuccess: (data) => {

//         },
//     });
// };


export const useCreatePasswordMutation = () => {
    const router = useRouter();
    return useMutation({
        mutationFn: async (data: createPasswordFormValues) => {
            const res = await axiosInstance.put(`auth/resetPassword`, data);
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

// forgot password mutation
export const useForgotPasswordMutation = () => {
    const router = useRouter();
    return useMutation({
        mutationFn: async (data: ForgotPasswordFormValues) => {
            const res = await axiosInstance.post(`auth/forgotPassword`, data);
            return res.data;
        },
        onSuccess: (data, variable) => {
            toast.success(data?.message);
            router.push(`/otp?email=${variable.email}`);
        },
        onError: (error: any) => {
            const errorMessage = error.response?.data?.message || "Something went wrong";
            toast.error(errorMessage);
        },
    });
};

// otp mutation
export const useOTPMutation = () => {
    const router = useRouter();
    return useMutation({
        mutationFn: async (data: otpFormValues) => {
            const res = await axiosInstance.post(`auth/verifyResetCode`, data);
            return res.data;
        },
        onSuccess: (data) => {
            toast.success(data?.message || "Code verified successfully!");
            router.push(`/create-password`);
        },
        onError: (error: any) => {
            const errorMessage = error.response?.data?.message || "Something went wrong";
            toast.error(errorMessage);
        },
    });
};

///////////////////// PROFILE
// EDIT PROFILE
export const useEditProfile = (token: string | undefined) => {
    const router = useRouter();
    return useMutation({
        mutationFn: async (data: ProfileFormValues) => {
            const res = await axiosInstance.put(`auth/editProfile`, data, {
                headers: {
                    token: token
                }
            });
            return res.data;
        },
        onSuccess: (data) => {
            console.log("updated successfully:", data);
            router.push("/");
        },
        onError: (error: any) => {
            console.log("Error during registration:", error.response?.data || error.message);
        },
    });
};
