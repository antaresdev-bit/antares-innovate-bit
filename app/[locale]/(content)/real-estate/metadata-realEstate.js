const baseUrl = "https://www.antaresinnovate.com";

export const metadataRealEstate = {
  es: {
    title: "Soluciones Digitales para Bienes Raíces en EE.UU. | Antares Innovate",
    description: "Estrategias de marketing digital especializadas para el mercado inmobiliario estadounidense. Aumentamos tu presencia y leads calificados.",
    openGraph: {
      title: "Marketing Inmobiliario para el Mercado de EE.UU. | Antares Innovate",
      description: "Servicios digitales para agencias y desarrolladores inmobiliarios que buscan crecer en el competitivo mercado colombiano y de Estados Unidos.",
      url: `${baseUrl}/es/real-estate`,
      type: "website",
    },
    alternates: {
      canonical: `${baseUrl}/es/real-estate`,
      languages: {
        en: `${baseUrl}/en/real-estate`,
        "x-default": `${baseUrl}/real-estate`,
      },
    },
  },

  en: {
    title: "Real Estate Digital Marketing Solutions for US Market | Antares Innovate",
    description: "Specialized digital strategies for US real estate agents and developers. We boost your online presence and generate qualified leads in competitive markets.",
    openGraph: {
      title: "US Real Estate Marketing Experts | Digital Growth Strategies",
      description: "Data-driven marketing solutions tailored for real estate professionals targeting the US market. Lead generation and brand positioning services.",
      url: `${baseUrl}/en/real-estate`,
      type: "website",
    },
    alternates: {
      canonical: `${baseUrl}/en/real-estate`,
      languages: {
        es: `${baseUrl}/es/real-estate`,
        "x-default": `${baseUrl}/real-estate`,
      },
    },
  },
};