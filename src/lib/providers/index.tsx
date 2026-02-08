import { Toaster } from "sonner";
import { ThemeProvider } from "next-themes";
import { CartProvider } from "./cart.provider";
import { NextIntlClientProvider } from "next-intl";
import ReactQueryProvider from "./react-query-provider";


export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Providers */}
      <NextIntlClientProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange>
          <ReactQueryProvider>
            <CartProvider>
              {children}
              <Toaster richColors />
            </CartProvider>
          </ReactQueryProvider>
        </ThemeProvider>
      </NextIntlClientProvider>
    </>
  );
}
