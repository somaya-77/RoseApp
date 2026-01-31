'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import { useChangePasswordMutation } from "@/lib/query/Auth-query/auth-query";
import { changePasswordDefaultValues, ChangePasswordFormValues, changePasswordSchema } from "@/lib/schemas/auth/change-password.schema";



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