import {Sarabun, Tajawal} from "next/font/google";
import { hasLocale, Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";
import localFont from "next/font/local";
import { Providers } from "@/lib/providers";
import ThemeProvider from "@/lib/providers/theme-provider";
import ReactQueryProvider from "@/lib/providers/react-query-provider";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-tajawal",
});

const sarabun = Sarabun({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sarabun",
});

const edwardianScript = localFont({
src: "../../fonts/EdwardianScriptITC.ttf",
  variable: "--font-edwardian",
  display: "swap",
});

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};


export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {

  const params = await props.params;
  const locale = params.locale;

  const t = await getTranslations({
    locale,
  });

  return {
    title: (t as any)('metadata.root.title'),
    description: (t as any)('metadata.root.description'),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      suppressHydrationWarning>
      <body
        className={cn(
          sarabun.variable,
          tajawal.variable,
          edwardianScript.variable,
          // locale === "ar" ? "font-(family-name:var(--font-tajawal))" : "font-(family-name:var(--font-sarabun))",
          "antialiased"

        )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          // enableSystem
          disableTransitionOnChange>
          <ReactQueryProvider>

            <Providers>
              <main>{children}</main>

              <Toaster richColors />
            </Providers>
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
