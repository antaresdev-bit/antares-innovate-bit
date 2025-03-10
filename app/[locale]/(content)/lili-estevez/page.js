import GridCimlOne from "@/components/CimlComponents/GridCimlOne";
import Footer from "@/components/header/Footer";
import OurWork from "@/components/header/OurWork";
import GridLiliOne from "@/components/liliComponents/GridLiliOne";
import BannerTest from "@/components/subPages/BannerSubPages";
import ConditionalText from "@/components/subPages/ConditionalTextResponsive";
import GridImageSection from "@/components/subPages/GridImageSection";
import ProcessText from "@/components/subPages/ProcessText";
import TextSubPages from "@/components/subPages/TextSubPages";
import React from "react";

function LiliEstevezPage() {
  return (
    <div className="relative">
      <div>
        <BannerTest
          videoUrl="https://storage.googleapis.com/antares-agency-rcs/1-LiliEstevez.mp4"
          title="Lili Estevez"
          subtitle="Concept Art para Sencillo Musical “La Señal"
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
          title="Lili Estevez"
          subtitle="Concept Art para Sencillo Musical “La Señal"
          gradient="linear-gradient(to right, #862AA5, #FFFFFF)"
        />

        <div className=" mt-[113px] sm:mt-[113px] md:mt-[119px] lg:mt-[152px] mb-[113px] sm:mb-[111px] md:mb-[111px] lg:mb-[154px]  ">
          <TextSubPages
            title="Estética Retrofuturista para una Experiencia Visual Inmersiva"
            subtitle="Concept Art | Cover Art | Lyric Video | Press kit"
            paragraph="Para el lanzamiento de 'La Señal', el sencillo de Lili Estevez co-producido por José Manuel Velásquez, desarrollamos una propuesta visual inmersiva con una fuerte inspiración en el retrofuturismo. Fusionamos elementos del Y2K de finales de los 90s y principios de los 2000s, junto con un imaginario cósmico y espacial, evocando una estética nostálgica pero futurista"
          />
        </div>

        <GridImageSection
          images={{
            top: {
              src: "/assets/images/lili-estevez/1.jpg",
              alt: "lili",
            },
            left: {
                src: "/assets/images/lili-estevez/2.jpg",
                alt: "lili",
            },
            right: {
                src: "/assets/images/lili-estevez/3.png",
                alt: "lili",
            },
            bottom: {
                src: "/assets/images/lili-estevez/4.jpg",
                alt: "lili",
            },
          }}
        />

        <div className="mt-[108px] sm:mt-[108px] md:mt-[111px] lg:mt-[156px] mb-[100px] sm:mb-[100px] md:mb-[106px] lg:mb-[155px]  ">
          <ProcessText
            paragraphs={[
              "Uno de los pilares clave del proyecto fue la producción del lyric video, en el que trabajamos intensivamente con motion graphics. Se diseñaron animaciones dinámicas con efectos glitch, tipografías digitales y gráficos en neón, que se integraron con tomas reales de Lili grabadas en pantalla verde.",
              "Esta combinación permitió que la artista se fusionara con los entornos digitales de manera fluida, generando una experiencia visual envolvente.",
              "Además, creamos un paquete completo de piezas promocionales, incluyendo portadas, press kits y animaciones para redes sociales, todo alineado bajo una estética coherente que reforzara la identidad del sencillo.",
            ]}
          />
        </div>

        <GridLiliOne />

        <OurWork />
      </div>
      <Footer />
    </div>
  );
}

export default LiliEstevezPage;
