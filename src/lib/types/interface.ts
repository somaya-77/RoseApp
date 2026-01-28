import { Occasion, Status } from ".";
import { OTPInputProps } from "input-otp";
import * as RPNInput from "react-phone-number-input";
import { VariantProps } from "class-variance-authority";
import { badgeVariants } from "@/components/atoms/badge";
import { buttonVariants } from "@/components/atoms/button";


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

export interface IOccasionsSection {
    image: string;
    badge?: string;
    description?: string;
    title: string;
};

export interface IOccasionCardProps {
    occasion: IOccasionsSection,
    height: number,
    children?: React.ReactNode
}

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    loading?: boolean;
}


export interface MostPopularHeaderProps {
  occasions: Occasion[];
}
// export interface PhoneInputProps extends Omit<React.ComponentProps<"input">, "onChange" | "value" | "ref">,
//     Omit<RPNInput.Props<typeof RPNInput.default>, "onChange"> {
//     onChange?: (value: RPNInput.Value) => void;
//     status?: Status;
// }