const baseUrl = "https://www.antaresinnovate.com";

export const metadataCIML = {
  es: {
    title: "Transformación Digital para CIML | Automatización y Marketing Médico | Antares Innovate",
    description: "Impulsamos a CIML con soluciones tecnológicas, automatización de procesos, branding médico y presencia digital profesional para el sector salud.",
    openGraph: {
      title: "Estrategia Digital para Centros Médicos | Caso CIML",
      description: "Automatización, diseño UI/UX, posicionamiento SEO y soluciones CRM para clínicas modernas como CIML. Transformación digital con impacto clínico.",
      url: `${baseUrl}/es/ciml`,
      type: "website",
    },
    alternates: {
      canonical: `${baseUrl}/es/ciml`,
      languages: {
        en: `${baseUrl}/en/ciml`,
        "x-default": `${baseUrl}/ciml`,
      },
    },
  },

  en: {
    title: "CIML Digital Transformation | Medical Automation & Branding | Antares Innovate",
    description: "We empower CIML with cutting-edge medical automation, CRM systems, branding strategies and digital tools to scale healthcare services in the US market.",
    openGraph: {
      title: "Medical Digital Strategy for CIML | Antares Innovate",
      description: "Complete digital solutions for modern clinics. From CRM and process automation to brand positioning, we help CIML grow in a tech-driven healthcare world.",
      url: `${baseUrl}/en/ciml`,
      type: "website",
    },
    alternates: {
      canonical: `${baseUrl}/en/ciml`,
      languages: {
        es: `${baseUrl}/es/ciml`,
        "x-default": `${baseUrl}/ciml`,
      },
    },
  },
};
