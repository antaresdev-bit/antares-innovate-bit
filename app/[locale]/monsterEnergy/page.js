import Footer from "@/app/components/header/Footer";
import OurWork from "@/app/components/header/OurWork";
import GridOneMonsterEnergy from "@/app/components/monsterEnergyComponents/GridOneMonsterEnergy";
import GridTwoMonsterEnergy from "@/app/components/monsterEnergyComponents/GridTwoMonsterEnergy";
import IntroductionMonsterEnergy from "@/app/components/monsterEnergyComponents/IntroductionMonsterEnergy";
import MonsterEnergyText from "@/app/components/monsterEnergyComponents/MonsterEnergyText";
import BannerTest from "@/app/components/subPages/BannerSubPages";
import ConditionalText from "@/app/components/subPages/ConditionalTextResponsive";
import GridTwoUpardigital from "@/app/components/upardigitalComponents/GridTwoUpardigital";
import UpardigitalText from "@/app/components/upardigitalComponents/UpardigitalText";
import React from "react";

function MonsterEnergy() {
  return (
    <div className="relative">
      <div>
        <BannerTest
          videoUrl="https://storage.googleapis.com/antares-agency-rcs/Monster%20Preview.mp4"
          title="Monster Energy"
          subtitle="“I am The Beast”"
          textPosition="left"
        />
      </div>

      {/* degrade */}
      <div
        className="absolute inset-x-0 mx-auto w-full max-w-[1409px] h-[542px]"
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

      <div className="flex justify-center items-center">
        <div className="relative z-10">
          <IntroductionMonsterEnergy />
        </div>
      </div>

      <GridOneMonsterEnergy />

      <MonsterEnergyText />

      <GridTwoMonsterEnergy />

      <OurWork />

      <Footer />
    </div>
  );
}

export default MonsterEnergy;

;
