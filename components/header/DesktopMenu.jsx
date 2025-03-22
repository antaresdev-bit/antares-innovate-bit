import Link from "next/link";
import SmoothLink from "./SmoothLink";
import LanguageSwitcher from "./LanguageSwitcher";
import { FaChevronDown } from "react-icons/fa";
import ServicesMenuModal from "./ServicesMenuModal";

const IndustriesDropdown = ({locale, toggleMenu, t}) => {
  return (
    <div className="absolute top-full left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg overflow-hidden">
      <Link
        href={`/${locale}/real-estate`}
        className="block px-4 py-2 hover:bg-gray-200"
        onClick={toggleMenu}
      >
        {t("navbar.realEstate")}
      </Link>
      <Link
        href={`/${locale}/marketing`}
        className="block px-4 py-2 hover:bg-gray-200"
        onClick={toggleMenu}
      >
        {t("navbar.marketing")}
      </Link>
    </div>
  )
}


const DesktopMenu = ({
  isIndustriesOpen,
  toggleIndustries,
  industriesRef,
  locale,
  toggleServices,
  isServicesMenuOpen,
  t
}) => {

  return (
    <div className="hidden lg:flex items-center gap-x-6">
     
     <button
          onClick={toggleServices}
          className="text-white hover:text-gray-300 flex items-center gap-1"
        >
          {t("navbar.services")} <FaChevronDown className="w-4 h-4" />
      </button>
      {isServicesMenuOpen && (
        <ServicesMenuModal />
      )}
      <Link
        href={`/${locale}/portafolio`}
        className="text-white hover:text-gray-300"
      >
        {t("navbar.portfolio")}
      </Link>
      <div className="relative" ref={industriesRef}>
        <button
          onClick={toggleIndustries}
          className="text-white hover:text-gray-300 flex items-center gap-1"
        >
          {t("navbar.industries")} <FaChevronDown className="w-4 h-4" />
        </button>
        {isIndustriesOpen && (
          <IndustriesDropdown 
            locale={locale}
            toggleMenu={toggleIndustries}
            t={t}
          />
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

      <LanguageSwitcher />
    </div>
  );
}

export default DesktopMenu; 