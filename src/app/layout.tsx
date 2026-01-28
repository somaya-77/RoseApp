
import NextAuthProvider from "@/lib/providers/next-auth.provider";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <NextAuthProvider>{children}</NextAuthProvider>
}
