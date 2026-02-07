import { z } from "zod";

export const forgotPasswordSchema = z
    .object({
        email: z.email("Invalid email address").min(1, "Email is required"),
    })


export const forgotPasswordDefaultValues: ForgotPasswordFormValues = {
    email: "",
};


export type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;