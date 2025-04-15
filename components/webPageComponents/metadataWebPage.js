const baseUrl = "https://www.antaresinnovate.com";

export const metadataWebPage = {
  es: {
    title: "Diseño de Páginas Web Profesionales | Tecnología y Branding | Antares Innovate",
    description: "Creamos páginas web con diseño moderno, velocidad optimizada, experiencia UI/UX y posicionamiento SEO. Presencia digital efectiva para marcas ambiciosas.",
    openGraph: {
      title: "Páginas Web que Impulsan tu Marca | Desarrollo Digital Profesional",
      description: "Tu sitio web es tu vitrina digital. En Antares diseñamos sitios que conectan, convierten y escalan tu negocio en Colombia y América Latina.",
      url: `${baseUrl}/es/web-page`,
      type: "website",
    },
    alternates: {
      canonical: `${baseUrl}/es/web-page`,
      languages: {
        en: `${baseUrl}/en/web-page`,
        "x-default": `${baseUrl}/web-page`,
      },
    },
  },

  en: {
    title: "Professional Website Design & Development | Antares Innovate",
    description: "We design and build high-performance websites with cutting-edge UI/UX, SEO optimization, and scalable infrastructure for growing businesses in the US.",
    openGraph: {
      title: "Next-Gen Web Design for Brands Ready to Scale | Antares Innovate",
      description: "Your website is your business card to the world. We craft modern, functional, and conversion-focused websites tailored to your business goals.",
      url: `${baseUrl}/en/web-page`,
      type: "website",
    },
    alternates: {
      canonical: `${baseUrl}/en/web-page`,
      languages: {
        es: `${baseUrl}/es/web-page`,
        "x-default": `${baseUrl}/web-page`,
      },
    },
  },
};
