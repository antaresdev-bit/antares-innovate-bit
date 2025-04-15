import Footer from "@/components/header/Footer";
import OurWork from "@/components/portafolioComponenets/OurWork";
import React from "react";
import BannerTest from "@/components/subPages/BannerSubPages";
import ConditionalText from "@/components/subPages/ConditionalTextResponsive";
import TextSubPages from "@/components/subPages/TextSubPages";
import GridImageSectionOne from "@/components/webPageComponents/GridImageSectionOne";
import GridImageSectionTwo from "@/components/webPageComponents/GridImageSectionTwo";
import ProcessTextWeb from "@/components/webPageComponents/ProcessTextWeb";
import { useTranslations } from "next-intl";

export function generateMetadata({ params }) {
  const lang = params.lang || "en";
  return metadataMonsterEnergy[lang];
}


function DesarrolloWebPage() {
  const t = useTranslations("webpageSubpage");
  return (
    <div className="relative">
      <div>
        <BannerTest
          videoUrl="https://storage.googleapis.com/antares-agency-rcs/Paginas%20web%20Preview.mp4"
          title={t("webpageText1")}
          subtitle={t("webpageText2")}
          textPosition="left"
          ColorText="linear-gradient(to right, #63B6DF, #FFFFFF)"
        />
      </div>

      <div className=" mx-[21px] sm:mx-[21px] md:mx-[49px] lg:mx-[71px]">
        {/* degrade */}
        <div
          className="hidden sm:block absolute inset-x-0 mx-auto w-full max-w-[1409px] h-[542px]"
          style={{
            background:
              "radial-gradient(ellipse at center, #338285 0%, #0B0C28 60%)",
            transform: "translateY(-50%)",
            zIndex: -1,
          }}
        ></div>
        {/* degrade */}

        <ConditionalText
          title={t("webpageText1")}
          subtitle={t("webpageText2")}
          gradient="linear-gradient(to right, #63B6DF, #FFFFFF)"
        />

        <div className=" mt-[113px] sm:mt-[113px] md:mt-[119px] lg:mt-[152px] mb-[113px] sm:mb-[111px] md:mb-[111px] lg:mb-[154px]  ">
          <TextSubPages
            title={t("webpageText3")}
            subtitle={t("webpageText4")}
            paragraph={t("webpageText5")}
          />
        </div>

        <GridImageSectionOne />

        <div className="mt-[108px] sm:mt-[108px] md:mt-[111px] lg:mt-[156px] mb-[100px] sm:mb-[100px] md:mb-[106px] lg:mb-[155px]  ">
          <ProcessTextWeb />
        </div>

        <GridImageSectionTwo />

        <OurWork />
      </div>
      <Footer />
    </div>
  );
}

export default DesarrolloWebPage;
