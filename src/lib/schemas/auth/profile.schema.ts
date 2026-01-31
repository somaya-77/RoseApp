import { z } from "zod";
export const profileSchema = z
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

        email: z
            .email("Invalid email address"),
        phone: z
            .string()
            .min(4, "Phone number is too short")
            .max(20, "Phone number is too long"),
    })

export const profileDefaultValues: ProfileFormValues = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
};


export type ProfileFormValues = z.infer<typeof profileSchema>;

