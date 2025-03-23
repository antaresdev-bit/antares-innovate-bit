
import FundacionGridOne from "@/components/fundacionComponents/FundacionGridOne";
import FundacionGridTwo from "@/components/fundacionComponents/FundacionGridTwo";
import Footer from "@/components/header/Footer";
import OurWork from "@/components/header/OurWork";
import BannerTest from "@/components/subPages/BannerSubPages";
import ConditionalText from "@/components/subPages/ConditionalTextResponsive";
import ProcessText from "@/components/subPages/ProcessText";
import TextSubPages from "@/components/subPages/TextSubPages";
import { useTranslations } from "next-intl";
import React from "react";

function FundacionPage() {
  const t = useTranslations("fundacionHeinrichSubpage");
  return (
    <div className="relative">
      <div>
        <BannerTest
          videoUrl="https://storage.googleapis.com/antares-agency-rcs/fundacion6.mp4"
          title={t("fundacionHeinText1")}
          subtitle={t("fundacionHeinText2")}
          textPosition="left"
          ColorText="linear-gradient(to right, #91C746, #FFFFFF)"
        />
      </div>

      <div className=" mx-[21px] sm:mx-[21px] md:mx-[49px] lg:mx-[71px]">
        {/* degrade */}
        <div
          className="hidden sm:block absolute inset-x-0 mx-auto w-full max-w-[1409px] h-[542px]"
          style={{
            background:
              "radial-gradient(ellipse at center, #6C8533 0%, #0E051C 60%)",
            transform: "translateY(-50%)",
            zIndex: -1,
          }}
        ></div>
        {/* degrade */}

        <ConditionalText
          title={t("fundacionHeinText1")}
          subtitle={t("fundacionHeinText2")}
          gradient="linear-gradient(to right, #91C746, #FFFFFF)"
        />

        <div className=" mt-[113px] sm:mt-[113px] md:mt-[119px] lg:mt-[152px] mb-[113px] sm:mb-[111px] md:mb-[111px] lg:mb-[154px]  ">
          <TextSubPages
            title={t("fundacionHeinText3")}
            subtitle={t("fundacionHeinText4")}
            paragraph={t("fundacionHeinText5")}
          />
        </div>

        <FundacionGridOne/>

        <div className="mt-[108px] sm:mt-[108px] md:mt-[111px] lg:mt-[156px] mb-[100px] sm:mb-[100px] md:mb-[106px] lg:mb-[155px]  ">
          <ProcessText
            paragraphs={[
              t("fundacionHeinText6"),
              t("fundacionHeinText7"),
              t("fundacionHeinText8"),
            ]}
          />
        </div>

        <FundacionGridTwo/>

        <OurWork />
      </div>
      <Footer />
    </div>
  );
}

export default FundacionPage;
