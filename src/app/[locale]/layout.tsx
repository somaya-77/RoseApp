import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { Providers } from "@/lib/providers";
import { Sarabun, Tajawal, Ballet } from "next/font/google";
import { getTranslations, setRequestLocale } from "next-intl/server";

// types
type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

// fonts
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

const playwriteFont = Ballet({
  weight: "400",
  display: "swap",
  variable: "--font-playwrite",
});


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
          playwriteFont.variable,
          "antialiased"
        )}>
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
