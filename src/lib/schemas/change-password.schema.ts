import z from "zod";
import { Translations } from "../types/global";

export const changePasswordSchema = (t: Translations) =>
    z
        .object({
            password: z.string().min(1, t("validations.current-password-required")),
            newPassword: z
                .string()
                .min(1, t("validations.new-password-required"))
                .regex(
                    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                    t("validations.password-pattern"),
                ),
            confirmNewPassword: z
                .string()
                .min(1, t("validations.confirm-new-password-required"))
                .optional(),
        })
        .refine((data) => data.newPassword === data.confirmNewPassword, {
            path: ["confirmNewPassword"],
            message: t("validations.confirm-new-password-error"),
        });
