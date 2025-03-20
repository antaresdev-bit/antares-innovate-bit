import { Inter } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import LayoutComponents from "@/components/layout/LayoutComponents";
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
          href="/assets/models/astronaut_web.gltf"
          as="fetch"
          type="model/gltf-binary"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/assets/images/3D/hdri.hdr"
          as="fetch"
          type="application/octet-stream"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages[locale]}>
          <LayoutComponents />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
