'use client'

import Link from "next/link";
import { FieldValues } from "react-hook-form";
// import { useForgotPasswordMutation } from "@/lib/query/AuthQuery";
import { Button, TypeInputs, Icon } from "@/components";
// import { ForgotPasswordFormValues } from "@/lib/schemas/forgot-password.schema";
import { AuthFormProps } from "@/lib/types/interface";

export default function Fields<T extends FieldValues>({ title, data, titleBtn, handleSubmit, path, form, titleLinkPage, icon, email }: AuthFormProps<T>) {
    // const forgotPasswordMutation = useForgotPasswordMutation();

    const handleResendOTP = (email: any) => {
        // forgotPasswordMutation.mutate(email);
    };

    return (
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

                <div className="w-full flex justify-end ">
                    <Link className="text-blue-600 font-medium -mt-2 mb-4" href={path}>{titleLinkPage}</Link>
                </div>
            </div>

            {/* {title === "Verify OTP" && (
                <OTPTimer initialSeconds={60} onResend={handleResendOTP} email={email} />
            )} */}

            <div className="flex flex-col gap-6 justify-center items-center font-medium">
                <Button className="my-6" type="submit" loading={form.formState.isSubmitting}>{titleBtn} {icon && <span className="ml-2"><Icon name="MoveRight" /></span>}</Button>
                {/* <RePathForm title={title} /> */}
            </div>
        </form>
    )
}