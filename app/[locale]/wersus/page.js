import Footer from "@/app/components/header/Footer";
import OurWork from "@/app/components/header/OurWork";
import BannerTest from "@/app/components/subPages/BannerSubPages";
import ConditionalText from "@/app/components/subPages/ConditionalTextResponsive";
import GridOneWersus from "@/app/components/wersusComponents/GridOneWersus";
import GridTwoWersus from "@/app/components/wersusComponents/GridTwoWersus";
import IntroductionWersus from "@/app/components/wersusComponents/IntroductionWersus";
import WersusText from "@/app/components/wersusComponents/WersusText";
import React from "react";

function WersusPage() {
  return (
    <div className="relative">
      <div>
        <BannerTest
          videoUrl="https://storage.googleapis.com/antares-agency-rcs/Wersus%20preview.mp4"
          title="Wersus"
          subtitle="Innovación en logística de transporte"
          textPosition="left"
        />
      </div>

      {/* degrade */}
      <div
        className="absolute inset-x-0 mx-auto w-full max-w-[1409px] h-[542px]"
        style={{
          background:
            "radial-gradient(ellipse at center, #334385 0%, #0E051C 60%)",
          transform: "translateY(-50%)",
          zIndex: -1,
        }}
      ></div>
      {/* degrade */}

      <ConditionalText
        title="Wersus"
        subtitle="Innovación en logística de transporte"
        gradient="linear-gradient(to right, #2A47A5 , #FFFFFF)"
      />

      <div className="flex justify-center items-center">
        <div className="relative z-10">
          <IntroductionWersus />
        </div>
      </div>

      <GridOneWersus/>

      <WersusText/>

      <GridTwoWersus/>

      <OurWork />

      <Footer />


    </div>
  );
}

export default WersusPage;
