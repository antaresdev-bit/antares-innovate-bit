const baseUrl = "https://www.antaresinnovate.com";

export const metadataPolitecnico = {
  es: {
    title: "Transformación Digital Educativa para el Politécnico | Antares Innovate",
    description: "Digitalizamos instituciones educativas como el Politécnico: plataformas académicas, automatización de admisiones, branding institucional y estrategias de captación.",
    openGraph: {
      title: "Educación Digital para el Politécnico | Tecnología y Escalabilidad",
      description: "Modernización de procesos educativos, experiencia digital del estudiante y posicionamiento institucional en línea. Casos reales de innovación educativa.",
      url: `${baseUrl}/es/politecnico`,
      type: "website",
    },
    alternates: {
      canonical: `${baseUrl}/es/politecnico`,
      languages: {
        en: `${baseUrl}/en/politecnico`,
        "x-default": `${baseUrl}/politecnico`,
      },
    },
  },

  en: {
    title: "Digital Education Strategy for Politecnico | EdTech by Antares Innovate",
    description: "We help Politecnico modernize with academic platforms, automated enrollment, and digital branding to attract and retain students in competitive educational markets.",
    openGraph: {
      title: "Politecnico Digital Transformation | EdTech Solutions for Institutions",
      description: "From student experience to admissions automation and institutional branding — we provide digital tools to scale education in the US and LATAM.",
      url: `${baseUrl}/en/politecnico`,
      type: "website",
    },
    alternates: {
      canonical: `${baseUrl}/en/politecnico`,
      languages: {
        es: `${baseUrl}/es/politecnico`,
        "x-default": `${baseUrl}/politecnico`,
      },
    },
  },
};
