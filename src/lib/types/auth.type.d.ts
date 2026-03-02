import { DefaultSession } from "next-auth";

declare module "next-auth" {


    interface Session {
        accessToken?: string;
        rememberMe?: boolean;
        user: {
            _id: string;
            firstName: string;
            lastName: string;
            email: string;
            phone: string;
            photo: string;
            role: "user" | "admin";
            gender: "male" | "female" | "other";
            accessToken: string;
        };
    }

    interface User {
        token: string;
        remember?: boolean;
        user: {
            _id: string;
            firstName: string;
            lastName: string;
            email: string;
            phone: string;
            photo: string;
            role: "user" | "admin";
            gender: "male" | "female" | "other";
            accessToken: string;
        }
    }

}

declare module "next-auth/jwt" {
    interface JWT {
        accessToken: string;
        rememberMe?: boolean;
        user: Session["user"];
    }
}

export interface LoginResponse {
    token: string;
    user: {
        _id: string;
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        photo: string;
        role: "user" | "admin";
        gender: "male" | "female" | "other";
    };
}



// Form fields for the email step
export type EmailStepFields = z.infer<ReturnType<typeof emailStepSchema>>;

// Response returned by the email step API
export type EmailStepResponse = {
  message: string;
  info: string;
};

// Form fields for the reset password step
export type ResetPasswordStepFields = z.infer<
  ReturnType<typeof resetPasswordStepSchema>
>;

// Response returned by the reset password step API
export type ResetPasswordStepResponse = {
  message: string;
  token: string;
};

export type UpdateProfileResponse = {
  user: User[user];
  message: string;
};
export type ChangePasswordResponse = {
  message: string;
  token: string;
};





