'use client'

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { defaultValue, LoginSchema, LoginSchemaType } from "@/lib/schemas/login.schema";

export function useLoginHook() {
    const router = useRouter();

    const form = useForm<LoginSchemaType>({
        resolver: zodResolver(LoginSchema),
        defaultValues: defaultValue,
    });

    const onSubmit = async (data: LoginSchemaType) => {
        const { email, password, remember } = data;

        try {
            const response = await signIn("credentials", {
                email,
                password,
                remember: remember ? "true" : "false",
                redirect: false,
            });

            if (!response?.ok) {
                toast.error(response?.error || "Login failed");
                return;
            }

            toast.success("Login successful!");

            router.push("/");
            router.refresh();

        } catch (err) {
            console.error("Unexpected error:", err);
            toast.error("Something went wrong");
        }
    };

    return {
        form,
        onSubmit,
    };
}