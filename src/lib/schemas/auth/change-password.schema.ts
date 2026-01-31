import { z } from "zod";
import { passwordSchema } from "./login.schema";

export const changePasswordSchema = z
    .object({
        oldPassword: passwordSchema,
        password: passwordSchema,
        rePassword: passwordSchema,
    })
    .refine((data) => data.password === data.rePassword, {
        message: "Passwords do not match",
        path: ["rePassword"],
    })
    .refine((data) => data.password !== data.oldPassword, {
        message: "New password must be different from the old one",
        path: ["password"],
    });

export type ChangePasswordFormValues = z.infer<typeof changePasswordSchema>;

export const changePasswordDefaultValues: ChangePasswordFormValues = {
    oldPassword: "",
    password: "",
    rePassword: "",
};
