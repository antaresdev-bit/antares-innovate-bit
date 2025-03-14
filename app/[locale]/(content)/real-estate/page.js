import Footer from "@/components/header/Footer";
import ConditionalTextMarketing from "@/components/marketingComponents/ConditionalTextMarketing";
import ArchitectProfile from "@/components/realEstateComponents/ArchitectProfile";
import BannerRealEstate from "@/components/realEstateComponents/BannerRealEstate";
import CardArchitecture from "@/components/realEstateComponents/CardArchitecture";
import CardContact from "@/components/realEstateComponents/CardContact";
import CardGrowth from "@/components/realEstateComponents/CardGrowth";
import CardsSlider from "@/components/realEstateComponents/CardsSlider";
import ConditionalCard from "@/components/realEstateComponents/ConditionalCard";
import ConditionalTextArchitect from "@/components/realEstateComponents/ConditionalTextArquitect";
import StatisticsArchitecture from "@/components/realEstateComponents/StatisticsArchitecture";
import React from "react";

function page() {
  return (
    <div className="relative">
      <BannerRealEstate />

      <div className="max-w-[1500px] mx-auto px-[21px] sm:px-[21px] md:px-[49px] lg:px-[71px]">
        <ConditionalTextArchitect
          title="Industria Inmobiliaria"
          subtitle="“Arquitectos Expertos en Innovación”"
          gradient="linear-gradient(to right, #FFFFFF, #FFFFFF)"
          circleColor="#FDC548"
          iconSrc="/assets/images/inmobiliaria/Vector.png"
        />

        <ArchitectProfile />

        <StatisticsArchitecture />

        <CardArchitecture />

        <div className="  mt-[163px] sm:mt-[163px] md:mt-[143px] lg:mt-[210px]    ">
          <h1
            className="  text-[48px] sm;text-[48px] md:text-[56px] lg:text-[56px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4D86FF] to-[#FFFFFF] leading-[50px] max-w-[800px] "
            style={{ fontFamily: "HandelGothic" }}
          >
            Algunos de Nuestros Proyectos
          </h1>
        </div>

        <CardsSlider />

        <div className="  mt-[163px] sm:mt-[163px] md:mt-[143px] lg:mt-[210px]    ">
          <h1
            className="  text-[48px] sm;text-[48px] md:text-[56px] lg:text-[56px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4D86FF] to-[#FFFFFF] leading-[50px] max-w-[800px] "
            style={{ fontFamily: "HandelGothic" }}
          >
            Impulsamos el Crecimiento
          </h1>
        </div>

        <div className="hidden md:block sm:hidden lg:hidden">
          <ConditionalCard />
        </div>

        <CardGrowth />

        <CardContact />
      </div>
      <Footer />
    </div>
  );
}

export default page;
