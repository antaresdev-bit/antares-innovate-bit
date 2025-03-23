import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import SmoothLink from "./SmoothLink";
import { useLocale } from "next-intl";

const AnimatedArrow = () => {
    return (
        <div className="group-hover:bg-black group-hover:border-black rounded-full transition-colors duration-300 border-[1px] border-black p-3 flex items-center justify-center w-14 h-14">
            <Image
                src="/assets/images/header/industries-modal/diagonal-arrow.svg"
                alt="flecha hacia abajo"
                width={20}
                height={20}
                className="group-hover:invert transition-all duration-300"
            />
        </div>
    )
}

const IndustriesMenuCard = ({ title, image, delay, link, bgImage, setIsIndustriesOpen, lineColor, isOpen }) => {
    return (
        <Link
            href={link} 
            onClick = {() => {
                setIsIndustriesOpen(false);
            }}
        >
            <div className={`group w-[450px] h-[198px] relative flex items-center justify-center hover:cursor-pointer`} 
                 style={{ animationDelay: `${isOpen ? delay : 0}ms` }}>
                <Image
                src={`/assets/images/header/industries-modal/${bgImage}.png`}
                alt="colourful image background with an astronaut"
                width={415}
                height={183}
                className="transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-start justify-between pt-10 px-10 pb-6">
                <div className="flex items-center justify-center">
                    <Image
                        src={`/assets/images/header/industries-modal/${image}.png`}
                        alt="figuras geometricas, triangulo, cuadrado, circulo, fondo azul"
                        width={54}
                        height={54}
                        className="animate-bounce-slow"
                    />
                    <AnimatedArrow />
                </div>
                <div className="w-[150px] h-[1px]" style={{ backgroundColor: lineColor }} />

                <h1 className="text-[#02021E] text-[25px] group-hover:translate-x-2 transition-transform duration-300">
                    {title}
                </h1>
            </div>
        </div>
        </Link>
    )
}

const IndustriesMenuModal = ({ industriesRef, setIsIndustriesOpen, isOpen = true }) => {
    const t = useTranslations();
    const locale = useLocale();
    
    return (
        <div className={`desktop-menu-dropdown transition-all duration-300 ease-in-out
                       ${isOpen ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-95 pointer-events-none'}`}

        >
            <div className={`desktop-menu-dropdown-content transition-all duration-300 ease-in-out
                          ${isOpen ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'}`}
                          ref={industriesRef}>
                <IndustriesMenuCard 
                    title={t("navbar.realEstate")} 
                    image="real-state" 
                    bgImage="real-state-bg" 
                    lineColor="white" 
                    delay={100}  
                    link={`/${locale}/real-estate`} 
                    setIsIndustriesOpen={setIsIndustriesOpen}
                    isOpen={isOpen}
                />
                <IndustriesMenuCard 
                    title={t("navbar.marketing")} 
                    image="marketing" 
                    bgImage="marketing-bg" 
                    lineColor="#173E9B" 
                    delay={200} 
                    link={`/${locale}/marketing`} 
                    setIsIndustriesOpen={setIsIndustriesOpen}
                    isOpen={isOpen}
                />
            </div>
        </div>
    )
}

export default IndustriesMenuModal;
