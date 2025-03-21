import Image from "next/image";
import { useTranslations } from "next-intl";

const BannerMarketing = () => {
  const t = useTranslations("marketing");
  return (
    <div className="w-full max-w-[1500px] mx-auto relative overflow-hidden">
      <div
        className="relative w-full h-[457px] flex sm:items-center sm:justify-between justify-center px-4 sm:px-10 overflow-hidden"
        style={{ borderRadius: "0 0 48px 48px" }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/marketing/Banner1.png"
            alt="Banner"
            fill
            className="hidden lg:block object-cover"
          />
          <Image
            src="/assets/images/marketing/Banner2.png"
            alt="Banner"
            fill
            className="hidden md:block lg:hidden object-cover"
          />
          <Image
            src="/assets/images/marketing/Banner3.png"
            alt="Banner"
            fill
            className="block md:hidden object-cover"
          />
        </div>

        <div className="hidden sm:flex flex-col space-y-2 sm:space-y-4 text-left z-10 max-w-[50%] lg:ml-[140px] lg:w-[600px] mt-[100px]">
          <h1
            className="text-3xl sm:text-5xl font-bold text-white md:text-[46px] lg:text-[65px] mb-[30px]"
            style={{ fontFamily: "HandelGothic" }}
          >
            {t("marketingText1")}
          </h1>

          <div className="flex items-center space-x-4">
            <div
              className="flex items-center justify-center rounded-full bg-white"
              style={{ width: "55px", height: "55px", aspectRatio: "1 / 1" }}
            >
              <Image
                src="/assets/images/marketing/Vector marketing.png"
                alt="Icono"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>

            <p
              className="text-lg sm:text-xl text-white md:text-[25px] lg:text-[30px]"
              style={{ fontFamily: "UniteaSans" }}
            >
              {t("marketingText2")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerMarketing;
