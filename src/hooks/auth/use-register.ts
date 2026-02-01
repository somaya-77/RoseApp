

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegisterMutation } from "@/lib/query/Auth-query/auth-query";
import { RegisterDefaultValue, RegisterSchema, RegisterSchemaType } from "@/lib/schemas/auth/register.schema";
import { useTranslations } from "next-intl";


export default function useRegisterHook() {
    const registerMutation = useRegisterMutation();
    const t = useTranslations("auth");
    const form = useForm<RegisterSchemaType>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: RegisterDefaultValue,
    });

    const onSubmit = (data: RegisterSchemaType) => {

        const payload = {
            ...data,
            // phone: toLocalEgyptianPhone(data.phone),
        };
        registerMutation.mutate(payload);

    };

    return {
        form, onSubmit
    }
}