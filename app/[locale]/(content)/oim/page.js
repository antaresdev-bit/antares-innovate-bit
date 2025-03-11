import Footer from "@/components/header/Footer";
import OurWork from "@/components/header/OurWork";
import OimGridOne from "@/components/oimComponents/OimGridOne";
import BannerTest from "@/components/subPages/BannerSubPages";
import ConditionalText from "@/components/subPages/ConditionalTextResponsive";
import GridImageSection from "@/components/subPages/GridImageSection";
import ProcessText from "@/components/subPages/ProcessText";
import TextSubPages from "@/components/subPages/TextSubPages";
import React from "react";

function OimPage() {
  return (
    <div className="relative">
      <div>
        <BannerTest
          videoUrl="https://storage.googleapis.com/antares-agency-rcs/oimBanner.mp4"
          title="OIM"
          subtitle="Cartografía Migratoria: Impacto de la Migración Haitiana"
          textPosition="left"
          ColorText="linear-gradient(to right, #4096D3, #FFFFFF)"
        />
      </div>

      <div className=" mx-[21px] sm:mx-[21px] md:mx-[49px] lg:mx-[71px]">
        {/* degrade */}
        <div
          className="hidden sm:block absolute inset-x-0 mx-auto w-full max-w-[1409px] h-[542px]"
          style={{
            background:
              "radial-gradient(ellipse at center, #335D85 0%, #0E051C 60%)",
            transform: "translateY(-50%)",
            zIndex: -1,
          }}
        ></div>
        {/* degrade */}

        <ConditionalText
          title="OIM"
          subtitle="Cartografía Migratoria: Impacto de la Migración Haitiana"
          gradient="linear-gradient(to right, #4096D3, #FFFFFF)"
        />

        <div className=" mt-[113px] sm:mt-[113px] md:mt-[119px] lg:mt-[152px] mb-[113px] sm:mb-[111px] md:mb-[111px] lg:mb-[154px]  ">
          <TextSubPages
            title="Análisis Visual de la Movilidad Haitiana para la OIM"
            subtitle="Cartografía | Fact Sheet"
            paragraph="Colaboramos con la OIM (Organización Internacional para las Migraciones) de la ONU (Organización de las Naciones Unidas)
            en la creación de un sistema de mapas que documentan la migración haitiana y su impacto en la región."
          />
        </div>

        <GridImageSection
          images={{
            top: {
              src: "/assets/images/oim/1.jpg",
              alt: "oim",
            },
            left: {
              src: "/assets/images/oim/2.jpg",
              alt: "oim",
            },
            right: {
              src: "/assets/images/oim/3.png",
              alt: "oim",
            },
            bottom: {
              src: "/assets/images/oim/4.jpg",
              alt: "oim",
            },
          }}
        />

        <div className="mt-[108px] sm:mt-[108px] md:mt-[111px] lg:mt-[156px] mb-[100px] sm:mb-[100px] md:mb-[106px] lg:mb-[155px]  ">
          <ProcessText
            paragraphs={[
              "A partir de datos técnicos especializados, desarrollamos visualizaciones de fácil interpretación que permiten comprender las rutas migratorias, los factores económicos involucrados y los riesgos asociados al desplazamiento irregular.",
              "Estos mapas se integraron en un Fact Sheet oficial, distribuido por la OIM a nivel global como material informativo clave.",
              "Su claridad y precisión lo convirtieron en una referencia para medios de comunicación y organismos internacionales, sirviendo como base para reportes y análisis sobre la crisis migratoria en Haití.",
              "El proyecto destacó por su enfoque accesible y su capacidad para sintetizar datos complejos en representaciones visuales comprensibles, facilitando la difusión de información crucial sobre el fenómeno migratorio en el Caribe.",
            ]}
          />
        </div>

        <OimGridOne />

        <OurWork />
      </div>
      <Footer />
    </div>
  );
}

export default OimPage;
