import { AuthLanguageSwitcher } from "@/components";
import FormDecoration, { FormDecorationInverted } from "./form-decoration";

export default function AuthLayoutForm({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <div className="flex items-center justify-center h-full">
            <div className="flex flex-col gap-6">

                {/* language switcher */}
                <AuthLanguageSwitcher />

                <FormDecoration />
                {children}
                {/* rotated image seprator */}
                <FormDecorationInverted />
            </div>
        </div>
    )
}
