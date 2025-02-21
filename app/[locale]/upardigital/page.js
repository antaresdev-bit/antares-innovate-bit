import Footer from "@/app/components/header/Footer";
import OurWork from "@/app/components/header/OurWork";
import BannerTest from "@/app/components/subPages/BannerSubPages";
import GradientTextSection from "@/app/components/subPages/BannerSubPages";
import ConditionalText, {
  ConditionalTextResponsive,
} from "@/app/components/subPages/ConditionalTextResponsive";
import GridOneUpardigital from "@/app/components/upardigitalComponents/GridOneUpardigital";
import GridTwoUpardigital from "@/app/components/upardigitalComponents/GridTwoUpardigital";
import IntroductionUpardigital from "@/app/components/upardigitalComponents/IntroductionUpardigital";
import UpardigitalText from "@/app/components/upardigitalComponents/UpardigitalText";
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

      <IntroductionUpardigital />

      <GridOneUpardigital />

      <UpardigitalText />

      <GridTwoUpardigital />

      <OurWork />

      <Footer />
    </div>
  );
}

export default UpardigitalPage;
