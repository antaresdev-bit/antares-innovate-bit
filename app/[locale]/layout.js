import { Inter } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import AOSLayout from "@/components/layout/AOSLayout";
import en from "@/messages/en.json";
import es from "@/messages/es.json";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Antares Innovate - Tecnología",
  description:
    "Descubre las mejores estrategias de Tecnología, consultoría, marketingy  automatización con Antares Innovate.",
  openGraph: {
    type: "website",
    url: "https://antaresinnovate.com",
    title: "Antares Innovate - Tecnología y Marketing",

    siteName: "Antares Innovate",
  }
};

const messages = { en, es };

export default function RootLayout({ children, params }) {
  const locale = params.locale;

  return (
    <html lang={locale} className={inter.className}>
      <head>
        <link
          rel="preload"
          href="/fonts/HandelGo.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/UniteaSans-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages[locale]}>
          <AOSLayout>{children}</AOSLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
