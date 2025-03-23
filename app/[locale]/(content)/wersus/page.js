import Footer from "@/components/header/Footer";
import OurWork from "@/components/header/OurWork";
import BannerTest from "@/components/subPages/BannerSubPages";
import ConditionalText from "@/components/subPages/ConditionalTextResponsive";
import ProcessText from "@/components/subPages/ProcessText";
import TextSubPages from "@/components/subPages/TextSubPages";
import GridOneWersus from "@/components/wersusComponents/GridOneWersus";
import GridTwoWersus from "@/components/wersusComponents/GridTwoWersus";
import { useTranslations } from "next-intl";
import React from "react";

function WersusPage() {
  const t = useTranslations("wersusSubpage");
  return (
    <div className="relative">
      <div>
        <BannerTest
          videoUrl="https://storage.googleapis.com/antares-agency-rcs/Wersus%20preview.mp4"
          title="Wersus"
          subtitle={t("wersusText1")}
          textPosition="left"
          ColorText="linear-gradient(to right, #2A47A5, #FFFFFF)"
        />
      </div>

      <div className=" mx-[21px] sm:mx-[21px] md:mx-[49px] lg:mx-[71px]">
        {/* degrade */}
        <div
          className="hidden sm:block absolute inset-x-0 mx-auto w-full max-w-[1409px] h-[542px]"
          style={{
            background:
              "radial-gradient(ellipse at center, #334385 0%, #0B0C28 60%)",
            transform: "translateY(-50%)",
            zIndex: -1,
          }}
        ></div>
        {/* degrade */}

        <ConditionalText
          title="Wersus"
          subtitle={t("wersusText1")}
          gradient="linear-gradient(to right, #2A47A5, #FFFFFF)"
        />

        <div className=" mt-[113px] sm:mt-[113px] md:mt-[119px] lg:mt-[152px] mb-[113px] sm:mb-[111px] md:mb-[111px] lg:mb-[154px]  ">
          <TextSubPages
            title={t("wersusText2")}
            subtitle={t("wersusText3")}
            paragraph={t("wersusText4")}
          />
        </div>

        <GridOneWersus />

        <div className="mt-[108px] sm:mt-[108px] md:mt-[111px] lg:mt-[156px] mb-[100px] sm:mb-[100px] md:mb-[106px] lg:mb-[155px]  ">
          <ProcessText
            paragraphs={[t("wersusText5"), t("wersusText6"), t("wersusText7")]}
          />
        </div>

        <GridTwoWersus />

        <OurWork />
      </div>
      <Footer />
    </div>
  );
}

export default WersusPage;
