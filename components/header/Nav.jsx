import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaBars, FaChevronDown } from "react-icons/fa";
import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

function Nav() {
  const t = useTranslations(); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const locale = useLocale();
  const pathname = usePathname();
  const industriesRef = useRef(null);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleIndustries = () => setIsIndustriesOpen(!isIndustriesOpen);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace('#', '');
        setTimeout(() => scrollToElement(id), 600);
      }
    }
  }, [pathname]);

  const isHomePage = pathname === `/${locale}` || pathname === `/${locale}/`;
  const servicesLink = isHomePage ? '#our-services' : `/${locale}/#our-services`;

  const getYOffset = () => {
    // Ajustar el offset basado en el tamaño de la pantalla
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768 ? 100 : 150;
    }
    return 150; // Valor por defecto
  };

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (!element) return;
    
    const yOffset = getYOffset();
    const y = element.getBoundingClientRect().top + window.scrollY - yOffset;
    
    window.scrollTo({ 
      top: y, 
      behavior: 'smooth' 
    });
  };

  // Componente para manejo automático de links suaves
  const SmoothLink = React.memo(({ href, children, className, onClick }) => {
    const handleClick = (e) => {
      if (isHomePage && href.startsWith('#')) {
        e.preventDefault();
        const id = href.replace('#', '');
        scrollToElement(id);
      }
      
      if (onClick) onClick(e);
      setIsMenuOpen(false); // Siempre cerrar el menú al hacer clic
    };
    
    return (
      <Link href={href} className={className} onClick={handleClick}>
        {children}
      </Link>
    );
  });

  // Cerrar el menú de industrias cuando se cierra el menú principal
  useEffect(() => {
    if (!isMenuOpen) {
      setIsIndustriesOpen(false);
    }
  }, [isMenuOpen]);

  // Cerrar menús al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      // No cerrar si el clic fue en el botón
      if (buttonRef.current && buttonRef.current.contains(event.target)) {
        return;
      }
      
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
      if (industriesRef.current && !industriesRef.current.contains(event.target)) {
        setIsIndustriesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Componente para los enlaces del menú
  const NavLink = ({ href, children }) => (
    <Link
      href={href}
      className="text-white hover:text-gray-300"
    >
      {children}
    </Link>
  );

  // Componente para el menú desplegable de industrias
  const IndustriesDropdown = () => {
    return (
      <div className="relative" ref={industriesRef}>
            <button
              onClick={toggleIndustries}
              aria-expanded={isIndustriesOpen}
              aria-label={t("navbar.toggleIndustries")}
              className="text-white hover:text-gray-300 flex items-center gap-1"
            >
              {t("navbar.industries")} <FaChevronDown className="w-4 h-4" />
            </button>
            {isIndustriesOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg overflow-hidden">
                <Link
                  href={`/${locale}/real-estate`}
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  {t("navbar.realEstate")}
                </Link>
                <Link
                  href={`/${locale}/marketing`}
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  {t("navbar.marketing")}
                </Link>
              </div>
            )}
          </div>
    );
  };

  return (
    <div className="flex justify-center w-full mt-[30px] md:mt-[50px] lg:mt-[50px] space-between">
      <nav className="w-full max-w-[1500px] h-[76px] flex items-center bg-[rgba(14,5,28,0.65)] backdrop-blur-xl rounded-[24px] relative px-[21px] md:px-[clamp(10px,6vw,50px)] lg:px-[clamp(10px,6vw,71px)] justify-between border border-[rgba(255,255,255,0.25)]">
        <Link href={`/${locale}/`} className="flex-shrink-0">
          <Image
            src="/assets/images/Logo Antares.svg"
            alt="Antares Logo"
            width={150}
            height={50}
          />
        </Link>

        {/* Menú Mobile */}
        <div className="flex items-center gap-x-4 lg:hidden">
        <LanguageSwitcher />

        <button 
          ref={buttonRef}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label={t("navbar.toggleMenu")}
          className="w-10 h-10 flex items-center justify-center text-white"
        >
          <FaBars className="w-6 h-6 cursor-pointer" />
        </button>
        </div>
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="absolute top-full left-0 w-full bg-[#263B9E] rounded-[24px] shadow-md flex flex-col items-center py-4 mt-2 lg:hidden gap-y-2"
          >
            <SmoothLink href={servicesLink} className="text-white hover:text-gray-300">
              {t("navbar.services")}
            </SmoothLink>
            <Link
              href={`/${locale}/portafolio`}
              className="text-white hover:text-gray-300"
            >
              {t("navbar.portfolio")}
            </Link>
            <div
              className="w-full flex flex-col items-center"
              ref={industriesRef}
            >
              <button
                onClick={toggleIndustries}
                aria-expanded={isIndustriesOpen}
                aria-label={t("navbar.toggleIndustries")}
                className="text-white hover:text-gray-300 flex items-center gap-1"
              >
                {t("navbar.industries")} <FaChevronDown className="w-4 h-4" />
              </button>
              {isIndustriesOpen && (
                <div className="w-full flex flex-col items-center bg-[#1A2B6D] rounded-lg shadow-lg mt-2">
                  <Link
                    href={`/${locale}/real-estate`}
                    className="text-white hover:bg-gray-700 w-full text-center py-2"
                  >
                    {t("navbar.realEstate")}
                  </Link>
                  <Link
                    href={`/${locale}/marketing`}
                    className="text-white hover:bg-gray-700 w-full text-center py-2"
                  >
                    {t("navbar.marketing")}
                  </Link>
                </div>
              )}
            </div>
            <Link
              href={`/${locale}/about`}
              className="text-white hover:text-gray-300"
            >
              {t("navbar.aboutUs")}
            </Link>
            <Link
              href={`/${locale}/blog`}
              className="text-white hover:text-gray-300"
            >
              {t("navbar.blog")}
            </Link>
            <Link
              href={`/${locale}/form-contact`}
              className="text-white hover:text-gray-300"
            >
              {t("navbar.contact")}
            </Link>
          </div>
        )}

        {/* Menú Desktop */}
        <div className="hidden lg:flex items-center gap-x-6">
          <SmoothLink href={servicesLink} className="text-white hover:text-gray-300">
            {t("navbar.services")}
          </SmoothLink>
          <Link
            href={`/${locale}/portafolio`}
            className="text-white hover:text-gray-300"
          >
            {t("navbar.portfolio")}
          </Link>
          <IndustriesDropdown />
          <Link
            href={`/${locale}/about`}
            className="text-white hover:text-gray-300"
          >
            {t("navbar.aboutUs")}
          </Link>
          <Link
            href={`/${locale}/blog`}
            className="text-white hover:text-gray-300"
          >
            {t("navbar.blog")}
          </Link>
          <Link
            href={`/${locale}/form-contact`}
            className="text-white hover:text-gray-300"
          >
            {t("navbar.contact")}
          </Link>
          <LanguageSwitcher />
        </div>
      </nav>
    </div>
  );
}

export default Nav;
