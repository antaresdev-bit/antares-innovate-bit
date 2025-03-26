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
import { useTranslations } from "next-intl";
import React from "react";
import { metadataMarketing } from "./metadata-marketing";

export { metadataMarketing };

function page() {
  const t = useTranslations("marketing");
  return (
    <div className="relative ">
      <BannerMarketing />
      <div className="max-w-[1500px] mx-auto px-[21px] sm:px-[21px] md:px-[49px] lg:px-[71px]">
        <ConditionalTextMarketing
          title={t("marketingText1")}
          subtitle={t("marketingText2")}
          gradient="linear-gradient(to right, #FFFFFF, #FFFFFF)"
          circleColor="#1C5DE9"
          iconSrc="/assets/images/marketing/1.png"
        />

        <MarketingProfile />

        <CardMarketing />

        <div className="  mt-[164px] sm:mt-[164px] md:mt-[144px] lg:mt-[211px]  ">
          <h1
            className=" text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4D86FF] to-[#FFFFFF] leading-[65px] max-w-[400px] "
            style={{ fontFamily: "HandelGothic" }}
          >
            {t("marketingText10")}
          </h1>
        </div>

        <div className=" mt-[200px] sm:mt-[200px] md:mt-[106px] lg:mt-[124px]">
          <MarketingStadicticts />
        </div>

        <div className="mt-[200px] sm:mt-[200px] md:mt-[106px] lg:mt-[124px]">
          <SliderMarketing />
        </div>

        <InfoCard />

        <div className="flex justify-center items-center ">
          <div className="relative ">
            <IntroductionMarketing />
          </div>
        </div>

        <VideoCard />
      </div>
      <Footer />
    </div>
  );
}

export default page;
