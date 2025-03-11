import Footer from "@/components/header/Footer";
import OurWork from "@/components/header/OurWork";
import GridLiliOne from "@/components/liliComponents/GridLiliOne";
import BannerTest from "@/components/subPages/BannerSubPages";
import ConditionalText from "@/components/subPages/ConditionalTextResponsive";
import GridImageSection from "@/components/subPages/GridImageSection";
import GridImageVideo from "@/components/subPages/GridImageVideo";
import ProcessText from "@/components/subPages/ProcessText";
import TextSubPages from "@/components/subPages/TextSubPages";
import GridLUparsistemGrid from "@/components/uparsistemComponents/GridLUparsistemGrid";
import React from "react";

function UparsistemPage() {
  return (
    <div className="relative">
      <div>
        <BannerTest
          videoUrl="https://storage.googleapis.com/antares-agency-rcs/Uparsistem%20Banner.mp4"
          title="Uparsistem"
          subtitle="Consolidando su Identidad Universitaria"
          textPosition="left"
          ColorText="linear-gradient(to right, #2A47A5, #FFFFFF)"
        />
      </div>

      <div className=" mx-[21px] sm:mx-[21px] md:mx-[49px] lg:mx-[71px]">
        {/* degrade */}
        <div
          className="hidden sm:block absolute inset-x-0 mx-auto w-full max-w-[1409px] h-[542px]"
          style={{
            background:
              "radial-gradient(ellipse at center, #334385 0%, #0B0C28 60%)",
            transform: "translateY(-50%)",
            zIndex: -1,
          }}
        ></div>
        {/* degrade */}

        <ConditionalText
          title="Uparsistem"
          subtitle="Consolidando su Identidad Universitaria"
          gradient="linear-gradient(to right, #2A47A5, #FFFFFF)"
        />

        <div className=" mt-[113px] sm:mt-[113px] md:mt-[119px] lg:mt-[152px] mb-[113px] sm:mb-[111px] md:mb-[111px] lg:mb-[154px]  ">
          <TextSubPages
            title="Forjando una Nueva Imagen para el Desarrollo Académico"
            subtitle="Branding | Brand Book"
            paragraph="Uparsistem avanza en su proceso de formalización como institución universitaria, y para ello desarrollamos una estrategia de branding integral que refuerza su identidad y su presencia en el sector educativo."
          />
        </div>

        <GridImageVideo
          media={{
            top: {
              type: "video",
              src: "https://storage.googleapis.com/antares-agency-rcs/1%20Uparsistem.mp4",
              alt: "Uparsistem",
            },
            left: {
                type: "image",
                src: "/assets/images/upairsistem/2.jpg",
                alt: "Uparsistem",
            },
            right: {
                type: "image",
                src: "/assets/images/upairsistem/3.jpg",
                alt: "Uparsistem",
            },

            bottom: {
                type: "image",
                src: "/assets/images/upairsistem/4.jpg",
                alt: "Uparsistem",
            },
          }}
        />

        <div className="mt-[108px] sm:mt-[108px] md:mt-[111px] lg:mt-[156px] mb-[100px] sm:mb-[100px] md:mb-[106px] lg:mb-[155px]  ">
          <ProcessText
            paragraphs={[
              "Diseñamos un manual de marca detallado, definiendo lineamientos de identidad visual que garantizan coherencia y solidez en cada una de sus aplicaciones.",
              "Este proceso incluyó un rediseño completo de la imagen institucional, con una identidad gráfica moderna y alineada con la visión de la institución. Se trabajó en la conceptualización visual para reflejar innovación, dinamismo y accesibilidad, asegurando que la marca transmita confianza y solidez en su evolución como universidad.",
              "Además, se implementaron aplicaciones digitales y materiales gráficos que fortalecen la comunicación visual, consolidando la marca en el entorno educativo y preparando el camino para su reconocimiento oficial.",
            ]}
          />
        </div>

        <GridLUparsistemGrid />

        <OurWork />
      </div>
      <Footer />
    </div>
  );
}

export default UparsistemPage;
