import React, { useState, useRef } from "react";
import Link from "next/link";
import SmoothLink from "./SmoothLink";
import LanguageSwitcher from "./LanguageSwitcher";
import { FaBars, FaChevronDown } from "react-icons/fa";

const IndustriesDropdown = ({ locale, closeMenus, t }) => {
    return (
        <div className="w-full flex flex-col items-center bg-[#1A2B6D] rounded-lg shadow-lg mt-2">
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
        <div className="w-full flex flex-col items-center bg-[#1A2B6D] rounded-lg shadow-lg mt-2">
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
            <div className="flex items-end gap-x-4 lg:hidden">
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

            {isMenuOpen && (
                <div
                    ref={menuRef}
                    className="absolute top-full left-0 w-full bg-[#263B9E] rounded-[24px] shadow-md flex flex-col items-center py-4 mt-2 gap-y-2 lg:hidden z-50"
                >
                                        <div
                        className="w-full flex flex-col items-center"
                    >
                        <button
                            onClick={toggleServices}
                            className="text-white hover:text-gray-300 flex items-center gap-1 py-2"
                        >
                            {t("navbar.services")} <FaChevronDown className="w-4 h-4" />
                        </button>
                        {isServicesMobileOpen && (
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
                            {t("navbar.industries")} <FaChevronDown className="w-4 h-4" />
                        </button>
                        {isIndustriesMobileOpen && (
                            <IndustriesDropdown locale={locale} closeMenus={closeMenus} t={t} />
                        )}
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
            )}
        </>
    );
};

export default MobileMenu;

