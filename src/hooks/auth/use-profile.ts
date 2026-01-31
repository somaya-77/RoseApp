'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useSession } from "next-auth/react";
import { useDeleteAccount, 
    // useEditProfile
 } from "@/lib/query/Auth-query/auth-query";
import { profileDefaultValues, ProfileFormValues, profileSchema } from "@/lib/schemas/auth/profile.schema";

export function useProfileHook() {
    const { data: session } = useSession();
    const token = session?.accessToken;
    // const mutation = useEditProfile();
    const {mutate: deleteAccount} = useDeleteAccount()
    
    const form = useForm<ProfileFormValues>({
        resolver: zodResolver(profileSchema),
        defaultValues: profileDefaultValues,
    });
    
    const onSubmit = (data: ProfileFormValues) => {
        const formattedPhone = data.phone.startsWith("+20") ? "0" + data.phone.slice(3) : data.phone;

        const payload = {
            ...data,
            phone: formattedPhone,
        };
        // mutation.mutate(payload);
    };

    return {
        form, onSubmit,deleteAccount
    }
}