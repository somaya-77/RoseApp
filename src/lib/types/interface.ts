import { OTPInputProps } from "input-otp";
import { VariantProps } from "class-variance-authority";
import { badgeVariants } from "@/components/atoms/badge";
import { buttonVariants } from "@/components/atoms/button";
import { FieldValues, UseFormReturn } from "react-hook-form";
import { Status } from ".";


export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    status?: Status;
}
export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> { }


export interface InputOTPProps
    extends Omit<
        OTPInputProps,
        "children" | "render" | "value" | "onChange"
    > {
    status?: "default" | "error" | "disabled";
    containerClassName?: string;
    value?: string;
    onChange?: (value: string) => void;
}

export interface FileInputProps
    extends Omit<React.ComponentPropsWithoutRef<"input">, "type"> {
    status?: Status;
}

export interface IBenefitsSection {
    title: string;
    description: string;
    icon: React.ReactNode;
};

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    loading?: boolean;
}


export interface MostPopularListProps {
  searchParams?: { occasion?: string; limit?: number };
}

export interface Data {
    id: number;
    label: string;
    placeholder?: string | undefined;
    type: string;
    name: string;
}

export interface AuthFormProps<T extends FieldValues> {
    title: "Login" | "Create Account" | "Create a New Password" | "Forgot Password" | "Verify OTP";
    data: Data[];
    titleBtn: string;
    handleSubmit: (e?: React.BaseSyntheticEvent) => void;
    path: string;
    form: UseFormReturn<T>;
    titleLinkPage?: string;
    description?: string;
    icon?: boolean;
    email?: string | null | undefined;
    generalErrorMessage?: string;
}