'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import { useCreatePasswordMutation } from "@/lib/query/Auth-query/auth-query";
import { createPasswordDefaultValues, createPasswordFormValues, createPasswordSchema } from "@/lib/schemas/auth/create-password.schema";


export function useCreatePasswordHook() {
    // const createPasswordMutation = useCreatePasswordMutation();
    
    const form = useForm<createPasswordFormValues>({
        resolver: zodResolver(createPasswordSchema),
        defaultValues: createPasswordDefaultValues,
    });

    const onSubmit = (data: createPasswordFormValues) => {
        // createPasswordMutation.mutate(data);
    };

    return {
        form, onSubmit
    }
}