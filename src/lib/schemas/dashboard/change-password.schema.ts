import { z } from "zod";
import { PasswordSchema } from "..";

export const ChangePasswordSchema = z.object({
    password: PasswordSchema,
    newPassword: PasswordSchema
});

export const ChangePasswordValues = {
    password: "",
    newPassword: "",
}

export type ChangePasswordSchemaType = z.infer<typeof ChangePasswordSchema>;