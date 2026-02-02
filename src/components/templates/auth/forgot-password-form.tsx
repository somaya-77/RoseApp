'use client'

import { useForgotPasswordHook } from "@/hooks/auth/use-forgot-password"
import Form from "./form"
import { ForgotPasswordFormValues } from "@/lib/schemas/auth/forgot-password.schema"
import { forgotPasswordInputs } from "@/lib/constants/auth"

export default function ForgotPasswordForm() {
    const { form, onSubmit } = useForgotPasswordHook()
    return (
        <Form<ForgotPasswordFormValues> title="Forgot Password" data={forgotPasswordInputs} titleBtn="Continue" handleSubmit={form.handleSubmit(onSubmit)} icon form={form} path="" description="Don’t worry, we will help you recover your account."  />
    )
}


