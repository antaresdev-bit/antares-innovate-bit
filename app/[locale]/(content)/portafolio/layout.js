import { Suspense } from "react";

export default function PortfolioLayout({ children }) {
  return (
    <Suspense fallback={
      <div className="mx-[21px] sm:mx-[21px] md:mx-[49px] lg:mx-[71px] mt-[69px]">
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
      {children}
    </Suspense>
  );
}