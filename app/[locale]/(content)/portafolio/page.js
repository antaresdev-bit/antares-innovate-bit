"use client"

import { workItems } from "@/components/portafolioComponenets/workItems";
import dynamic from "next/dynamic";


const PortfolioContent = dynamic(() => 
  import("@/components/portafolioComponenets/PortfolioClientVideosSection"), 
  { ssr: false, loading: () => <LoadingItems /> }
);

function LoadingItems() {
  return (
    <div 
      className="loading-container mx-[21px] sm:mx-[21px] md:mx-[49px] lg:mx-[71px] mt-8"
      aria-label="Cargando elementos del portafolio"
      role="status"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="relative h-64 bg-gray-800/30 rounded-[24px] animate-pulse" aria-hidden="true">
            <div className="absolute bottom-4 left-4 w-2/3">
              <div className="h-5 bg-gray-700/50 rounded w-3/4 mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-700/30 rounded w-full animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PortafolioPage() {
  
  return (
    <div className="relative bg-opacity-70">
      {/* Fondo Gradiente */}
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

        {/* Contenedor principal */}
        <div className="relative min-h-[600px]">
          <div className="mx-[21px] sm:mx-[21px] md:mx-[49px] lg:mx-[71px]">
            <PortfolioContent initialItems={workItems()} />
          </div>
        </div>
      </div>
    </div>
  );
}