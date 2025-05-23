import React from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
import Link from "next/link";
import { useTranslations } from "next-intl";
import TiltedCard from "./CardMotion";

function CreativityCard() {
  const t = useTranslations("landing");
  const locale = useLocale();

  return (
    <div
      className="relative mx-[21px] sm:mx-[21px] md:mx-[49px] lg:mx-[71px] mb-12 p-[1px] bg-transparent rounded-[24px] sm:rounded-[24px] md:rounded-[48px] lg:rounded-[48px] border border-white"
      id="creativity-services"
    >
      <div className="flex flex-wrap lg:flex-nowrap justify-between items-center bg-transparent rounded-[24px] p-[15px] sm:p-[15px] md:p-[22px] lg:p-[32px] text-white">
        <div className="w-full md:w-full lg:w-auto flex justify-center order-first lg:order-last mb-4 md:mb-4 lg:mb-0  ml-[0px] sm:ml-[0px] md:ml-[0px] lg:ml-[30px]">
          <div className="hidden lg:block">
            <TiltedCard
              imageSrc="/assets/images/portadas-servicios-home/desktopCreat.png"
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
              imageSrc="/assets/images/portadas-servicios-home/tabletCreat.png"
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
              src="/assets/images/portadas-servicios-home/mobleCreat.png"
              alt="Consultoría mobile"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="w-full md:w-full lg:flex-grow border border-white rounded-[24px] flex flex-col justify-between p-[15px] sm:p-[15px] md:p-[22px] lg:p-[32px] min-h-full">
          <div>
            <h2
              className="font-bold mb-[18px] sm:mb-[18px] md:mb-[37px] lg:mb-[37px]"
              style={{ fontFamily: "HandelGothic", fontSize: "40px" }}
            >
              {t("creatCardTittle")}
            </h2>
            <p style={{ fontFamily: "UniteaSans", fontSize: "18px" }}>
              {t("creatCardSubTittle")}
            </p>
            <ul
              className="mt-[10px] ml-[20px]"
              style={{ fontFamily: "UniteaSans", fontSize: "18px" }}
            >
              <li>{t("creatCardInfo1")}</li>
              <li>{t("creatCardInfo2")}</li>
              <li>{t("creatCardInfo3")}</li>
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
                {t("creatCardButtton")}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreativityCard;
