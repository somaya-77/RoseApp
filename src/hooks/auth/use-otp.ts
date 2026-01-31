'use client'

import { useOTPMutation } from "@/lib/query/Auth-query/auth-query";
import { otpDefaultValues, otpFormValues, otpSchema } from "@/lib/schemas/auth/otp.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export function useOTPHook() {
    const otpMutation = useOTPMutation();

    const form = useForm<otpFormValues>({
        resolver: zodResolver(otpSchema),
        defaultValues: otpDefaultValues,
    });

    const onSubmit = (data: otpFormValues) => {
        // forgotPasswordMutation.mutate(data);
        otpMutation.mutate(data)
    };

    return {
        form, onSubmit
    }
}