import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import TiltedCard from "./CardMotion";

function TechnologyCard() {
  const t = useTranslations("landing");
  const locale = useLocale();
  return (
    <div
      className="relative mx-[21px] sm:mx-[21px] md:mx-[49px] lg:mx-[71px] mb-12 p-[1px] bg-[#FFFFFF] lg:bg-[#0E051C] sm:bg-[#FFFFFF] md:bg-[#FFFFFF] lg:bg-none rounded-[24px] sm:rounded-[24px] md:rounded-[48px] lg:rounded-[48px] sm:pb-[0px] md:pb-[0px] lg:pb-[40px] "
      style={{
        backgroundImage: "none",
      }}
    >
      <div
        className="hidden lg:block absolute inset-0 bg-cover bg-center rounded-[48px]"
        style={{
          backgroundImage:
            "url('/assets/images/portadas-servicios-home/fondocard.png')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="flex flex-wrap lg:flex-nowrap justify-between items-center rounded-[24px] p-[15px] sm:p-[15px] md:p-[22px] lg:p-[32px] text-white flex-row-reverse relative z-10">
        <div className="w-full md:w-full lg:w-auto flex justify-center order-first lg:order-last mb-4 md:mb-4 lg:mb-0 mr-[0px] sm:mr-[0px] md:mr-[0px] lg:mr-[30px]">
          <div className="hidden lg:block">
            <TiltedCard
              imageSrc="/assets/images/portadas-servicios-home/desktoptech.png"
              altText="Consultoría Desktop"
              containerHeight="370px"
              containerWidth="400px"
              imageHeight="370px"
              imageWidth="400px"
              rotateAmplitude={8}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={false}
              className="rounded-lg"
            />
          </div>

          <div className="hidden md:block lg:hidden">
            <TiltedCard
              imageSrc="/assets/images/portadas-servicios-home/tabletTech.png"
              altText="Creatividad Tablet"
              containerHeight="150px"
              containerWidth="700px"
              imageHeight="150px"
              imageWidth="700px"
              rotateAmplitude={8}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={false}
              className="rounded-lg"
            />
          </div>

          <div className="block md:hidden">
            <Image
              src="/assets/images/portadas-servicios-home/mobileTech.png"
              alt="Consultoría mobile"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="w-full md:w-full lg:flex-grow border border-white rounded-[24px] flex flex-col justify-between p-[15px] sm:p-[15px] md:p-[22px] lg:p-[32px] min-h-full bg-[#ECECEC]">
          <div>
            <h2
              className="font-bold mb-[18px] sm:mb-[18px] md:mb-[37px] lg:mb-[37px]"
              style={{
                fontFamily: "HandelGothic",
                fontSize: "40px",
                color: "#0B0C28",
              }}
            >
              {t("tecCardTittle")}
            </h2>
            <p
              style={{
                fontFamily: "UniteaSans",
                fontSize: "18px",
                color: "#0B0C28",
              }}
            >
              {t("tecCardSubTittle")}
            </p>
            <ul
              className="mt-[10px] ml-[20px]"
              style={{
                fontFamily: "UniteaSans",
                fontSize: "18px",
                color: "#0B0C28",
              }}
            >
              <li>{t("tecCardInfo1")}</li>
              <li>{t("tecCardInfo2")}</li>
              <li>{t("tecCardInfo3")}</li>
            </ul>
          </div>
          <div className="flex items-center mt-10">
            <Image
              src="/assets/images/Gif Avion.gif"
              alt="Botón Animado"
              width={48}
              height={48}
              className=""
              unoptimized={true}
            />
            <Link href={`/${locale}/portafolio`} className="w-full sm:w-auto">
              <button
                className="w-full sm:w-[230px] h-[48px] bg-white text-[#02021E] text-[20px] rounded-[32px]  hover:bg-gray-200 transition duration-300 font-bold"
                style={{ fontFamily: "HandelGothic" }}
              >
                {t("tecCardButtton")}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnologyCard;
