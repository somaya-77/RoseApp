'use client'

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { LoginSchema, defaultValue, LoginSchemaType } from "@/lib/schemas/auth/login.schema";

export function useLoginHook() {
    // navigation
    const router = useRouter()

    // hook
    const form = useForm<LoginSchemaType>({
        resolver: zodResolver(LoginSchema),
        defaultValues: defaultValue,
    })

    // handle submit
    const onSubmit = async (data: LoginSchemaType) => {
        const { email, password } = data;

        try {
            const response = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            if (response?.status === 200) {
                toast.success("Login successful!", {
                    duration: 2000,
                    onAutoClose: () => {
                        router.push("/dashboard");
                    }
                });
            } else {
                toast.error(response?.error);
            }
        } catch (err) {
            console.error("Unexpected error:", err);
        }
    };

    return {
        form,
        onSubmit,
    }
}