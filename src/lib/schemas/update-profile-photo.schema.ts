import z from "zod";
import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from "../constants";
import { Translations } from "../types/global";

export const updateProfileSchema = (t: Translations) =>
    z.object({
        firstName: z
            .string(t("validations.firstName-required"))
            .min(2, t("validations.firstName-min"))
            .max(20, t("validations.firstName-max")),
        lastName: z
            .string(t("validations.lastName-required"))
            .min(2, t("validations.lastName-min"))
            .max(20, t("validations.lastName-max")),
        email: z.email(t("validations.email-required")),
        phone: z
            .string()
            .regex(
                /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/,
                t("validations.phoneNumber-valid"),
            ),
        gender: z
            .enum(["male", "female"], t("validations.gender-required"))
            .optional(),
    });