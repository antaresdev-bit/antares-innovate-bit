"use client";
import React, { useState, useMemo } from "react";
import { useLocale } from "next-intl";
import dynamic from "next/dynamic";
import { workItems } from "@/components/portafolioComponenets/workItems";
import CategoryButtons from "@/components/portafolioComponenets/CategoryButtons";
import PortfolioItem from "@/components/portafolioComponenets/PortfolioItem";

const CardPortafolio = dynamic(() => import("@/components/portafolioComponenets/CardPortafolio"));

const PortafolioPage = () => {
  const locale = useLocale();
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = useMemo(() => 
    workItems.filter((item) =>
      activeCategory === "all" ? true : item.category.includes(activeCategory)
    ),
    [activeCategory]
  );

  return (
    <div className="relative bg-opacity-70">
      {/* Gradient background */}
      <div
        className="absolute inset-x-0 mx-auto w-full max-w-[1409px] h-[542px]"
        style={{
          background: "radial-gradient(ellipse at center, #334385 0%, #0E051C 60%)",
          transform: "translateY(-70%)",
          zIndex: -1,
        }}
      />

      <div className="max-w-[1500px] mx-auto">
        {/* Header */}
        <div className="mt-[187px] mx-[21px] sm:mx-[21px] md:mx-[49px] lg:mx-[71px]">
          <h1
            className="mb-[69px] ml-[0px] sm:ml-[0px] md:ml-[65px] lg:ml-[68px] text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4D86FF] to-[#FFFFFF] leading-[65px] max-w-[400px]"
            style={{ fontFamily: "HandelGothic" }}
          >
            portafolio
          </h1>
        </div>

        {/* Category Filters */}
        <CategoryButtons 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />

        {/* Portfolio Grid */}
        <div className="mx-[21px] sm:mx-[21px] md:mx-[49px] lg:mx-[71px] max-w-[1500px] mb-[40px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 justify-items-center">
          {filteredItems.map((item, index) => (
            <PortfolioItem 
              key={index} 
              item={item} 
              locale={locale} 
            />
          ))}
        </div>

        <div className="mt-[187px]">
          <CardPortafolio />
        </div>
      </div>
    </div>
  );
};

export default PortafolioPage;
