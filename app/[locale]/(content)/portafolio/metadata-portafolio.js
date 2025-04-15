const baseUrl = "https://www.antaresinnovate.com";

export const metadataPortafolio = {
  en: {
    title: "Portfolio | Antares Innovate",
    description: "Explore featured projects and innovative technology solutions developed by Antares Innovate.",
    openGraph: {
      title: "Portfolio Projects | Antares Innovate",
      description: "Innovation in action: Discover our featured technology projects and digital solutions.",
      url: `${baseUrl}/en/portafolio`,
      type: "website",
    },
    alternates: {
      canonical: `${baseUrl}/en/portafolio`,
      languages: {
        es: `${baseUrl}/es/portafolio`,
        "x-default": `${baseUrl}/portafolio`,
      },
    },
  },
  es: {
    title: "Portafolio | Antares Innovate",
    description: "Explora proyectos destacados y soluciones tecnológicas innovadoras desarrolladas por Antares Innovate.",
    openGraph: {
      title: "Proyectos de Portafolio | Antares Innovate",
      description: "Innovación en acción: Descubre nuestros proyectos tecnológicos y soluciones digitales.",
      url: `${baseUrl}/es/portafolio`,
      type: "website",
    },
    alternates: {
      canonical: `${baseUrl}/es/portafolio`,
      languages: {
        en: `${baseUrl}/en/portafolio`,
        "x-default": `${baseUrl}/portafolio`,
      },
    },
  }
};
