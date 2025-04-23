import { Inter } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import AOSLayout from "@/components/layout/AOSLayout";
import en from "@/messages/en.json";
import es from "@/messages/es.json";
import MetricsTracker from "@/components/layout/MetricsTracker";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://antaresinnovate.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      es: "/es",
      "x-default": "/",
    },
  },
  es: {
    title:
      "Antares Innovate - Estrategias de Tecnología, Marketing y Automatización para Empresas", // Título más genérico para alcance hispano
    description:
      "Descubre las mejores estrategias de Tecnología, consultoría, marketing y automatización con Antares Innovate. Impulsa tu negocio con soluciones innovadoras.", // Descripción genérica
    openGraph: {
      type: "website",
      url: "https://antaresinnovate.com/es",
      title:
        "Antares Innovate - Tecnología y Marketing para el Éxito Empresarial", // Título Open Graph genérico
      siteName: "Antares Innovate",
      keywords: [
        "estrategias de tecnología",
        "consultoría de automatización",
        "marketing digital B2B",
        "integración de IA en negocios",
        "software empresarial",
      ],
    },
  },
  "en-US": {
    // Enfoque específico en 'en-US'
    title:
      "Antares Innovate - Tech Consulting, Digital Marketing & Automation for US Businesses", // Título con enfoque en EE.UU.
    description:
      "Boost your US business with Antares Innovate's expert tech consulting, digital marketing, and automation services. Drive growth and efficiency.", // Descripción directa al público estadounidense
    openGraph: {
      type: "website",
      url: "https://antaresinnovate.com/en",
      title:
        "Antares Innovate - Technology & Marketing Solutions for American Companies", // Título Open Graph para EE.UU.
      siteName: "Antares Innovate",
      keywords: [
        "US tech consulting services",
        "business automation solutions USA",
        "digital marketing agency for US businesses",
        "AI implementation for American companies",
        "cloud services for US enterprises",
        "B2B marketing strategy United States",
      ],
    },
  },
  en: {
    title: "Antares Innovate - Tech Consulting, Digital Marketing & Automation",
    description:
      "Expert tech consulting, digital marketing, and automation services by Antares Innovate.",
    openGraph: {
      type: "website",
      url: "https://antaresinnovate.com/en",
      title: "Antares Innovate - Technology & Marketing Solutions",
      siteName: "Antares Innovate",
      keywords: [
        "tech consulting services",
        "business automation solutions",
        "digital marketing agency",
        "AI implementation",
        "cloud services",
        "B2B marketing strategy",
      ],
    },
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
