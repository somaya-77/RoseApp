'use client';

import { useForgotPasswordMutation } from './../../lib/query/Auth-query/auth-query';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPasswordDefaultValues, ForgotPasswordFormValues, forgotPasswordSchema } from '@/lib/schemas/forgot-password.schema';

export function useForgotPasswordHook() {
    const forgotPasswordMutation = useForgotPasswordMutation();

    const form = useForm<ForgotPasswordFormValues>({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: forgotPasswordDefaultValues,
    });

    const onSubmit = (data: ForgotPasswordFormValues) => {
        forgotPasswordMutation.mutate(data);
    };

    return {
        form, onSubmit
    }
}