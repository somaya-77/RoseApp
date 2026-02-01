import { z } from "zod";
import { PasswordSchema, PhoneSchema } from "..";
import { Translations } from "@/lib/types/global";

export const RegisterSchema =z.object({
            firstName: z
                .string("auth.validations.firstName-required")
                .min(2, "validations.firstName-min")
                .max(20, "validations.firstName-max"),
            lastName: z
                .string("validations.lastName-required")
                .min(2, "validations.lastName-min")
                .max(20, "validations.lastName-max"),
            email: z.email("validations.email-required"),
            phone: z
                .string()
                .regex(
                    /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/,
                    "validations.phoneNumber-valid"),
                
            gender: z.enum(["male", "female"], "validations.gender-required"),
            password: PasswordSchema,
            rePassword: z.string().min(1, "validations.confirmPassword-required"),
        })
        .refine((data) => data.password === data.rePassword, {
            path: ["rePassword"],
            message: "validations.confirmPassword-error",
        });




export const RegisterDefaultValue = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: undefined,
    password: "",
    rePassword: "",
}

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;