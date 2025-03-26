import GridCimlOne from "@/components/CimlComponents/GridCimlOne";
import Footer from "@/components/header/Footer";
import OurWork from "@/components/portafolioComponenets/OurWork";
import BannerTest from "@/components/subPages/BannerSubPages";
import ConditionalText from "@/components/subPages/ConditionalTextResponsive";
import GridImageSection from "@/components/subPages/GridImageSection";
import ProcessText from "@/components/subPages/ProcessText";
import TextSubPages from "@/components/subPages/TextSubPages";
import { useTranslations } from "next-intl";
import React from "react";

function CimlPage() {
  const t = useTranslations("cimlSubpage");
  return (
    <div className="relative">
      <div>
        <BannerTest
          videoUrl="https://storage.googleapis.com/antares-agency-rcs/ciml%20Mockup%20Mo%CC%81dulo%20w.mp4"
          title="CIML"
          subtitle={t("cimlText2")}
          textPosition="left"
          ColorText="linear-gradient(to right, #862AA5, #FFFFFF)"
        />
      </div>

      <div className=" mx-[21px] sm:mx-[21px] md:mx-[49px] lg:mx-[71px]">
        {/* degrade */}
        <div
          className="hidden sm:block absolute inset-x-0 mx-auto w-full max-w-[1409px] h-[542px]"
          style={{
            background:
              "radial-gradient(ellipse at center, #853377 0%, #0E051C 60%)",
            transform: "translateY(-50%)",
            zIndex: -1,
          }}
        ></div>
        {/* degrade */}

        <ConditionalText
          title="CIML"
          subtitle={t("cimlText1")}
          gradient={t("cimlText2")}
        />

        <div className=" mt-[113px] sm:mt-[113px] md:mt-[119px] lg:mt-[152px] mb-[113px] sm:mb-[111px] md:mb-[111px] lg:mb-[154px]  ">
          <TextSubPages
            title={t("cimlText2")}
            subtitle={t("cimlText3")}
            paragraph={t("cimlText4")}
          />
        </div>

        <GridImageSection
          images={{
            top: {
              src: "/assets/images/ciml/1.png",
              alt: "ciml",
            },
            left: {
              src: "/assets/images/ciml/2.jpg",
              alt: "ciml",
            },
            right: {
              src: "/assets/images/ciml/3.png",
              alt: "ciml",
            },
            bottom: {
              src: "/assets/images/ciml/4.jpg",
              alt: "ciml",
            },
          }}
        />

        <div className="mt-[108px] sm:mt-[108px] md:mt-[111px] lg:mt-[156px] mb-[100px] sm:mb-[100px] md:mb-[106px] lg:mb-[155px]  ">
          <ProcessText
            paragraphs={[
              t("cimlText5"),
              t("cimlText6"),
              t("cimlText7")
            ]}
          />
        </div>

        <GridCimlOne />

        <OurWork />
      </div>
      <Footer />
    </div>
  );
}

export default CimlPage;
