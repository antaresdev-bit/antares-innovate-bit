import Footer from "@/components/header/Footer";
import OurWork from "@/components/header/OurWork";
import BannerTest from "@/components/subPages/BannerSubPages";
import ConditionalText from "@/components/subPages/ConditionalTextResponsive";
import ProcessText from "@/components/subPages/ProcessText";
import TextSubPages from "@/components/subPages/TextSubPages";
import GridOneUpardigital from "@/components/upardigitalComponents/GridOneUpardigital";
import GridTwoUpardigital from "@/components/upardigitalComponents/GridTwoUpardigital";
import { useTranslations } from "next-intl";
import React from "react";

function UpardigitalPage() {
  const t = useTranslations("upardigitalSubpage");
  return (
    <div className="relative">
      <div>
        <BannerTest
          videoUrl="https://storage.googleapis.com/antares-agency-rcs/uparpreview.mp4"
          title="Upardigital"
          subtitle={t("upardigitalText1")}
          textPosition="left"
          ColorText="linear-gradient(to right, #A55D2A, #FFFFFF)"
        />
      </div>

      <div className=" mx-[21px] sm:mx-[21px] md:mx-[49px] lg:mx-[71px]">
        {/* degrade */}
        <div
          className="hidden sm:block absolute inset-x-0 mx-auto w-full max-w-[1409px] h-[542px]"
          style={{
            background:
              "radial-gradient(ellipse at center, #DA6A1A 0%, #0E051C 60%)",
            transform: "translateY(-50%)",
            zIndex: -1,
          }}
        ></div>
        {/* degrade */}

        <ConditionalText
          title="Upardigital"
          subtitle={t("upardigitalText1")}
          gradient="linear-gradient(to right, #DA6A1A, #FFFFFF)"
        />

        <div className=" mt-[113px] sm:mt-[113px] md:mt-[119px] lg:mt-[152px] mb-[113px] sm:mb-[111px] md:mb-[111px] lg:mb-[154px]  ">
          <TextSubPages
            title={t("upardigitalText2")}
            subtitle={t("upardigitalText3")}
            paragraph={t("upardigitalText4")}
          />
        </div>

        <GridOneUpardigital />

        <div className="mt-[108px] sm:mt-[108px] md:mt-[111px] lg:mt-[156px] mb-[100px] sm:mb-[100px] md:mb-[106px] lg:mb-[155px]  ">
          <ProcessText
            paragraphs={[
              t("upardigitalText5"),
              t("upardigitalText6")
            ]}
          />
        </div>

        <GridTwoUpardigital />

        <OurWork />
      </div>
      <Footer />
    </div>
  );
}

export default UpardigitalPage;
