import Footer from "@/components/header/Footer";
import OurWork from "@/components/header/OurWork";
import GridOneMonsterEnergy from "@/components/monsterEnergyComponents/GridOneMonsterEnergy";
import GridTwoMonsterEnergy from "@/components/monsterEnergyComponents/GridTwoMonsterEnergy";
import BannerTest from "@/components/subPages/BannerSubPages";
import ConditionalText from "@/components/subPages/ConditionalTextResponsive";
import ProcessText from "@/components/subPages/ProcessText";
import TextSubPages from "@/components/subPages/TextSubPages";
import { useTranslations } from "next-intl";
import React from "react";

function MonsterEnergy() {
  const t = useTranslations("monsterSubpage");
  return (
    <div className="relative">
      <div>
        <BannerTest
          videoUrl="https://storage.googleapis.com/antares-agency-rcs/Monster%20Preview.mp4"
          title="Monster Energy"
          subtitle="“I am The Beast”"
          textPosition="left"
          ColorText="linear-gradient(to right, #70A52A, #FFFFFF)"
        />
      </div>

      <div className=" mx-[21px] sm:mx-[21px] md:mx-[49px] lg:mx-[71px]">
        {/* degrade */}
        <div
          className="hidden sm:block absolute inset-x-0 mx-auto w-full max-w-[1409px] h-[542px]"
          style={{
            background:
              "radial-gradient(ellipse at center, #5A9A22 0%, #0E051C 60%)",
            transform: "translateY(-50%)",
            zIndex: -1,
          }}
        ></div>
        {/* degrade */}

        <ConditionalText
          title="Monster Energy"
          subtitle="“I am The Beast”"
          gradient="linear-gradient(to right, #70A52A, #FFFFFF)"
        />

        <div className=" mt-[113px] sm:mt-[113px] md:mt-[119px] lg:mt-[152px] mb-[113px] sm:mb-[111px] md:mb-[111px] lg:mb-[154px]  ">
          <TextSubPages
            title={t("monsterText1")}
            subtitle={t("monsterText2")}
            paragraph={t("monsterText3")}
          />
        </div>

        <GridOneMonsterEnergy />

        <div className="mt-[108px] sm:mt-[108px] md:mt-[111px] lg:mt-[156px] mb-[100px] sm:mb-[100px] md:mb-[106px] lg:mb-[155px]  ">
          <ProcessText
            paragraphs={[
              t("monsterText4"),
              t("monsterText5"),
              t("monsterText6"),
              t("monsterText7"),
            ]}
          />
        </div>

        <GridTwoMonsterEnergy />

        <OurWork />
      </div>
      <Footer />
    </div>
  );
}

export default MonsterEnergy;
