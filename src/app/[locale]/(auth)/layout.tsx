import { AuthInfoPanel, AuthLayoutForm } from "@/components";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="h-screen grid grid-cols-1 lg:grid-cols-2">
            <AuthLayoutForm>
                {children}
            </AuthLayoutForm>

            <div className="hidden lg:block">
                <AuthInfoPanel />
            </div>
        </main>
    );
}
