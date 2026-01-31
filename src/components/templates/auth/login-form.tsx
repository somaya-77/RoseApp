"use client";

import { Form } from ".";
import { useTranslations } from "next-intl";
import { loginInputs } from "@/lib/constants/auth";
import { useLoginHook } from "@/hooks/auth/use-login-hook";
import { LoginSchemaType } from "@/lib/schemas/auth/login.schema";
import GreetingTitle from "@/components/atoms/greeting-title";

export default function LoginForm() {
    // Hook
    const { form, onSubmit } = useLoginHook()
    const t = useTranslations("auth.login");


    return (
        <>
            <GreetingTitle title={t("welcome")} />
            <Form<LoginSchemaType> title="Login" data={loginInputs} titleBtn="login" handleSubmit={form.handleSubmit(onSubmit)} path="/forgot-password" form={form} titleLinkPage="Forgot your password?" />
        </>
    )
}

