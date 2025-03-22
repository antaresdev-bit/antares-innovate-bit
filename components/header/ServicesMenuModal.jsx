import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import SmoothLink from "./SmoothLink";
import { useLocale } from "next-intl";

const AnimatedArrow = () => {
    return (
        <div className="group-hover:bg-black group-hover:border-black rounded-full transition-colors duration-300 border-[1px] border-[#676781] p-3 flex items-center justify-center w-14 h-14">
            <Image
                src="/assets/images/header/services-modal/dark-arrow.svg"
                alt="flecha hacia abajo"
                width={20}
                height={20}
                className="group-hover:invert transition-all duration-300"
            />
        </div>
    )
}

const ServicesMenuCard = ({ title, image, delay, handleServiceClick, link, isHomePage }) => {
    return (
        <SmoothLink 
            href={link} 
            onClick={(e) => handleServiceClick(e, link.replace('#', ''))} 
            isHomePage={isHomePage}
        >
            <div className={`group w-[280px] h-[198px] relative flex items-center justify-center hover:cursor-pointer`} 
                 style={{ animationDelay: `${delay}ms` }}>
                <Image
                src="/assets/images/header/services-modal/menu-card-bg.png"
                alt="light grey background"
                width={245}
                height={183}
                className="transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-start justify-between p-10">
                <div className="flex items-center justify-center">
                    <Image
                        src={`/assets/images/header/services-modal/${image}.png`}
                        alt="figuras geometricas, triangulo, cuadrado, circulo, fondo azul"
                        width={54}
                        height={54}
                        className="animate-bounce-slow"
                    />
                    <AnimatedArrow />
                </div>
                <div className="w-full h-[1px] bg-[#676781]" />

                <h1 className="text-[#02021E] text-[25px] group-hover:translate-x-2 transition-transform duration-300">
                    {title}
                </h1>
            </div>
        </div>
        </SmoothLink>
    )
}

const ServicesMenuModal = ({ servicesMenuRef, handleServiceClick, creativityLink, technologyLink, consultingLink, isHomePage }) => {
    const t = useTranslations();
    const locale = useLocale();
    return (
        <div className="desktop-menu-dropdown"
            ref={servicesMenuRef}
        >
            <div className="desktop-menu-dropdown-content">
                <Link href={`/${locale}/form-contact`}>
                <div className="group w-[280px] h-[198px] relative flex items-center justify-center animate-in fade-in hover:cursor-pointer">
                    <Image
                        src="/assets/images/header/services-modal/services-contact.png"
                        alt="Botón Animado"
                        width={245}
                        height={183}
                        className="absolute group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="flex items-center justify-end w-[200px] h-[40px] bottom-[28px] absolute bg-white rounded-[20px] p-1 hover:bg-gray-100 transition-colors duration-300" >
                        <div className="text-center w-full text-[#02021E] text-[20px] pl-6">
                            {t("navbar.contactUs")}
                        </div>
                        <Image
                            src="/assets/images/Gif Avion.gif"
                            alt="Botón Animado"
                            width={34}
                            height={34}
                            className="animate-pulse"
                        />
                    </div>
                </div>
                </Link>
                <ServicesMenuCard title={t("landing.creatCardTittle")} image="creativity" delay={100} handleServiceClick={handleServiceClick} link={creativityLink} isHomePage={isHomePage}/>
                <ServicesMenuCard title={t("landing.tecCardTittle")} image="tech" delay={200} handleServiceClick={handleServiceClick} link={technologyLink} isHomePage={isHomePage}/>
                <ServicesMenuCard title={t("landing.consCardTittle")} image="consult" delay={300} handleServiceClick={handleServiceClick} link={consultingLink} isHomePage={isHomePage}/>
            </div>
        </div>
    )
}

export default ServicesMenuModal;
