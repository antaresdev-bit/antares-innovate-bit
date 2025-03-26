"use client";

import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslations } from "next-intl";
import CountUp from "react-countup";

function Statistics() {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const statisticsRef = useRef(null);
  const t = useTranslations("statistics");

  useEffect(() => {
    const currentRef = statisticsRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Una vez que se activa, podemos desconectar el observer
          observer.disconnect();
          
          // Establecer un temporizador para iniciar la animación después de 2 segundos
          setTimeout(() => {
            setShouldAnimate(true);
          }, 500);
        }
      },
      {
        root: null,
        rootMargin: "0px",
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
  }, []);

  const statisticItems = [
    { 
      title: t("stadistic1"), 
      content: "+30", 
      isText: true,
      image: null 
    },
    { 
      title: t("stadistic2"), 
      content: null,
      isText: false,
      image: "/assets/images/statistics/world.png" 
    },
    { 
      title: t("stadistic3"), 
      content: "+100", 
      isText: true,
      image: null 
    },
    { 
      title: t("stadistic4"), 
      content: null,
      isText: false,
      image: "/assets/images/statistics/brain.png" 
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, centerMode: false } },
      { breakpoint: 768, settings: { slidesToShow: 2, centerMode: false } },
      { breakpoint: 480, settings: { slidesToShow: 1, centerMode: false } },
    ],
  };

  return (
    <div 
      className="mx-[21px] sm:mx-[21px] md:mx-[49px] lg:mx-[71px]"
      data-aos="fade-in"
      ref={statisticsRef}
    >
      {/* Desktop & Tablet View */}
      <div className="hidden md:flex flex-wrap justify-center gap-[20px] lg:gap-10">
        {statisticItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center rounded-full border-2 border-white text-white text-[20px] text-center p-4 w-[165.46px] h-[166.15px] md:w-[187.31px] md:h-[188.09px] lg:w-[239px] lg:h-[240px]"
          >
            {item.isText ? (
              <span className="text-[20px] md:text-[38px] lg:text-[40px] font-bold mb-4">
                {item.content.startsWith("+") ? "+" : ""}
                {shouldAnimate ? (
                  <CountUp 
                    start={0}
                    end={parseInt(item.content.replace("+", ""))} 
                    duration={2.5} 
                    separator="," 
                    useEasing={true}
                  />
                ) : (
                  "0"
                )}
              </span>
            ) : (
              <img src={item.image} alt={`stat-${index}`} className="mb-4" />
            )}
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        <Slider {...sliderSettings} className="space-y-8">
          {statisticItems.map((item, index) => (
            <div key={index} className="flex justify-center py-[20px] mb-[30px] last:mb-0">
              <div className="flex flex-col items-center justify-center rounded-full border-2 border-white text-white text-[20px] text-center p-4 mx-auto w-[165.46px] h-[166.15px] md:w-[187.31px] md:h-[188.09px] lg:w-[239px] lg:h-[240px]">
                {item.isText ? (
                  <span className="text-3xl font-bold mb-4 tracking-widest"
                  style={{ fontFamily: "HandelGothic" }}>
                    {item.content.startsWith("+") ? "+" : ""}
                    {shouldAnimate ? (
                      <CountUp 
                        start={0}
                        end={parseInt(item.content.replace("+", ""))} 
                        duration={2.5} 
                        separator="," 
                        useEasing={true}
                      />
                    ) : (
                      "0"
                    )}
                  </span>
                ) : (
                  <img src={item.image} alt={`stat-${index}`} className="mb-4" />
                )}
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </Slider>

        <div className="flex justify-center mt-4">
          <img src="/assets/images/statistics/Swipe.png" alt="Swipe" width="69" height="22" />
        </div>
      </div>
    </div>
  );
}

export default Statistics;