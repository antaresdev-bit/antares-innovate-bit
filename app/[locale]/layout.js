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
      "Antares Innovate - Estrategias de Tecnología, Marketing y Automatización para Empresas",
    description:
      "Descubre las mejores estrategias de Tecnología, consultoría, marketing y automatización con Antares Innovate. Impulsa tu negocio con soluciones innovadoras.", // Descripción genérica
    openGraph: {
      type: "website",
      url: "https://antaresinnovate.com/es",
      title:
        "Antares Innovate - Tecnología y Marketing para el Éxito Empresarial",
      siteName: "Antares Innovate",
      keywords: [
        "estrategias de tecnología para pymes resilientes",
        "consultoría de automatización inteligente procesos industriales",
        "marketing digital B2B basado en datos e intención",
        "integración de IA generativa en flujos de trabajo empresarial",
        "software modular de gestión empresarial cloud 2025",
        "roadmap de transformación digital para negocios familiares",
        "optimización de procesos con RPA e IA para finanzas",
        "estrategias de ABM escalable para mercado hispano",
        "ética e IA en la toma de decisiones empresariales",
        "consultoría en ciberseguridad para software empresarial",
        "predicción de demanda con analítica avanzada B2B",
        "soluciones low-code para automatización de negocio",
        "marketing de contenidos B2B para sectores técnicos 2025",
        "evaluación de madurez digital sector [insertar sector]",
        "implementación de herramientas martech para pymes 2025",

        "digitalizar mi negocio familiar",
        "automatizar tareas repetitivas en la empresa",
        "consultoría para ser más eficiente mi negocio",
        "marketing digital para encontrar clientes",
        "cómo aplicar inteligencia artificial en mi empresa",
        "software de gestión fácil de usar para empresas",
        "estrategia digital para crecer mi negocio 2025",
        "automatización de procesos sin saber programar",
        "mejores herramientas de marketing para empresas B2B",
        "inteligencia artificial para pymes ejemplos",
        "necesito un software a medida para mi empresa",
        "consultoría tecnológica que funcione para mi sector",
        "soluciones cloud seguras para mi negocio",
        "cómo prepararse para la transformación digital 2025",
      ],
    },
  },
  "en-US": {
    title:
      "Antares Innovate - Tech Consulting, Digital Marketing & Automation for US Businesses",
    description:
      "Boost your US business with Antares Innovate's expert tech consulting, digital marketing, and automation services. Drive growth and efficiency.", // Descripción directa al público estadounidense
    openGraph: {
      type: "website",
      url: "https://antaresinnovate.com/en",
      title:
        "Antares Innovate - Technology & Marketing Solutions for American Companies",
      siteName: "Antares Innovate",
      keywords: [
        "US tech consulting for business resilience 2025",
        "intelligent automation consulting for manufacturing USA",
        "data-driven B2B digital marketing strategies US",
        "generative AI integration for US enterprise workflows",
        "modular cloud enterprise software solutions US 2025",
        "digital transformation roadmap for American SMBs",
        "RPA & AI process optimization consulting US finance",
        "scalable ABM strategies for US B2B market",
        "ethical AI consulting for US business decisions",
        "cybersecurity consulting for US enterprise software",
        "predictive analytics software US sales teams",
        "low-code automation solutions for US businesses",
        "technical B2B content marketing strategies US 2025",
        "digital maturity assessment US [insert industry] industry",
        "martech implementation consulting US SMBs 2025",

        " digitizing my American family business",
        "automate repetitive tasks in the office USA",
        "consulting to make my business more efficient US",
        "digital marketing to find B2B clients online US",
        "how to use artificial intelligence in my company",
        "easy to use business management software USA",
        "digital strategy to grow my US business 2025",
        "business process automation without coding",
        "best marketing tools for B2B companies US",
        "artificial intelligence examples for small businesses",
        "I need custom software for my business USA",
        "tech consulting that works for my industry US",
        "secure cloud solutions for my US business",
        "how to prepare for digital transformation 2025",
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
