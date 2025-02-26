import Footer from "@/app/components/header/Footer";
import BannerMarketing from "@/app/components/marketingComponents/BannerMarketing";
import CardMarketing from "@/app/components/marketingComponents/CardMarketing";
import ConditionalTextMarketing from "@/app/components/marketingComponents/ConditionalTextMarketing";
import InfoCard from "@/app/components/marketingComponents/InfoCard";
import IntroductionMarketing from "@/app/components/marketingComponents/IntroductionMarketing";
import MarketingProfile from "@/app/components/marketingComponents/MarketingProfile";
import MarketingStadicticts from "@/app/components/marketingComponents/MarketingStadicticts";
import SliderMarketing from "@/app/components/marketingComponents/SliderMarketing";
import VideoCard from "@/app/components/marketingComponents/VideoCard";
import ConditionalTextArchitect from "@/app/components/realEstateComponents/ConditionalTextArquitect";
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
