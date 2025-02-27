import Footer from "@/components/header/Footer";
import BannerMarketing from "@/components/marketingComponents/BannerMarketing";
import CardMarketing from "@/components/marketingComponents/CardMarketing";
import ConditionalTextMarketing from "@/components/marketingComponents/ConditionalTextMarketing";
import InfoCard from "@/components/marketingComponents/InfoCard";
import IntroductionMarketing from "@/components/marketingComponents/IntroductionMarketing";
import MarketingProfile from "@/components/marketingComponents/MarketingProfile";
import MarketingStadicticts from "@/components/marketingComponents/MarketingStadicticts";
import SliderMarketing from "@/components/marketingComponents/SliderMarketing";
import VideoCard from "@/components/marketingComponents/VideoCard";
import ConditionalTextArchitect from "@/components/realEstateComponents/ConditionalTextArquitect";
import React from "react";

function page() {
  return (
    <div className="relative">
      <BannerMarketing />

      <ConditionalTextMarketing
        title="Industria del Marketing"
        subtitle="“En Antares, no solo anticipamos la revolución digital; la lideramos.”"
        gradient="linear-gradient(to right, #FFFFFF, #FFFFFF)"
      />

      <MarketingProfile />

      <CardMarketing />

      <MarketingStadicticts />

      <SliderMarketing />

      <InfoCard />

      <div className="flex justify-center items-center">
        <div className="relative z-10">
          <IntroductionMarketing />
        </div>
      </div>

      <VideoCard/>

      <Footer />
    </div>
  );
}

export default page;
