import Footer from "@/components/header/Footer";
import ArchitectProfile from "@/components/realEstateComponents/ArchitectProfile";
import BannerRealEstate from "@/components/realEstateComponents/BannerRealEstate";
import CardArchitecture from "@/components/realEstateComponents/CardArchitecture";
import CardContact from "@/components/realEstateComponents/CardContact";
import CardGrowth from "@/components/realEstateComponents/CardGrowth";
import CardsSlider from "@/components/realEstateComponents/CardsSlider";
import ConditionalCard from "@/components/realEstateComponents/ConditionalCard";
import ConditionalTextArchitect from "@/components/realEstateComponents/ConditionalTextArquitect";
import StatisticsArchitecture from "@/components/realEstateComponents/StatisticsArchitecture";
import { useTranslations } from "next-intl";
import React from "react";
import { metadataRealEstate } from "./metadata-realEstate";

export { metadataRealEstate };

function page() {
  const t = useTranslations("realEstate");
  return (
    <div className="relative">
      <BannerRealEstate />

      <div className="max-w-[1500px] mx-auto px-[21px] sm:px-[21px] md:px-[49px] lg:px-[71px]">
        <ConditionalTextArchitect
          title={t("bannerRealText1")}
          subtitle={t("bannerRealText2")}
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
            {t("realEstText13")}
          </h1>
        </div>

        <CardsSlider />

        <div className="  mt-[163px] sm:mt-[163px] md:mt-[143px] lg:mt-[210px]    ">
          <h1
            className="  text-[48px] sm;text-[48px] md:text-[56px] lg:text-[56px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4D86FF] to-[#FFFFFF] leading-[50px] max-w-[800px] "
            style={{ fontFamily: "HandelGothic" }}
          >
            {t("realEstText14")}
          </h1>
        </div>

        <div className="hidden md:block sm:hidden lg:hidden">
          <ConditionalCard />
        </div>

        <CardGrowth />

        <div className="mt-[100px] sm:mt-[10px] md:mt-[150px] lg:mt-[180px]">
          <CardContact />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default page;
