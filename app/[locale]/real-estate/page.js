import Footer from "@/app/components/header/Footer";
import ArchitectProfile from "@/app/components/realEstateComponents/ArchitectProfile";
import BannerRealEstate from "@/app/components/realEstateComponents/BannerRealEstate";
import CardArchitecture from "@/app/components/realEstateComponents/CardArchitecture";
import CardContact from "@/app/components/realEstateComponents/CardContact";
import CardGrowth from "@/app/components/realEstateComponents/CardGrowth";
import CardsSlider from "@/app/components/realEstateComponents/CardsSlider";
import ConditionalTextArchitect from "@/app/components/realEstateComponents/ConditionalTextArquitect";
import StatisticsArchitecture from "@/app/components/realEstateComponents/StatisticsArchitecture";
import React from "react";

function page() {
  return (
    <div className="relative">
      <BannerRealEstate />

      <ConditionalTextArchitect
        title="Industria Inmobiliaria"
        subtitle="“Arquitectos Expertos en Innovación”"
        gradient="linear-gradient(to right, #FFFFFF, #FFFFFF)"
      />

      <ArchitectProfile />

      <StatisticsArchitecture/>

      <CardArchitecture/>

      <CardsSlider/>

      <CardGrowth/>

      <CardContact/>

      <Footer />

    </div>
  );
}

export default page;
