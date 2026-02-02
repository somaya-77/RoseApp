// import Cookies from "js-cookie";
'use client'

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { toast } from "sonner";
import { signOut, useSession } from "next-auth/react";
import { RegisterSchemaType } from "@/lib/schemas/auth/register.schema";
import { axiosInstance } from "@/lib/axios";
import { useTranslations } from "next-intl";
import { ForgotPasswordFormValues } from "@/lib/schemas/auth/forgot-password.schema";
import { otpFormValues } from "@/lib/schemas/auth/otp.schema";

// React Query mutation hooks
export const useRegisterMutation = () => {
    const t = useTranslations("auth");
    const router = useRouter();
    return useMutation({
        mutationFn: async (data: RegisterSchemaType) => {
            const res = await axiosInstance.post(`auth/signup`, data);
            return res.data;
        },
        onSuccess: (data) => {
            console.log("Registered successfully:", data);
            toast.success(t("register-success"));
            router.push("/login");
        },
        onError: (error: any) => {
            toast.error(error.response?.data || error.message);
            console.log("Error during registration:", error.response?.data || error.message);
        },
    });
};

// export const useCreatePasswordMutation = () => {
//     const router = useRouter();
//     return useMutation({
//         mutationFn: async (data: createPasswordFormValues) => {
//             const res = await axiosInstance.put(`auth/resetPassword`, data);
//             return res.data;
//         },
//         onSuccess: (data) => {
//             toast.success(data?.message);
//             console.log("Registered successfully:", data);
//             router.push(`/login`);
//         },
//         onError: (error: any) => {
//             console.log("Error during registration:", error.response?.data || error.message);

//             const errorMessage = error.response?.data?.message || "Something went wrong";
//             toast.error(errorMessage);
//         },
//     });
// };

// export const useChangePasswordMutation = () => {
//     const router = useRouter();

//     return useMutation({
//         mutationFn: async (data: ChangePasswordFormValues) => {
//             const res = await axiosInstance.patch(`auth/changePassword`, data);
//             return res.data;
//         },
//         onSuccess: async (data) => {
//             toast.success(data?.message);
//             await signOut({
//                 redirect: true,
//                 callbackUrl: "/login"
//             });
//         },
//         onError: (error: any) => {
//             console.log("Error during registration:", error.response?.data || error.message);

//             const errorMessage = error.response?.data?.message || "Something went wrong";
//             toast.error(errorMessage);
//         },
//     });
// };

// // forgot password mutation
export const useForgotPasswordMutation = () => {
    const router = useRouter();
    return useMutation({
        mutationFn: async (data: ForgotPasswordFormValues) => {
            const res = await axiosInstance.post(`/auth/forgotPassword`, data);
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

// ///////////////////// PROFILE
// // EDIT PROFILE

// export const useEditProfile = () => {
//     const router = useRouter();
//     const { update } = useSession();

//     return useMutation({
//         mutationFn: async (data: ProfileFormValues) => {
//             const res = await axiosInstance.put(`auth/editProfile`, data);
//             return res.data;
//         },
//         onSuccess: async (data) => {
//             toast.success(data?.message);
//             // Update NextAuth session with the new token and user
//             await update({
//                 user: data.user
//             });
//             router.push("/");
//         },
//         onError: (error: any) => {
//             const errorMessage = error.response?.data?.message || "Something went wrong";
//             toast.error(errorMessage);
//         },
//     });
// };



// LOGOUT

export const useLogout = () => {
    const router = useRouter();

    return useMutation({
        mutationFn: async () => {
            const res = await axiosInstance.get(`auth/logout`);
            return res.data;
        },
        onSuccess: async (data) => {
            await signOut({ redirect: false });
            toast.success(data?.message);
            router.push(`/login`);
        },
        onError: (error: any) => {
            const errorMessage = error.response?.data?.message || "Something went wrong";
            toast.error(errorMessage);
        },
    });
};
// DELETE ACCOUNT
export const useDeleteAccount = () => {
    const router = useRouter();
    return useMutation({
        mutationFn: async (data) => {
            const res = await axiosInstance.delete(`auth/deleteMe`);
            return res.data;
        },
        onSuccess: async (data) => {
            await signOut({ redirect: false });

            toast.success(data?.message);
            router.push(`/login`);
        },
        onError: (error: any) => {
            const errorMessage = error.response?.data?.message || "Something went wrong";
            toast.error(errorMessage);
        },
    });
};
