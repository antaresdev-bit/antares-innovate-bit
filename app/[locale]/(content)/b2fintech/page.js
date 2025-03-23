import B2FintechGridOne from "@/components/B2FintechComponents/B2FintechGridOne";
import B2FintechGridTwo from "@/components/B2FintechComponents/B2FintechGridTwo";
import Footer from "@/components/header/Footer";
import OurWork from "@/components/header/OurWork";
import BannerTest from "@/components/subPages/BannerSubPages";
import ConditionalText from "@/components/subPages/ConditionalTextResponsive";
import ProcessText from "@/components/subPages/ProcessText";
import TextSubPages from "@/components/subPages/TextSubPages";
import { useTranslations } from "next-intl";
import React from "react";

function B2fintechPage() {
  const t = useTranslations("B2FintechSubpage");
  return (
    <div className="relative">
      <div>
        <BannerTest
          videoUrl="https://storage.googleapis.com/antares-agency-rcs/B2fintech%20mockup%20video.mp4"
          title="B2Fintech"
          subtitle={t("B2FintechText1")}
          textPosition="left"
          ColorText="linear-gradient(to right, #3C2AA5, #FFFFFF)"
        />
      </div>

      <div className=" mx-[21px] sm:mx-[21px] md:mx-[49px] lg:mx-[71px]">
        {/* degrade */}
        <div
          className="hidden sm:block absolute inset-x-0 mx-auto w-full max-w-[1409px] h-[542px]"
          style={{
            background:
              "radial-gradient(ellipse at center, #513385 0%, #0E051C 60%)",
            transform: "translateY(-50%)",
            zIndex: -1,
          }}
        ></div>
        {/* degrade */}

        <ConditionalText
          title="B2Fintech"
          subtitle={t("B2FintechText1")}
          gradient="linear-gradient(to right, #3C2AA5, #FFFFFF)"
        />

        <div className=" mt-[113px] sm:mt-[113px] md:mt-[119px] lg:mt-[152px] mb-[113px] sm:mb-[111px] md:mb-[111px] lg:mb-[154px]  ">
          <TextSubPages
            title={t("B2FintechText2")}
            subtitle={t("B2FintechText3")}
            paragraph={t("B2FintechText4")}
          />
        </div>

        <B2FintechGridOne />

        <div className="mt-[108px] sm:mt-[108px] md:mt-[111px] lg:mt-[156px] mb-[100px] sm:mb-[100px] md:mb-[106px] lg:mb-[155px]  ">
          <ProcessText
            paragraphs={[
              t("B2FintechText5"),
              t("B2FintechText6"),
              t("B2FintechText7"),
            ]}
          />
        </div>

        <B2FintechGridTwo />

        <OurWork />
      </div>
      <Footer />
    </div>
  );
}

export default B2fintechPage;
