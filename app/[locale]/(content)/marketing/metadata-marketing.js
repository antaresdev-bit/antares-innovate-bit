const baseUrl = "https://www.antaresinnovate.com";

export const metadataMarketing = {
  es: {
    title: "Sobre Nosotros | Antares Innovate",
    description: "Conoce nuestra historia, equipo y enfoque innovador en marketing digital y tecnología.",
    openGraph: {
      title: "Sobre Antares Innovate | Nuestra Agencia",
      description: "Descubre quiénes somos, nuestra cultura y cómo ayudamos a las empresas a crecer digitalmente.",
      url: `${baseUrl}/es/about`,
      type: "website",
    },
    alternates: {
      canonical: `${baseUrl}/es/marketing`,
      languages: {
        en: `${baseUrl}/en/marketing`,
        "x-default": `${baseUrl}/marketing`,
      },
    },
  },

  en: {
    title: "About Us | Digital Marketing & Technology Agency | Antares Innovate",
    description: "Learn about our US-based digital marketing agency, our team, and our data-driven approach to growth.",
    openGraph: {
      title: "About Antares Innovate | Digital Marketing Experts",
      description: "Meet our team of digital marketing specialists serving businesses across the United States with innovative growth strategies.",
      url: `${baseUrl}/en/about`,
      type: "website",
    },
    alternates: {
      canonical: `${baseUrl}/en/marketing`,
      languages: {
        en: `${baseUrl}/en/marketing`,
        "x-default": `${baseUrl}/marketing`,
      },
    },
  },
};