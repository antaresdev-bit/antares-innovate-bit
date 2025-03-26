"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";
import Certificates from "../../components/header/Certificates";
import Footer from "../../components/header/Footer";
import Slider from "../../components/header/Slider";
import TextIntroduction from "../../components/header/TextIntroduction";
import dynamic from "next/dynamic";
import LayoutComponents from "@/components/layout/LayoutComponents";
import LoadingScreen from "@/components/loading/LoadingScreen";
import { useTranslations } from "next-intl";
import TextRotate from "@/fancy/components/text/text-rotate";
import { Skeleton } from "@/components/ui/skeleton";
import { useResponsive } from "@/hooks/useResponsive";
import CardSkeleton from "@/components/layout/Loading/CardSkeleton";

const OptimisedScene = dynamic(
  () => import("../../components/sections/3D/OptimisedScene"),
  {
    ssr: false,
  }
);

//Se hace importe dinámico a estos elementos para acelerar la carga de la Escena
const OurWork = dynamic(() => import("../../components/header/OurWork"), {
  ssr: false,
  loading: () => <Skeleton height={100} width={100} />,
});

const VideoLanding = dynamic(
  () => import("../../components/landing/VideoLanding"),
  {
    ssr: false,
    loading: () => <LoadingScreen />,
  }
);

const CreativityCard = dynamic(() => import("../../components/cards/CreativityCard"), {
  ssr: false,
  loading: () => <Skeleton height={100} width={100} />,
});

const TechnologyCard = dynamic(() => import("../../components/cards/TechnologyCard"), {
  ssr: false,
  loading: () => <Skeleton height={100} width={100} />,
});

const ConsultingPage = dynamic(() => import("../../components/cards/ConsultingPage"), {
  ssr: false,
  loading: () => <Skeleton height={100} width={100} />,
});







const TEXTS = [
  "Digital Transformation",
  "Automation",
  "Consulting",
  "Design, Web, Apps",
];

const BackgroundGradient = () => (
  <div
    className="absolute inset-x-0 mx-auto w-[3000px] h-[800px] -z-1 
               translate-x-[-50%] translate-y-[5%] left-0
               bg-radial-gradient from-primary-blue to-dark-purple"
    aria-hidden="true"
  />
)

const IntroductionSection = () => {
  return (
    <section className="relative flex justify-center overflow-hidden w-full" aria-label="Introducción">
      <div className="w-full flex items-center justify-center overflow-visible relative">
        <BackgroundGradient />        
          <TextIntroduction />
      </div>
    </section>
  )
}

const Blog = dynamic(() => import("../../components/header/Blog"), {
  ssr: true,
  loading: () => <Skeleton height={100} width={100} />
});

const Statistics = dynamic(() => import("../../components/header/Statistics"), {
  ssr: true,
  loading: () => <Skeleton height={100} width={100} />
});

export default function Home() {
  const [showScene, setShowScene] = useState(true);
  const sceneContainerRef = useRef(null);
  const [webGLSupported, setWebGLSupported] = useState(false);
  const { isMobile } = useResponsive();

  useEffect(() => {
    const currentRef = sceneContainerRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting !== showScene) {
          setShowScene(entry.isIntersecting);
        }
      },
      {
        root: null,
        rootMargin: "0px 0px",
        threshold: 0.1,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [showScene]);

  useEffect(() => {
    if (isMobile) return;
    const checkWebGL = () => {
      try {
        const canvas = document.createElement("canvas");
        const isSupported = !!(
          window.WebGLRenderingContext &&
          (canvas.getContext("webgl") ||
            canvas.getContext("experimental-webgl"))
        );
        setWebGLSupported(isSupported);
      } catch (e) {
        setWebGLSupported(false);
      }
    };

    checkWebGL();
  }, [isMobile]);


  const t = useTranslations("landing");

  return (
    <>
      <div className="overflow-x-hidden w-full">
        <LayoutComponents />
        <div className="relative lg:h-screen h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#1c2364] via-[#0e051c] via-15% to-[#0e051c] animate-in fade-in">
          
          <div ref={sceneContainerRef} className="w-full h-full">
            {showScene ? (
              <OptimisedScene />
            ) : (
              <div className="w-full h-full">
                <p>
                  {isMobile ? "Escena 3D no visible" : webGLSupported
                    ? "Escena 3D no visible"
                    : "WebGL no soportado"}
                </p>
              </div>
            )}
          </div>

          <div className="absolute top-[calc(50%+30vh)] lg:top-[calc(50%+37vh)] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10  w-full lg:max-w-[80%] md:max-w-[85%] max-w-[90%] animate-in fade-in">
            <div
              className="flex justify-center  mx-[21px] sm:mx-[21px] md:mx-[49px] lg:mx-[71px]"
              style={{ fontFamily: "HandelGothic", color:"white" }}
            >
              <TextRotate
                texts={TEXTS}
                mainClassName="text-[25px] md:text-[30px] lg:text-[40px] font-semibold text-center"
                staggerFrom={"first"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1 whitespace-normal"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={3000}
                animatePresenceInitial={true}
              />
            </div>
            <div className="flex justify-center">
              {" "}
              <Certificates />
            </div>
          </div>
        </div>
        <Suspense fallback={<CardSkeleton />}>
          <IntroductionSection />
        </Suspense>
        <div
          className="relative overflow-hidden  mt-[60px]  "
          style={{
            borderBottomLeftRadius: "48px",
            borderBottomRightRadius: "48px",
          }}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="relative z-10 mt-[0px] sm:mt-[0px] md:mt-[50px]  lg:mt-[50px] w-full">
            <div className=" mx-[21px] sm:mx-[21px] md:mx-[49px] lg:mx-71">
              <VideoLanding/>
            </div>
            <Suspense fallback={<div className="w-full sm:px-10 md:px-20 lg:px-44 md:mt-[80px] lg:mt-[90px] mb-[40px] md:mb-[80px] lg:mb-[90px]  "><Skeleton className="w-full h-[74px] md:h-[84px] lg:h-[104px]" /></div>}>
              <Slider />
            </Suspense>
            {/* degrade */}
            <div
              className="absolute inset-x-0 mx-auto w-[3000px] h-[800px] "
              style={{
                background:
                  "radial-gradient(ellipse at center, #22379A 0%, #0E051C 50%)",
                left: "50%",
                transform: "translateX(-50%) translateY(-50%)",
                zIndex: -1,
              }}
            />
            {/* degrade */}
          </div>
        </div>

        <div className="relative bg-opacity-70" id="our-services">
          <div className="max-w-[1500px] mx-auto">
            <div className="flex flex-col gap-4 items-start min-h-[20vh]  px-5 sm:px-6 md:px-10 lg:px-16 lg:w-[1300px] mr-[21px] sm:mr-[21px] md:mr-[49px] lg:mr-[73px]  mt-[160px] mb-[30px]">
              <h1
                className=" text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4D86FF] to-[#FFFFFF] leading-[65px] max-w-[400px] "
                style={{ fontFamily: "HandelGothic" }}
                data-aos="fade-left"
              >
                {t("serviceText1")} <br /> {t("serviceText2")}
              </h1>
            </div>
            <Suspense fallback={<CardSkeleton imgleft={true} imgright={true} />}>
              <div id="creativity-services" data-aos="fade-left">
                <CreativityCard />
              </div>
            </Suspense>
            <div id="technology-services" data-aos="fade-right">
              <TechnologyCard />
            </div>
            <div id="consulting-services" data-aos="fade-left">
              <ConsultingPage />
            </div>
          </div>
        </div>
        <Suspense fallback={<Skeleton />}>
          <OurWork />
          <Statistics />
          <Blog />
        </Suspense>

        <Footer />
      </div>
    </>
  );
}
