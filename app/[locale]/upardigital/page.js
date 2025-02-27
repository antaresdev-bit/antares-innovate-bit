import Footer from "@/components/header/Footer";
import OurWork from "@/components/header/OurWork";
import BannerTest from "@/components/subPages/BannerSubPages";
import ConditionalText, {
  ConditionalTextResponsive,
} from "@/components/subPages/ConditionalTextResponsive";
import GridOneUpardigital from "@/components/upardigitalComponents/GridOneUpardigital";
import GridTwoUpardigital from "@/components/upardigitalComponents/GridTwoUpardigital";
import IntroductionUpardigital from "@/components/upardigitalComponents/IntroductionUpardigital";
import UpardigitalText from "@/components/upardigitalComponents/UpardigitalText";
import React from "react";

function UpardigitalPage() {
  return (
    <div className="relative">
      <div>
        <BannerTest
          videoUrl="https://storage.googleapis.com/antares-agency-rcs/uparpreview.mp4"
          title="Upardigital"
          subtitle="Revolucionando la educación virtual en Uparsistem"
          textPosition="left"
        />
      </div>

      {/* degrade */}
      <div
        className="absolute inset-x-0 mx-auto w-full max-w-[1409px] h-[542px]"
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
        subtitle="Revolucionando la educación virtual en Uparsistem"
        gradient="linear-gradient(to right, #DA6A1A, #FFFFFF)"
      />

      <div className="flex justify-center items-center">
        <div className="relative z-10">
          <IntroductionUpardigital />
        </div>
      </div>

      <GridOneUpardigital />

      <UpardigitalText />

      <GridTwoUpardigital />

      <OurWork />

      <Footer />
    </div>
  );
}

export default UpardigitalPage;
