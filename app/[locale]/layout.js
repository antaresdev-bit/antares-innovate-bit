import { Inter } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import AOSLayout from "@/components/layout/AOSLayout";
import en from "@/messages/en.json";
import es from "@/messages/es.json";
import MetricsTracker from "@/components/layout/MetricsTracker";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  es: {
    title: "Antares Innovate - Tecnología",
    description:
      "Descubre las mejores estrategias de Tecnología, consultoría, marketing y  automatización con Antares Innovate.",
    openGraph: {
      type: "website",
      url: "https://antaresinnovate.com",
      title: "Antares Innovate - Tecnología y Marketing",
      siteName: "Antares Innovate",
      keywords: [
        "consultoría tecnológica ",
        "automatización",
        "servicios de integración de IA",
        "software para negocios"
      ]
    },
  },
  en: {
    title: "Innovative Technology Solutions | Antares Innovate",
    description:
      "Tech consulting & automation for American businesses. We help US companies streamline operations and drive revenue through custom digital solutions.",
    openGraph: {
      type: "website",
      url: "https://antaresinnovate.com",
      title: "Technology Solutions for US Businesses ",
      siteName: "Antares Innovate",
    },
    keywords: [
      "US tech consulting",
      "business automation USA",
      "digital transformation for American companies",
      "cloud solutions US",
      "AI integration services",
    ],
  },
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

        {/* hreflang tags for international SEO */}
        <link rel="alternate" href="https://antaresinnovate.com/en" hreflang="en-us" />
        <link rel="alternate" href="https://antaresinnovate.com/es" hreflang="es" />
        <link rel="alternate" href="https://antaresinnovate.com" hreflang="x-default" />
      </head>
      <body>
        <MetricsTracker />
        <NextIntlClientProvider locale={locale} messages={messages[locale]}>
          <AOSLayout>{children}</AOSLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
