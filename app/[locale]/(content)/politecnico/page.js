import GridCimlOne from "@/components/CimlComponents/GridCimlOne";
import GridPoliOne from "@/components/PolitecnicoComponents/GridPoliOne";
import Footer from "@/components/header/Footer";
import OurWork from "@/components/header/OurWork";
import BannerTest from "@/components/subPages/BannerSubPages";
import ConditionalText from "@/components/subPages/ConditionalTextResponsive";
import GridImageSection from "@/components/subPages/GridImageSection";
import GridImageVideo from "@/components/subPages/GridImageVideo";
import ProcessText from "@/components/subPages/ProcessText";
import TextSubPages from "@/components/subPages/TextSubPages";
import React from "react";

function PolitecnicoPage() {
  return (
    <div className="relative">
      <div>
        <BannerTest
          videoUrl="https://storage.googleapis.com/antares-agency-rcs/politecnico%20Mockup.mp4"
          title="Politécnico Grancolombiano"
          subtitle="Estrategia Digital para Conectar con los Jóvenes"
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
              "radial-gradient(ellipse at center, #335D85 0%, #0B0C28 60%)",
            transform: "translateY(-50%)",
            zIndex: -1,
          }}
        ></div>
        {/* degrade */}

        <ConditionalText
          title="Politécnico Grancolombiano"
          subtitle="Estrategia Digital para Conectar con los Jóvenes"
          gradient="linear-gradient(to right, #4096D3, #FFFFFF)"
        />

        <div className=" mt-[113px] sm:mt-[113px] md:mt-[119px] lg:mt-[152px] mb-[113px] sm:mb-[111px] md:mb-[111px] lg:mb-[154px]  ">
          <TextSubPages
            title="Creatividad para una Conexión Auténtica con la Generación Joven"
            subtitle="Email Marketing | Redes Sociales "
            paragraph="Nuestra colaboración con El Poli estuvo enfocada en la creación de piezas de email marketing y contenido visual para campañas en redes sociales. El objetivo era generar una comunicación efectiva y cercana con los jóvenes, utilizando un lenguaje fresco y moderno, alineado con su estilo de vida digital."
          />
        </div>

        <GridImageVideo
          media={{
            top:{
                type: "image",
                src: "/assets/images/politecnico/1.png",
                alt: "Politecnico",
              },
            left: {
                type: "video",
                src: "https://storage.googleapis.com/antares-agency-rcs/3-politecnico.mp4",
              },
            right: {
              type: "video",
              src: "https://storage.googleapis.com/antares-agency-rcs/4-politecnico.mp4",
            },
            bottom: {
              type: "image",
              src: "/assets/images/politecnico/2.png",
              alt: "Bottom Image",
            },
          }}
        />

        <div className="mt-[108px] sm:mt-[108px] md:mt-[111px] lg:mt-[156px] mb-[100px] sm:mb-[100px] md:mb-[106px] lg:mb-[155px]  ">
          <ProcessText
            paragraphs={[
              "Para lograrlo, desarrollamos piezas visuales con una estética dinámica, integrando colores vibrantes, tipografías llamativas y composiciones interactivas que captaran la atención de los estudiantes potenciales. La estrategia incluyó campañas de captación, fidelización y promociones especiales, asegurando que la información fuera accesible y atractiva.",
              "El contenido en redes sociales se diseñó bajo un enfoque conversacional y participativo, promoviendo la interacción a través de stories animadas, publicaciones informativas y material audiovisual adaptado a diferentes formatos. Paralelamente, los correos electrónicos se estructuraron con un diseño responsive, asegurando una experiencia óptima tanto en móviles como en computadoras.",
              "Gracias a esta estrategia, se logró un mayor engagement en redes y una optimización en la tasa de apertura de correos electrónicos, consolidando la presencia digital de El Poli y su conexión con la comunidad estudiantil.",
            ]}
          />
        </div>

        <GridPoliOne />

        <OurWork />
      </div>
      <Footer />
    </div>
  );
}

export default PolitecnicoPage;
