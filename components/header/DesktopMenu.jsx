import Link from "next/link";
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

  return (
    <div className="hidden lg:flex items-center gap-x-6">

      <button
        onClick={toggleServices}
        className="text-white hover:text-gray-300 flex items-center gap-1"
        ref={servicesButtonRef}
      >
        {t("navbar.services")} <FaChevronDown className="w-4 h-4" />
      </button>
      {isServicesMenuOpen && (
        <ServicesMenuModal
          servicesMenuRef={servicesMenuRef}
          handleServiceClick={handleServiceClick}
          creativityLink={creativityLink}
          technologyLink={technologyLink}
          consultingLink={consultingLink}
          isHomePage={isHomePage}
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
          {t("navbar.industries")} <FaChevronDown className="w-4 h-4" />
        </button>
      {isIndustriesOpen && (
        <IndustriesMenuModal
          industriesRef={industriesRef}
          setIsIndustriesOpen={setIsIndustriesOpen}
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