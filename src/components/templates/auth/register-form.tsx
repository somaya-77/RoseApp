'use client'

import useRegisterHook from "@/hooks/auth/use-register";
import { Form } from ".";
import { RegisterSchemaType } from "@/lib/schemas/auth/register.schema";
import { registerInputs } from "@/lib/constants/auth";
import GreetingTitle from "@/components/atoms/greeting-title";

export default function RegisterForm() {
    // Hook
    const { form, onSubmit } = useRegisterHook()
    // const t = useTranslations("auth.login");
    return (
        <>
            <GreetingTitle title="Become part of our family!" />
            <Form<RegisterSchemaType> title="Create Account" data={registerInputs} titleBtn="Create Account" handleSubmit={form.handleSubmit(onSubmit)} path="/login" form={form} titleLinkPage="Already have an account?" />
        </>
    )
}