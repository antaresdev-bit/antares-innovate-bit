import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import SmoothLink from "./SmoothLink";
import LanguageSwitcher from "./LanguageSwitcher";
import { FaBars, FaChevronDown } from "react-icons/fa";

const IndustriesDropdown = ({ locale, closeMenus, t }) => {
    return (
        <div className="w-full flex flex-col items-center bg-[#1A2B6D] rounded-lg shadow-lg mt-2
                       transform origin-top transition-all duration-300 ease-in-out scale-y-100 opacity-100">
            <Link
                href={`/${locale}/real-estate`}
                className="text-white hover:bg-gray-700 w-full text-center py-2"
                onClick={closeMenus}
            >
                {t("navbar.realEstate")}
            </Link>
            <Link
                href={`/${locale}/marketing`}
                className="text-white hover:bg-gray-700 w-full text-center py-2"
                onClick={closeMenus}
            >
                {t("navbar.marketing")}
            </Link>
        </div>
    )
}

const ServicesDropdown = ({ t, handleServiceClick, creativityLink, technologyLink, consultingLink, isHomePage, setIsServicesMobileOpen }) => {
    return (
        <div className="w-full flex flex-col items-center bg-[#1A2B6D] rounded-lg shadow-lg mt-2
                       transform origin-top transition-all duration-300 ease-in-out scale-y-100 opacity-100">
            <SmoothLink
                href={creativityLink}
                onClick={
                    (e) => {
                        handleServiceClick(e, creativityLink.replace('#', ''))
                        setIsServicesMobileOpen(false)
                    }
                }
                isHomePage={isHomePage}
                className="text-white hover:bg-gray-700 w-full text-center py-2"
            >
                {t("landing.creatCardTittle")}
            </SmoothLink>
            <SmoothLink
                href={technologyLink}
                className="text-white hover:bg-gray-700 w-full text-center py-2"
                onClick={
                    (e) => {
                        handleServiceClick(e, technologyLink.replace('#', ''))
                        setIsServicesMobileOpen(false)
                    }
                }
                isHomePage={isHomePage}
            >
                {t("landing.tecCardTittle")}
            </SmoothLink>
            <SmoothLink
                href={consultingLink}
                className="text-white hover:bg-gray-700 w-full text-center py-2"
                onClick={
                    (e) => {
                        handleServiceClick(e, consultingLink.replace('#', ''))
                        setIsServicesMobileOpen(false)
                    }
                }
                isHomePage={isHomePage}
            >
                {t("landing.consCardTittle")}
            </SmoothLink>
        </div>
    )
}

const MobileMenu = ({
    MobileButtonRef,
    menuRef,
    isMenuOpen,
    toggleMenu,
    locale,
    t,
    handleServiceClick,
    creativityLink,
    technologyLink,
    consultingLink,
    isHomePage,
}) => {
    // Estado local para el menú de industrias
    const [isIndustriesMobileOpen, setIsIndustriesMobileOpen] = useState(false);
    const industriesMobileRef = useRef(null);
    const [isServicesMobileOpen, setIsServicesMobileOpen] = useState(false);
    
    // Estado para controlar la animación
    const [isMenuAnimating, setIsMenuAnimating] = useState(false);
    
    // Animación para los submenús
    const [industriesAnimation, setIndustriesAnimation] = useState(false);
    const [servicesAnimation, setServicesAnimation] = useState(false);
    
    // Efecto para controlar la animación cuando el menú se abre o cierra
    useEffect(() => {
        if (isMenuOpen) {
            setIsMenuAnimating(true);
        } else {
            setIsMenuAnimating(false);
        }
    }, [isMenuOpen]);
    
    // Efectos para controlar las animaciones de los submenús
    useEffect(() => {
        if (isIndustriesMobileOpen) {
            setIndustriesAnimation(true);
        } else {
            setTimeout(() => {
                setIndustriesAnimation(false);
            }, 300);
        }
    }, [isIndustriesMobileOpen]);
    
    useEffect(() => {
        if (isServicesMobileOpen) {
            setServicesAnimation(true);
        } else {
            setTimeout(() => {
                setServicesAnimation(false);
            }, 300);
        }
    }, [isServicesMobileOpen]);
    
    // Función para alternar el menú de industrias
    const toggleIndustries = (e) => {
        e.stopPropagation();
        if (isServicesMobileOpen) {
            setIsServicesMobileOpen(false);
        }
        setIsIndustriesMobileOpen(!isIndustriesMobileOpen);
    };

    const toggleServices = (e) => {
        e.stopPropagation();
        if (isIndustriesMobileOpen) {
            setIsIndustriesMobileOpen(false);
        }
        setIsServicesMobileOpen(!isServicesMobileOpen);
    };
    
    // Función para cerrar todos los menús
    const closeMenus = () => {
        toggleMenu();
        setIsIndustriesMobileOpen(false);
        setIsServicesMobileOpen(false);
    };

    return (
        <>
            <div className="flex items-end lg:hidden">
                <LanguageSwitcher />
                <button
                    ref={MobileButtonRef}
                    onClick={toggleMenu}
                    aria-expanded={isMenuOpen}
                    className="w-10 h-10 flex items-center justify-center text-white"
                >
                    <FaBars className="w-6 h-6 cursor-pointer" />
                </button>
            </div>

            {/* Menú con animación de escala */}
            <div 
                ref={menuRef}
                className={`
                    absolute top-full left-0 w-full 
                    bg-[#263B9E] rounded-[24px] shadow-md 
                    flex flex-col items-center py-4 mt-2 gap-y-2 lg:hidden z-50
                    transform origin-top transition-all duration-300 ease-in-out
                    ${isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}
                `}
            >
                <div
                    className="w-full flex flex-col items-center"
                >
                    <button
                        onClick={toggleServices}
                        className="text-white hover:text-gray-300 flex items-center gap-1 py-2"
                    >
                        {t("navbar.services")} <FaChevronDown className={`w-4 h-4 transition-transform duration-300 ease-in-out ${isServicesMobileOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <div 
                        className={`
                            w-full overflow-hidden transition-all duration-300 ease-in-out
                            ${isServicesMobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                        `}
                    >
                        {(isServicesMobileOpen || servicesAnimation) && (
                            <ServicesDropdown
                                closeMenus={closeMenus}
                                t={t}
                                handleServiceClick={handleServiceClick}
                                creativityLink={creativityLink}
                                technologyLink={technologyLink}
                                consultingLink={consultingLink}
                                setIsServicesMobileOpen={setIsServicesMobileOpen}
                                isHomePage={isHomePage}
                            />
                        )}
                    </div>
                </div>
               
                <Link
                    href={`/${locale}/portafolio`}
                    className="text-white hover:text-gray-300 py-2"
                    onClick={toggleMenu}
                >
                    {t("navbar.portfolio")}
                </Link>
                <div
                    className="w-full flex flex-col items-center"
                    ref={industriesMobileRef}
                >
                    <button
                        onClick={toggleIndustries}
                        className="text-white hover:text-gray-300 flex items-center gap-1 py-2"
                    >
                        {t("navbar.industries")} <FaChevronDown className={`w-4 h-4 transition-transform duration-300 ease-in-out ${isIndustriesMobileOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <div 
                        className={`
                            w-full overflow-hidden transition-all duration-300 ease-in-out
                            ${isIndustriesMobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                        `}
                    >
                        {(isIndustriesMobileOpen || industriesAnimation) && (
                            <IndustriesDropdown locale={locale} closeMenus={closeMenus} t={t} />
                        )}
                    </div>
                </div>
                <Link
                    href={`/${locale}/about`}
                    className="text-white hover:text-gray-300 py-2"
                    onClick={toggleMenu}
                >
                    {t("navbar.aboutUs")}
                </Link>
                <Link
                    href={`/${locale}/blog`}
                    className="text-white hover:text-gray-300 py-2"
                    onClick={toggleMenu}
                >
                    {t("navbar.blog")}
                </Link>
                <Link
                    href={`/${locale}/form-contact`}
                    className="text-white hover:text-gray-300 py-2"
                    onClick={toggleMenu}
                >
                    {t("navbar.contact")}
                </Link>
            </div>
        </>
    );
};

export default MobileMenu;

