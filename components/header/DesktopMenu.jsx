import Link from "next/link";
import { useState, useEffect } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { FaChevronDown } from "react-icons/fa";
import ServicesMenuModal from "./ServicesMenuModal";
import IndustriesMenuModal from "./IndustriesMenuModal";


const DesktopMenu = ({
  isIndustriesOpen,
  toggleIndustries,
  industriesRef,
  locale,
  toggleServices,
  isServicesMenuOpen,
  servicesMenuRef,
  servicesButtonRef,
  handleServiceClick,
  creativityLink,
  technologyLink,
  consultingLink,
  isHomePage,
  industriesButtonRef,
  t,
  setIsIndustriesOpen,
}) => {
  // Estados para controlar la animación
  const [isServicesAnimating, setIsServicesAnimating] = useState(false);
  const [isIndustriesAnimating, setIsIndustriesAnimating] = useState(false);
  
  // Efecto para el menú de servicios
  useEffect(() => {
    if (isServicesMenuOpen) {
      setIsServicesAnimating(true);
    } else {
      const timer = setTimeout(() => {
        setIsServicesAnimating(false);
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [isServicesMenuOpen]);
  
  // Efecto para el menú de industrias
  useEffect(() => {
    if (isIndustriesOpen) {
      setIsIndustriesAnimating(true);
    } else {
      const timer = setTimeout(() => {
        setIsIndustriesAnimating(false);
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [isIndustriesOpen]);

  return (
    <div className="hidden lg:flex items-center gap-x-6">

      <button
        onClick={toggleServices}
        className="text-white hover:text-gray-300 flex items-center gap-1"
        ref={servicesButtonRef}
      >
        {t("navbar.services")} <FaChevronDown className={`w-4 h-4 transition-transform duration-300 ease-in-out ${isServicesMenuOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {/* Menú de servicios con animación */}
      {(isServicesMenuOpen || isServicesAnimating) && (
        <ServicesMenuModal
          servicesMenuRef={servicesMenuRef}
          handleServiceClick={handleServiceClick}
          creativityLink={creativityLink}
          technologyLink={technologyLink}
          consultingLink={consultingLink}
          isHomePage={isHomePage}
          isOpen={isServicesMenuOpen}
        />
      )}
      
      <Link
        href={`/${locale}/portafolio`}
        className="text-white hover:text-gray-300"
      >
        {t("navbar.portfolio")}
      </Link>
      
      <button
        onClick={toggleIndustries}
        className="text-white hover:text-gray-300 flex items-center gap-1"
        ref={industriesButtonRef}
      >
        {t("navbar.industries")} <FaChevronDown className={`w-4 h-4 transition-transform duration-300 ease-in-out ${isIndustriesOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {/* Menú de industrias con animación */}
      {(isIndustriesOpen || isIndustriesAnimating) && (
        <IndustriesMenuModal
          industriesRef={industriesRef}
          setIsIndustriesOpen={setIsIndustriesOpen}
          isOpen={isIndustriesOpen}
        />
      )}
      
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
  );
}

export default DesktopMenu; 