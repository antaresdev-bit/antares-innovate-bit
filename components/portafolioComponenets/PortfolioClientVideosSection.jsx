"use client";
import { useState, useMemo } from "react";
import { useLocale } from "next-intl";
import dynamic from "next/dynamic";

const CategoryButtons = dynamic(
  () => import("@/components/portafolioComponenets/CategoryButtons"),
  { ssr: true }
);

const PortfolioItem = dynamic(
  () => import("@/components/portafolioComponenets/PortfolioItem"),
  { ssr: true }
);

const CardPortafolio = dynamic(
  () => import("@/components/portafolioComponenets/CardPortafolio"),
  { ssr: false }
);

export default function PortfolioClientVideosSection({ initialItems }) {
  const locale = useLocale();
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = useMemo(() => 
    initialItems.filter((item) =>
      activeCategory === "all" ? true : item.category.includes(activeCategory)
    ),
    [activeCategory, initialItems]
  );

  return (
    <>
      <CategoryButtons 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />

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
    </>
  );
}