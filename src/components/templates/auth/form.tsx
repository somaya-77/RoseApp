"use client";

import { FieldValues } from "react-hook-form";
import { AuthFormProps } from "@/lib/types/interface";
import { useForgotPasswordMutation } from "@/lib/query/Auth-query/auth-query";
import { ForgotPasswordFormValues } from "@/lib/schemas/auth/forgot-password.schema";
import { FormFooter, TypeInputs, Button, OTPTimer } from "@/components";
import { ModeToggle } from "@/components";

export default function Form<T extends FieldValues>({ title, data, titleBtn, handleSubmit, path, form, titleLinkPage, icon, email }: AuthFormProps<T>) {

    const forgotPasswordMutation = useForgotPasswordMutation();

    const handleResendOTP = (email: ForgotPasswordFormValues) => {
        forgotPasswordMutation.mutate(email);
    };

    return (
        <>
            <ModeToggle />
            <form onSubmit={handleSubmit} >
                <div className="flex flex-col gap-6 justify-center items-center w-full">
                    <div className="flex gap-6 w-full">
                        {data
                            .filter(item => item.name === "firstName" || item.name === "lastName")
                            .map(item => (
                                <div key={item.id} className="w-1/2">
                                    <TypeInputs {...item} form={form} />
                                </div>
                            ))}
                    </div>

                    {data
                        .filter(item => item.name !== "firstName" && item.name !== "lastName")
                        .map(item => (
                            <div key={item.id} className="w-full">
                                <TypeInputs {...item} form={form} />
                            </div>
                        ))}

                    {/* <div className="w-full flex justify-end ">
                    <Link className="text-blue-600 font-medium -mt-2 mb-4" href={path}>{titleLinkPage}</Link>
                </div> */}
                </div>

                {title === "Verify OTP" && (
                    <OTPTimer initialSeconds={60} onResend={handleResendOTP} email={email} />
                )}

                    <Button type="submit" className="w-full mt-6" loading={form.formState.isSubmitting}>{titleBtn}</Button>
            </form>
            <FormFooter title={title} />
        </>
    )
}