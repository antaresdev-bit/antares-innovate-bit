import { Inter } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import AOSLayout from "@/components/layout/AOSLayout";
import en from "@/messages/en.json";
import es from "@/messages/es.json";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Antares Innovate",
  description:
    "Antares Innovate es una empresa que se dedica a la transformación digital.",
};

const messages = { en, es };

export default function RootLayout({ children, params }) {
  const locale = params.locale; 

  return (
    <html lang={locale} className={inter.className}>
      <head>
        <link
          rel="preload"
          href="/fonts/HandelGo.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/UniteaSans-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages[locale]}>
          <AOSLayout>
            {children}
          </AOSLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
