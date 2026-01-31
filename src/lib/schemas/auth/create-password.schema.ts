import { z } from "zod";
import { passwordSchema } from "./login.schema";

export const createPasswordSchema = z
    .object({
        email: z.email(),
        newPassword: passwordSchema,
    })

export const createPasswordDefaultValues: createPasswordFormValues = {
    email: "",
    newPassword: "",
};


export type createPasswordFormValues = z.infer<typeof createPasswordSchema>;

