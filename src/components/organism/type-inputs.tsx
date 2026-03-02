'use client';

import { useTranslations } from "next-intl";
import { Controller } from "react-hook-form";
import { InputPassword } from "../molecules/input-password";
import { Input, Label, InputOTP, PhoneInput, Select, SelectTrigger, SelectValue, SelectContent, SelectItem, Checkbox } from "@/components";

export default function TypeInputs({ form, ...props }: any) {
// Translate
    const t = useTranslations("auth")
    const inputStyle = "w-full flex flex-col gap-2"

    const labelText = t(props.label);

    switch (props.type) {
        case "text":
            return (
                <div className={inputStyle}>
                    <Label>{labelText}</Label>
                    <Controller
                        control={form.control}
                        name={props.name}
                        render={({ field }) => (
                            <Input {...field} placeholder={props.placeholder}
                            //  error={!!form.formState.errors[props.name]}
                            />
                        )}
                    />
                    <p className="text-sm text-red-600">{form.formState.errors[props.name]?.message}</p>
                </div>
            )

        case "password":
            return (
                <div className={inputStyle}>
                    <Label>{labelText}</Label>
                    <Controller
                        control={form.control}
                        name={props.name}
                        render={({ field }) => (
                            <InputPassword {...field} placeholder={props.placeholder} />
                        )}
                    />
                    <p className="text-sm text-red-600">{form.formState.errors[props.name]?.message}</p>
                </div>
            )
        case "phone":
            return (
                <div className={inputStyle}>
                    <Label>{labelText}</Label>
                    <Controller
                        control={form.control}
                        name={props.name}
                        // rules={{ required: "Phone number is required" }}
                        render={({ field }) => (
                            <div className="">
                                <PhoneInput
                                    {...field}
                                    defaultCountry='eg'
                                    onChange={field.onChange}
                                    onBlur={field.onBlur}
                                    value={field.value}
                                    inputStyle={{
                                        backgroundColor: 'transparent',
                                    }}
                                    inputClassName="w-full bg-transparent"


                                />
                                {form.formState.errors[props.name] && (
                                    <p className="text-sm text-red-600">
                                        {form.formState.errors[props.name]?.message as string}
                                    </p>
                                )}

                            </div>
                        )}
                    />

                </div>
            )

        case "otp":
            return (
                <div className="flex flex-col items-center w-full">

                    <Controller
                        control={form.control}
                        name={props.name}
                        render={({ field }) => (
                            <InputOTP
                                {...field}
                                maxLength={6}
                                status="default"
                            />
                        )}
                    />
                    <p className="text-sm text-red-600">{form.formState.errors[props.name]?.message}</p>
                </div>
            )

        case "gender":
            return (
                <div className={inputStyle}>
                    <Label>{labelText}</Label>
                    <Controller
                        control={form.control}
                        name={props.name}
                        render={({ field }) => (
                            <Select value={field.value} onValueChange={field.onChange}>
                                <SelectTrigger className="">
                                    <SelectValue placeholder={t("gender-placeholder")} />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="male">{t("male-gender")}</SelectItem>
                                    <SelectItem value="female">{t("female-gender")}</SelectItem>
                                </SelectContent>
                            </Select>
                        )}
                    />
                    <p className="text-sm text-red-600">{form.formState.errors[props.name]?.message}</p>
                </div>
            )


        case "checkbox":
            return (
                <div className={inputStyle}>
                    <div className="flex items-center gap-2 mb-5">
                        <Controller
                            control={form.control}
                            name={props.name}
                            render={({ field }) => (
                                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                            )}
                        />
                        <Label>{labelText}</Label>
                    </div>
                </div>
            )

        default:
            return null;
    }

}


