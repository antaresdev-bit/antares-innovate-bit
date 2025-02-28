import Footer from "@/components/header/Footer";
import ArchitectProfile from "@/components/realEstateComponents/ArchitectProfile";
import BannerRealEstate from "@/components/realEstateComponents/BannerRealEstate";
import CardArchitecture from "@/components/realEstateComponents/CardArchitecture";
import CardContact from "@/components/realEstateComponents/CardContact";
import CardGrowth from "@/components/realEstateComponents/CardGrowth";
import CardsSlider from "@/components/realEstateComponents/CardsSlider";
import ConditionalTextArchitect from "@/components/realEstateComponents/ConditionalTextArquitect";
import StatisticsArchitecture from "@/components/realEstateComponents/StatisticsArchitecture";
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
