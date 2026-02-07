import { z } from "zod";

export const otpSchema = z.object({
    resetCode: z
        .string()
        .length(6, "OTP must be exactly 6 digits")
        .regex(/^\d+$/, "OTP must only contain numbers"),
});

export const otpDefaultValues: otpFormValues = {
    resetCode: "",
};


export type otpFormValues = z.infer<typeof otpSchema>;