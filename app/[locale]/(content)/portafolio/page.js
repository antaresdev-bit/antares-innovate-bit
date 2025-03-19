import { Suspense } from "react";
import { workItems } from "@/components/portafolioComponenets/workItems";
import dynamic from "next/dynamic";
import LoadingScreen from "@/components/loading/LoadingScreen";
// Separamos el contenido dinámico en un componente lazy
const PortfolioContent = dynamic(() => import("@/components/portafolioComponenets/PortfolioClient"), {
  loading: () => <LoadingScreen />,
  ssr: true
});

export default function PortafolioPage() {
  return (
    <div className="relative bg-opacity-70">
      {/* Gradient background - se renderiza inmediatamente */}
      <div
        className="absolute inset-x-0 mx-auto w-full max-w-[1409px] h-[542px]"
        style={{
          background: "radial-gradient(ellipse at center, #334385 0%, #0E051C 60%)",
          transform: "translateY(-70%)",
          zIndex: -1,
        }}
      />

      <div className="max-w-[1500px] mx-auto">
        {/* Header - se renderiza inmediatamente */}
        <div className="mt-[187px] mx-[21px] sm:mx-[21px] md:mx-[49px] lg:mx-[71px]">
          <h1
            className="mb-[69px] ml-[0px] sm:ml-[0px] md:ml-[65px] lg:ml-[68px] text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4D86FF] to-[#FFFFFF] leading-[65px] max-w-[400px]"
            style={{ fontFamily: "HandelGothic" }}
          >
            portafolio
          </h1>
        </div>

        {/* Grid de carga mientras el contenido se prepara */}
        <div className="mx-[21px] sm:mx-[21px] md:mx-[49px] lg:mx-[71px]">
          <Suspense fallback={<LoadingScreen />}>
            <PortfolioContent initialItems={workItems} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
