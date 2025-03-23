
import GridPoliOne from "@/components/PolitecnicoComponents/GridPoliOne";
import Footer from "@/components/header/Footer";
import OurWork from "@/components/header/OurWork";
import BannerTest from "@/components/subPages/BannerSubPages";
import ConditionalText from "@/components/subPages/ConditionalTextResponsive";
import GridImageVideo from "@/components/subPages/GridImageVideo";
import ProcessText from "@/components/subPages/ProcessText";
import TextSubPages from "@/components/subPages/TextSubPages";
import { useTranslations } from "next-intl";
import React from "react";

function PolitecnicoPage() {
  const t = useTranslations("politecnicoSubpage");
  return (
    <div className="relative">
      <div>
        <BannerTest
          videoUrl="https://storage.googleapis.com/antares-agency-rcs/politecnico%20Mockup.mp4"
          title="Politécnico Grancolombiano"
          subtitle={t("politecnicoText1")}
          textPosition="left"
          ColorText="linear-gradient(to right, #4096D3, #FFFFFF)"
        />
      </div>

      <div className=" mx-[21px] sm:mx-[21px] md:mx-[49px] lg:mx-[71px]">
        {/* degrade */}
        <div
          className="hidden sm:block absolute inset-x-0 mx-auto w-full max-w-[1409px] h-[542px]"
          style={{
            background:
              "radial-gradient(ellipse at center, #335D85 0%, #0B0C28 60%)",
            transform: "translateY(-50%)",
            zIndex: -1,
          }}
        ></div>
        {/* degrade */}

        <ConditionalText
          title="Politécnico Grancolombiano"
          subtitle={t("politecnicoText1")}
          gradient="linear-gradient(to right, #4096D3, #FFFFFF)"
        />

        <div className=" mt-[113px] sm:mt-[113px] md:mt-[119px] lg:mt-[152px] mb-[113px] sm:mb-[111px] md:mb-[111px] lg:mb-[154px]  ">
          <TextSubPages
            title={t("politecnicoText2")}
            subtitle={t("politecnicoText3")}
            paragraph={t("politecnicoText4")}
          />
        </div>

        <GridImageVideo
          media={{
            top:{
                type: "image",
                src: "/assets/images/politecnico/1.png",
                alt: "Politecnico",
              },
            left: {
                type: "video",
                src: "https://storage.googleapis.com/antares-agency-rcs/3-politecnico.mp4",
              },
            right: {
              type: "video",
              src: "https://storage.googleapis.com/antares-agency-rcs/4-politecnico.mp4",
            },
            bottom: {
              type: "image",
              src: "/assets/images/politecnico/2.png",
              alt: "Bottom Image",
            },
          }}
        />

        <div className="mt-[108px] sm:mt-[108px] md:mt-[111px] lg:mt-[156px] mb-[100px] sm:mb-[100px] md:mb-[106px] lg:mb-[155px]  ">
          <ProcessText
            paragraphs={[
              t("politecnicoText5"),
              t("politecnicoText6"),
              t("politecnicoText7"),
            ]}
          />
        </div>

        <GridPoliOne />

        <OurWork />
      </div>
      <Footer />
    </div>
  );
}

export default PolitecnicoPage;
