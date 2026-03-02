"use client";

import { Form } from ".";
import { useTranslations } from "next-intl";
import { loginInputs } from "@/lib/constants/auth";
import { useLoginHook } from "@/hooks/auth/use-login-hook";
import GreetingTitle from "@/components/atoms/greeting-title";
import { LoginSchemaType } from "@/lib/schemas/login.schema";

export default function LoginForm() {
    // Translate
    const t = useTranslations("auth");

    // Hook
    const { form, onSubmit } = useLoginHook();

    return (
        <>
            <GreetingTitle title={t("welcome")} />
            <Form<LoginSchemaType> title="Login" data={loginInputs} titleBtn="login" handleSubmit={form.handleSubmit(onSubmit)} path="/forgot-password" form={form} titleLinkPage="Forgot your password?" />
        </>
    )
}

