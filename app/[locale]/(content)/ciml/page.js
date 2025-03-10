import GridCimlOne from "@/components/CimlComponents/GridCimlOne";
import Footer from "@/components/header/Footer";
import OurWork from "@/components/header/OurWork";
import BannerTest from "@/components/subPages/BannerSubPages";
import ConditionalText from "@/components/subPages/ConditionalTextResponsive";
import GridImageSection from "@/components/subPages/GridImageSection";
import ProcessText from "@/components/subPages/ProcessText";
import TextSubPages from "@/components/subPages/TextSubPages";
import React from "react";

function CimlPage() {
  return (
    <div className="relative">
      <div>
        <BannerTest
          videoUrl="https://storage.googleapis.com/antares-agency-rcs/ciml%20Mockup%20Mo%CC%81dulo%20w.mp4"
          title="CIML"
          subtitle="Innovación Editorial para la Salud Pública"
          textPosition="left"
          ColorText="linear-gradient(to right, #862AA5, #FFFFFF)"
        />
      </div>

      <div className=" mx-[21px] sm:mx-[21px] md:mx-[49px] lg:mx-[71px]">
        {/* degrade */}
        <div
          className="hidden sm:block absolute inset-x-0 mx-auto w-full max-w-[1409px] h-[542px]"
          style={{
            background:
              "radial-gradient(ellipse at center, #853377 0%, #0E051C 60%)",
            transform: "translateY(-50%)",
            zIndex: -1,
          }}
        ></div>
        {/* degrade */}

        <ConditionalText
          title="CIML"
          subtitle="Innovación Editorial para la Salud Pública"
          gradient="linear-gradient(to right, #DA6A1A, #FFFFFF)"
        />

        <div className=" mt-[113px] sm:mt-[113px] md:mt-[119px] lg:mt-[152px] mb-[113px] sm:mb-[111px] md:mb-[111px] lg:mb-[154px]  ">
          <TextSubPages
            title="Estrategias Visuales para la Educación y Concienciación Social"
            subtitle="Editorial | Redes Sociales | Manuales | Impreso/Digital "
            paragraph="El Centro de Innovación Mujer Latina (CIML) ha sido un pilar en la generación de contenido educativo y social en Estados Unidos. Nuestra colaboración se enfocó en el desarrollo de materiales editoriales, estructurando manuales, libros, cartillas, brochures y revistas en formatos físicos y digitales."
          />
        </div>

        <GridImageSection
          images={{
            top: {
              src: "/assets/images/ciml/1.png",
              alt: "ciml",
            },
            left: {
              src: "/assets/images/ciml/2.jpg",
              alt: "ciml",
            },
            right: {
              src: "/assets/images/ciml/3.png",
              alt: "ciml",
            },
            bottom: {
              src: "/assets/images/ciml/4.jpg",
              alt: "ciml",
            },
          }}
        />

        <div className="mt-[108px] sm:mt-[108px] md:mt-[111px] lg:mt-[156px] mb-[100px] sm:mb-[100px] md:mb-[106px] lg:mb-[155px]  ">
          <ProcessText
            paragraphs={[
              "Uno de los proyectos más relevantes fue la campaña impulsada por el Gobierno de los Estados Unidos, destinada a la prevención y tratamiento de la crisis de opioides. Este proyecto incluyó la creación de documentos instructivos dirigidos a diferentes sectores: niños y jóvenes, adultos en general, profesionales de la salud (con énfasis en psicología) y padres de familia.",
              "Para esta iniciativa, se desarrolló un diseño editorial con un tratamiento gráfico especializado, asegurando que el mensaje transmitiera con precisión los aspectos médicos, psicológicos y sociales de la problemática. La identidad visual fue cuidadosamente elaborada para reflejar seriedad y credibilidad, utilizando elementos gráficos que facilitaran la comprensión de la información según el público objetivo.",
              "Cada pieza editorial combinó diagramación estructurada, iconografía explicativa y contenido visual de apoyo, garantizando una lectura intuitiva y efectiva. Este proyecto consolidó la capacidad de CIML para impulsar campañas de impacto social y reafirmó nuestra experiencia en diseño y producción editorial especializada en el sector de salud pública.",
            ]}
          />
        </div>

        <GridCimlOne />

        <OurWork />
      </div>
      <Footer />
    </div>
  );
}

export default CimlPage;
