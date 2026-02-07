import { z } from "zod";
import { PasswordSchema } from "..";

export const createPasswordSchema = z
    .object({
        email: z.email(),
        newPassword: PasswordSchema,
    })

export const createPasswordDefaultValues: createPasswordFormValues = {
    email: "",
    newPassword: "",
};


export type createPasswordFormValues = z.infer<typeof createPasswordSchema>;

