'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { changePasswordDefaultValues, ChangePasswordFormValues, changePasswordSchema } from "@/lib/schemas/change-password.schema copy";

export function useChangePasswordHook() {
    // const changePasswordMutation = useChangePasswordMutation();
    
    const form = useForm<ChangePasswordFormValues>({
        resolver: zodResolver(changePasswordSchema),
        defaultValues: changePasswordDefaultValues,
    });

    const onSubmit = (data: ChangePasswordFormValues) => {
        // changePasswordMutation.mutate(data);
    };

    return {
        form, onSubmit
    }
}