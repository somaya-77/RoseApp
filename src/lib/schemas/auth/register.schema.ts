import { z } from "zod";
import { PasswordSchema, PhoneSchema } from "..";

export const RegisterSchema = z
    .object({
        firstName: z
            .string()
            .min(2, "First name must be at least 2 characters"),

        lastName: z
            .string()
            .min(2, "Last name must be at least 2 characters"),

        username: z
            .string()
            .min(3, "Username must be at least 3 characters"),

        email: z.email("Invalid email address"),
        phone: PhoneSchema,
        password: PasswordSchema,
        rePassword: z.string().min(1, "Please confirm your password"),
    })
    .refine((data) => data.password === data.rePassword, {
        message: "Passwords do not match",
        path: ["rePassword"], // Points the error to the rePassword field
    });

export const RegisterDefaultValue = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    rePassword: "",
    phone: "",
    gender: "",
}

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;