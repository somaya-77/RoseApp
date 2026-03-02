import z from "zod";
import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from "../constants";

export const photoUploadSchema = (t: (key: string) => string) =>
    z.object({
        photo: z
            .custom<FileList>()
            .refine(
                (files) => {
                    if (!files || files.length === 0) return false;
                    return files.length > 0;
                },
                {
                    message: t("validations.photo-required"),
                },
            )
            .refine(
                (files) => {
                    if (!files || files.length === 0) return true;

                    return files[0].size <= MAX_FILE_SIZE;
                },
                {
                    message: t("validations.file-too-large"),
                },
            )
            .refine(
                (files) => {
                    if (!files || files.length === 0) return true;
                    return ACCEPTED_IMAGE_TYPES.includes(files[0].type);
                },
                {
                    message: t("validations.invalid-file-type"),
                },
            ),
    });