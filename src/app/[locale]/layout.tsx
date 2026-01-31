import { Sarabun, Tajawal } from "next/font/google";
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

const sarabun = Sarabun({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sarabun",
});

const tajawal = Tajawal({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-tajawal",
});

// const edwardianScript = localFont({
//   src: "../fonts/EdwardianScriptITC.ttf", // adjust path as needed
//   variable: "--font-edwardian",
//   display: "swap",
// });

type LayoutProps = {
  children: React.ReactNode;
  params: { locale: Locale };
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
    title: t('title'),
    description: t("description"),
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
          // edwardianScript.variable,
          "antialiased",
        )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
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
