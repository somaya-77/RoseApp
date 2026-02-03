import Link from "next/link";
import { useTranslations } from "next-intl"
import { LoginForm } from "../templates/auth"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components"


export default function LoginPopover() {
    const t = useTranslations("auth")

    return (
        <Tabs defaultValue="login" className="w-100">
            <TabsList>
                <TabsTrigger value="login">{t("Login")}</TabsTrigger>
                <TabsTrigger value="register">
                    <Link href="/register">
                        {t("Register")}
                    </Link>
                </TabsTrigger>
            </TabsList>
            <TabsContent value="login" className="p-5">
                <LoginForm />
            </TabsContent>
        </Tabs>
    )
}