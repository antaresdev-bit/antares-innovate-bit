import Footer from "@/components/header/Footer";
import OurWork from "@/components/header/OurWork";
import BannerTest from "@/components/subPages/BannerSubPages";
import ConditionalText from "@/components/subPages/ConditionalTextResponsive";
import GridImageVideo from "@/components/subPages/GridImageVideo";
import ProcessText from "@/components/subPages/ProcessText";
import TextSubPages from "@/components/subPages/TextSubPages";
import GridLUparsistemGrid from "@/components/uparsistemComponents/GridLUparsistemGrid";
import { useTranslations } from "next-intl";
import React from "react";

function UparsistemPage() {
  const t = useTranslations("uparsistemSubpage");
  return (
    <div className="relative">
      <div>
        <BannerTest
          videoUrl="https://storage.googleapis.com/antares-agency-rcs/Uparsistem%20Banner.mp4"
          title="Uparsistem"
          subtitle={t("uparsistemText1")}
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
          title="Uparsistem"
          subtitle={t("uparsistemText1")}
          gradient="linear-gradient(to right, #2A47A5, #FFFFFF)"
        />

        <div className=" mt-[113px] sm:mt-[113px] md:mt-[119px] lg:mt-[152px] mb-[113px] sm:mb-[111px] md:mb-[111px] lg:mb-[154px]  ">
          <TextSubPages
            title={t("uparsistemText2")}
            subtitle={t("uparsistemText3")}
            paragraph={t("uparsistemText4")}
          />
        </div>

        <GridImageVideo
          media={{
            top: {
              type: "video",
              src: "https://storage.googleapis.com/antares-agency-rcs/1%20Uparsistem.mp4",
              alt: "Uparsistem",
            },
            left: {
              type: "image",
              src: "/assets/images/upairsistem/2.jpg",
              alt: "Uparsistem",
            },
            right: {
              type: "image",
              src: "/assets/images/upairsistem/3.jpg",
              alt: "Uparsistem",
            },

            bottom: {
              type: "image",
              src: "/assets/images/upairsistem/4.jpg",
              alt: "Uparsistem",
            },
          }}
        />

        <div className="mt-[108px] sm:mt-[108px] md:mt-[111px] lg:mt-[156px] mb-[100px] sm:mb-[100px] md:mb-[106px] lg:mb-[155px]  ">
          <ProcessText
            paragraphs={[
              t("uparsistemText5"),
              t("uparsistemText6"),
              t("uparsistemText7"),
            ]}
          />
        </div>

        <GridLUparsistemGrid />

        <OurWork />
      </div>
      <Footer />
    </div>
  );
}

export default UparsistemPage;
