import Footer from "@/components/header/Footer";
import OurWork from "@/components/header/OurWork";
import BannerTest from "@/components/subPages/BannerSubPages";
import ConditionalText from "@/components/subPages/ConditionalTextResponsive";
import ProcessText from "@/components/subPages/ProcessText";
import TextSubPages from "@/components/subPages/TextSubPages";
import GridOneUpardigital from "@/components/upardigitalComponents/GridOneUpardigital";
import GridTwoUpardigital from "@/components/upardigitalComponents/GridTwoUpardigital";
import React from "react";

function UpardigitalPage() {
  return (
    <div className="relative">
      <div>
        <BannerTest
          videoUrl="https://storage.googleapis.com/antares-agency-rcs/uparpreview.mp4"
          title="Upardigital"
          subtitle="Revolucionando la educación virtual en Uparsistem"
          textPosition="left"
          ColorText="linear-gradient(to right, #A55D2A, #FFFFFF)"
        />
      </div>

      <div className=" mx-[21px] sm:mx-[21px] md:mx-[49px] lg:mx-[71px]">
        {/* degrade */}
        <div
          className="hidden sm:block absolute inset-x-0 mx-auto w-full max-w-[1409px] h-[542px]"
          style={{
            background:
              "radial-gradient(ellipse at center, #DA6A1A 0%, #0E051C 60%)",
            transform: "translateY(-50%)",
            zIndex: -1,
          }}
        ></div>
        {/* degrade */}

        <ConditionalText
          title="Upardigital"
          subtitle="Revolucionando la educación virtual en Uparsistem"
          gradient="linear-gradient(to right, #DA6A1A, #FFFFFF)"
        />

        <div className=" mt-[113px] sm:mt-[113px] md:mt-[119px] lg:mt-[152px] mb-[113px] sm:mb-[111px] md:mb-[111px] lg:mb-[154px]  ">
          <TextSubPages
            title="Innovación y Tecnología para la Educación del Futuro"
            subtitle="UI UX | Pitch | Prototipado"
            paragraph="Diseñamos Upardigital, una plataforma educativa innovadora pensada para los estudiantes de Uparsistem, con una experiencia UI/UX intuitiva y adaptada al público joven. La plataforma no solo brinda acceso a cursos virtuales y material académico, sino que también integra un sistema de navegación fluido, herramientas de aprendizaje autónomo y módulos interactivos que facilitan el acceso a la educación de manera flexible y escalable."
          />
        </div>

        <GridOneUpardigital />

        <div className="mt-[108px] sm:mt-[108px] md:mt-[111px] lg:mt-[156px] mb-[100px] sm:mb-[100px] md:mb-[106px] lg:mb-[155px]  ">
          <ProcessText
            paragraphs={[
              "Este ecosistema digital permite a los usuarios gestionar su progreso académico, acceder a contenido especializado y participar en evaluaciones dinámicas dentro de un entorno gamificado que motiva el aprendizaje continuo. Además, se diseñó con un enfoque de accesibilidad, asegurando que cada estudiante pueda aprovechar al máximo sus recursos educativos desde cualquier dispositivo.",
              "El impacto de Upardigital ha sido reconocido a nivel nacional, obteniendo el primer puesto en I+D+I dentro del Programa Órbita Cesar, un reconocimiento otorgado por la Cámara de Comercio bajo el respaldo del Ministerio de Ciencias de Colombia. Este premio destaca la contribución del proyecto en la transformación digital del sector educativo, consolidando a Uparsistem como una institución pionera en la implementación de tecnología para el aprendizaje virtual.",
            ]}
          />
        </div>

        <GridTwoUpardigital />

        <OurWork />
      </div>
      <Footer />
    </div>
  );
}

export default UpardigitalPage;
