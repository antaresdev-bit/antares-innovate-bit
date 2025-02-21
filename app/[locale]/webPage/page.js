import Footer from "@/app/components/header/Footer";
import OurWork from "@/app/components/header/OurWork";
import GridImageSectionThree from "@/app/components/webPageComponents/GridImageSectionThree";
import GridImageSectionTwo from "@/app/components/webPageComponents/GridImageSectionTwo";
import IntroductionWebPage from "@/app/components/webPageComponents/IntroductionWebPage";
import TextWebPage from "@/app/components/webPageComponents/TextWebPage";
import Banner from "@/app/components/webPageComponents/banner";
import GridImageSectionOne from "@/app/components/webPageComponents/gridImageSectionOne";
import React from "react";

function DesarrolloWebPage() {
  return (
    <div>
      <div className="relative">
        <Banner />
        {/* degrade */}
        <div
          className="absolute inset-x-0 mx-auto w-full max-w-[1409px] h-[542px]"
          style={{
            background:
              "radial-gradient(ellipse at center, #338285 0%, #0E051C 60%)",
            transform: "translateY(-50%)",
            zIndex: -1,
          }}
        ></div>

        {/* texto condicional unicamente para mostrar en responsive */}
        <div
          class="sm:block md:hidden lg:hidden mt-[100px] ml-[20px]"
          style={{
            fontFamily: "HandelGothic",
            fontSize: "46px",
            background: "linear-gradient(to right, #63B6DF, #FFFFFF)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            backgroundSize: "100% 150%",
            backgroundPosition: "center",
            padding: "20px 0",
          }}
        >
          <div class="text-left text-6xl">Diseño y Desarrollo Web</div>
          <div
            class="text-left text-2xl mt-[20px]"
            style={{
              fontFamily: "UniteaSans",
              fontSize: "25px",
              color:"white"
            }}
          >
            Innovación y Experiencia de Usuario de Alto Impacto
          </div>
        </div>
        {/* texto condicional unicamente para mostrar en responsive */}

        {/* degrade */}
        <div className="relative z-10">
          <IntroductionWebPage />
        </div>
      </div>

      <GridImageSectionOne />
      <TextWebPage />
      <GridImageSectionTwo />
      <GridImageSectionThree />
      <OurWork />
      <Footer />
    </div>
  );
}

export default DesarrolloWebPage;
