import AboutUsBanner from "@/components/aboutUsComponents/AboutUsBanner";
import ConditionalTextAbout from "@/components/aboutUsComponents/ConditionalTextAbout";
import TextAbout from "@/components/aboutUsComponents/TextAbout";
import WorkTeam from "@/components/aboutUsComponents/WorkTeam";
import Footer from "@/components/header/Footer";
import OurWork from "@/components/header/OurWork";
import { useTranslations } from "next-intl";
import React from "react";

function AboutPage() {
  const t = useTranslations("AboutUs");
  return (
    <>
      <div className="relative">
        <AboutUsBanner />

        <ConditionalTextAbout
          title={t("AboutUsText1")}
          subtitle={t("AboutUsText2")}
          gradient="linear-gradient(to right, #4D86FF, #FFFFFF)"
        />

        <div className="relative flex justify-center overflow-hidden w-full">
          <div className="w-full flex items-center justify-center overflow-visible relative ">
            {/* Degradado */}
            <div
              className="absolute inset-x-0 mx-auto w-[3000px] h-[800px]  "
              style={{
                background:
                  "radial-gradient(ellipse at center, #22379A 0%, #0E051C 40%)",
                left: "0%",
                transform: "translateX(-50%) translateY(1%)",
                zIndex: -1,
              }}
            ></div>
            <TextAbout />
          </div>
        </div>
      </div>

      <div className=" mx-[21px] sm:mx-[21px] md:mx-[49px] lg:mx-[71px]">
        <WorkTeam />
        
      </div>
      <OurWork/>

      <Footer />
    </>
  );
}

export default AboutPage;

{
  /* <div className="relative  rounded-b-[48px] overflow-hidden">
          <div className="h-auto w-full flex justify-center ">
            <TextAbout />
          </div>
        </div> */
}
