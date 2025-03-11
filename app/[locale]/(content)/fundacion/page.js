
import FundacionGridOne from "@/components/fundacionComponents/FundacionGridOne";
import FundacionGridTwo from "@/components/fundacionComponents/FundacionGridTwo";
import Footer from "@/components/header/Footer";
import OurWork from "@/components/header/OurWork";
import BannerTest from "@/components/subPages/BannerSubPages";
import ConditionalText from "@/components/subPages/ConditionalTextResponsive";
import ProcessText from "@/components/subPages/ProcessText";
import TextSubPages from "@/components/subPages/TextSubPages";
import React from "react";

function FundacionPage() {
  return (
    <div className="relative">
      <div>
        <BannerTest
          videoUrl="https://storage.googleapis.com/antares-agency-rcs/fundacion6.mp4"
          title="Fundación Heinrich Böll"
          subtitle="Escuela de Administración y Gestión del Estado para Transiciones Justas"
          textPosition="left"
          ColorText="linear-gradient(to right, #91C746, #FFFFFF)"
        />
      </div>

      <div className=" mx-[21px] sm:mx-[21px] md:mx-[49px] lg:mx-[71px]">
        {/* degrade */}
        <div
          className="hidden sm:block absolute inset-x-0 mx-auto w-full max-w-[1409px] h-[542px]"
          style={{
            background:
              "radial-gradient(ellipse at center, #6C8533 0%, #0E051C 60%)",
            transform: "translateY(-50%)",
            zIndex: -1,
          }}
        ></div>
        {/* degrade */}

        <ConditionalText
          title="Fundación Heinrich Böll"
          subtitle="Escuela de Administración y Gestión del Estado para Transiciones Justas"
          gradient="linear-gradient(to right, #91C746, #FFFFFF)"
        />

        <div className=" mt-[113px] sm:mt-[113px] md:mt-[119px] lg:mt-[152px] mb-[113px] sm:mb-[111px] md:mb-[111px] lg:mb-[154px]  ">
          <TextSubPages
            title="Narrativas Visuales para el Cambio: Estrategias de Transición Justa"
            subtitle="Producción Audiovisual | Motion Graphics"
            paragraph="Colaboramos en la producción audiovisual documental de la Escuela de Administración y Gestión del Estado para Transiciones Justas, un proyecto impulsado por la Fundación Heinrich Böll en Colombia."
          />
        </div>

        <FundacionGridOne/>

        <div className="mt-[108px] sm:mt-[108px] md:mt-[111px] lg:mt-[156px] mb-[100px] sm:mb-[100px] md:mb-[106px] lg:mb-[155px]  ">
          <ProcessText
            paragraphs={[
              "Este programa busca integrar a diversos actores, incluyendo tomadores de decisiones y políticos, en la adopción de estrategias que armonicen el desarrollo socioeconómico con la sostenibilidad ambiental.",
              "El documental captura testimonios clave de profesores, estudiantes y expertos en el campo, mostrando el impacto de la iniciativa en la formación de nuevas políticas públicas alineadas con principios de justicia ambiental y climática.",
              "A través de una estética visual 'orgánica', reflejamos la identidad ecológica y social de la fundación, utilizando una edición dinámica que combina entrevistas, fragmentos de clases y síntesis de los temas abordados. Este material audiovisual se convierte en una herramienta clave para promover la integración de políticas de transición justa, destacando el compromiso de la Fundación Heinrich Böll con el medio ambiente y la equidad social.",
            ]}
          />
        </div>

        <FundacionGridTwo/>

        <OurWork />
      </div>
      <Footer />
    </div>
  );
}

export default FundacionPage;
