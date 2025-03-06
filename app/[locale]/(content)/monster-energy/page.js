import Footer from "@/components/header/Footer";
import OurWork from "@/components/header/OurWork";
import GridOneMonsterEnergy from "@/components/monsterEnergyComponents/GridOneMonsterEnergy";
import GridTwoMonsterEnergy from "@/components/monsterEnergyComponents/GridTwoMonsterEnergy";
import IntroductionMonsterEnergy from "@/components/monsterEnergyComponents/IntroductionMonsterEnergy";
import BannerTest from "@/components/subPages/BannerSubPages";
import ConditionalText from "@/components/subPages/ConditionalTextResponsive";
import ProcessText from "@/components/subPages/ProcessText";
import TextSubPages from "@/components/subPages/TextSubPages";
import GridTwoUpardigital from "@/components/upardigitalComponents/GridTwoUpardigital";
import UpardigitalText from "@/components/upardigitalComponents/UpardigitalText";
import React from "react";

function MonsterEnergy() {
  return (
    <div className="relative">
      <div>
        <BannerTest
          videoUrl="https://storage.googleapis.com/antares-agency-rcs/Monster%20Preview.mp4"
          title="Monster Energy"
          subtitle="“I am The Beast”"
          textPosition="left"
        />
      </div>

      <div className=" mx-[21px] sm:mx-[21px] md:mx-[49px] lg:mx-[71px]">
        {/* degrade */}
        <div
          className="hidden sm:block absolute inset-x-0 mx-auto w-full max-w-[1409px] h-[542px]"
          style={{
            background:
              "radial-gradient(ellipse at center, #5A9A22 0%, #0E051C 60%)",
            transform: "translateY(-50%)",
            zIndex: -1,
          }}
        ></div>
        {/* degrade */}

        <ConditionalText
          title="Monster Energy"
          subtitle="“I am The Beast”"
          gradient="linear-gradient(to right, #70A52A, #FFFFFF)"
        />

        <div className=" mt-[113px] sm:mt-[113px] md:mt-[119px] lg:mt-[152px] mb-[113px] sm:mb-[111px] md:mb-[111px] lg:mb-[154px]  ">
          <TextSubPages
            title="Desatando la Bestia: Estrategia y Diseño para una Presencia Imponente"
            subtitle="Presencia de Marca | Activaciones | Eventos | Stands"
            paragraph="Monster Energy es sinónimo de adrenalina, fuerza y una actitud desafiante. Nuestra colaboración con la marca se centró en consolidar su presencia en puntos de venta estratégicos y eventos masivos, asegurando que su identidad visual y mensaje resonaran con su audiencia."
          />
          {/* <IntroductionMonsterEnergy /> */}
        </div>

        <GridOneMonsterEnergy />

        <div className="mt-[108px] sm:mt-[108px] md:mt-[111px] lg:mt-[156px] mb-[100px] sm:mb-[100px] md:mb-[106px] lg:mb-[155px]  ">
          <ProcessText
            paragraphs={[
              `En esta ocasión, trabajamos en la campaña "I AM THE BEAST", una variación de su icónico lema "Unleash the Beast2", desarrollada bajo la imagen del luchador de UFC Conor McGregor. La campaña buscó transmitir energía y determinación, alineándose con la personalidad intensa del deportista y la filosofía de la marca.`,
              "La activación de marca incluyó stands en supermercados, exhibiciones en grandes eventos y mobiliario personalizado en puntos de venta. Elementos como neveras, displays, mostradores y merchandising temático fueron diseñados para captar la atención del consumidor e impulsar la interacción con la marca.",
              "Además, desarrollamos piezas visuales con un enfoque disruptivo: gráficos de impacto, guitarras personalizadas, material POP y renders para la presentación en retail. La estética visual de la campaña se basó en el contraste entre negro y verde neón, reforzando el carácter imponente de Monster Energy en el mercado.",
              "Esta campaña no solo elevó la visibilidad de la marca, sino que consolidó su identidad en entornos clave, generando un vínculo poderoso con su comunidad de seguidores.",
            ]}
          />
        </div>

        <GridTwoMonsterEnergy />

        <OurWork />
      </div>
      <Footer />
    </div>
  );
}

export default MonsterEnergy;
