"use client";
import Link from "next/link";
import dynamic from "next/dynamic";

const WideVideoSection = dynamic(() => import("./WideVideoSection"), {
  ssr: false,
});


const PortfolioItem = ({ item, locale }) => {
    return (
      <div className="relative max-w-[90%] sm:max-w-[400px] w-full h-auto min-h-[250px] rounded-[24.15px] overflow-hidden bg-gray-800 shadow-lg">
        <Link href={`/${locale}/${item.path}`}>
          <WideVideoSection src={item.videoSrc} />
        </Link>
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="font-bold text-lg">{item.title}</h3>
          {item.description && (
            <p className="text-sm">{item.description}</p>
          )}
        </div>
      </div>
    );
  };
  
  export default PortfolioItem;