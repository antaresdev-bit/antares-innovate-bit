const baseUrl = "https://www.antaresinnovate.com";

export const metadataOIM = {
  es: {
    title: "Transformación Digital para OIM | Soluciones Humanitarias y Tecnología | Antares Innovate",
    description: "Apoyamos a la OIM con soluciones digitales enfocadas en eficiencia operativa, visualización de datos, gestión de información y comunicación institucional para el impacto social.",
    openGraph: {
      title: "Innovación Digital para Organismos Internacionales | Caso OIM",
      description: "Desarrollo tecnológico, automatización y sistemas de gestión para organizaciones como la OIM. Alianzas estratégicas que fortalecen el impacto humanitario.",
      url: `${baseUrl}/es/oim`,
      type: "website",
    },
    alternates: {
      canonical: `${baseUrl}/es/oim`,
      languages: {
        en: `${baseUrl}/en/oim`,
        "x-default": `${baseUrl}/oim`,
      },
    },
  },

  en: {
    title: "Digital Innovation for IOM | Humanitarian Tech Solutions | Antares Innovate",
    description: "We support IOM in the United States with advanced digital tools that optimize operational workflows, visualize humanitarian impact, and streamline data management — enabling scalable, tech-driven solutions for global cooperation.",
    openGraph: {
      title: "Tech Strategy for the International Organization for Migration | Antares Innovate",
      description: "Smart systems, data visualization, and digital transformation for global humanitarian efforts. See how Antares Innovate helps IOM scale with impact.",
      url: `${baseUrl}/en/oim`,
      type: "website",
    },
    alternates: {
      canonical: `${baseUrl}/en/oim`,
      languages: {
        es: `${baseUrl}/es/oim`,
        "x-default": `${baseUrl}/oim`,
      },
    },
  },
};
