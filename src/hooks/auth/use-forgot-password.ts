'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForgotPasswordMutation } from "@/lib/query/Auth-query/auth-query";
import { forgotPasswordDefaultValues, ForgotPasswordFormValues, forgotPasswordSchema } from "@/lib/schemas/auth/forgot-password.schema";

export function useForgotPasswordHook() {
    const forgotPasswordMutation = useForgotPasswordMutation();

    const form = useForm<ForgotPasswordFormValues>({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: forgotPasswordDefaultValues,
    });

    const onSubmit = (data: ForgotPasswordFormValues) => {
        console.log("forgot", data)
        forgotPasswordMutation.mutate(data);
    };

    return {
        form, onSubmit
    }
}