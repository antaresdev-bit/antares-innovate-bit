import { Suspense} from "react";
import { workItems } from "@/components/portafolioComponenets/workItems";
import dynamic from "next/dynamic";
import LoadingScreen from "@/components/loading/LoadingScreen";
// Separamos el contenido dinámico en un componente lazy
const PortfolioContent = dynamic(() => import("@/components/portafolioComponenets/PortfolioClient"), {
  loading: () => null,
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

        {/* Grid de carga visible mientras el contenido se prepara */}
        <div className="mx-[21px] sm:mx-[21px] md:mx-[49px] lg:mx-[71px]">
          <Suspense fallback={
            <div className="w-full">
              {/* Indicador de carga visible */}
              <div className="flex justify-center items-center py-16 mb-8">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="ml-4 text-xl text-white font-bold">Cargando proyectos...</p>
              </div>
              
              {/* Grid de placeholders animados */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1,2,3,4,5,6].map((i) => (
                  <div key={i} className="h-64 bg-gray-800/30 rounded-[24px] animate-pulse">
                    <div className="absolute bottom-4 left-4 w-2/3">
                      <div className="h-5 bg-gray-700/50 rounded w-3/4 mb-2 animate-pulse"></div>
                      <div className="h-4 bg-gray-700/30 rounded w-full animate-pulse"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          }>
            <PortfolioContent initialItems={workItems} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
