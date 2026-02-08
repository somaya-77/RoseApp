'use client'

import { useOTPHook } from "@/hooks/auth/use-otp"
import Form from "./form"
import { otpInputs } from "@/lib/constants/auth"
import { otpFormValues } from "@/lib/schemas/otp.schema";


export default function OTPForm({email}: {email?: string | undefined | null}) {
    const { form, onSubmit } = useOTPHook()
    return (
        <Form<otpFormValues> title="Verify OTP" data={otpInputs} titleBtn="Verify Code" handleSubmit={form.handleSubmit(onSubmit)} form={form} path="" description="Please enter the 6-digits code we have sent to:" email={email}/>
    )
}


