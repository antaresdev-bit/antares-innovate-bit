import Link from "next/link";
import { useTranslations } from "next-intl";
import SmoothLink from "./SmoothLink";
import LanguageSwitcher from "./LanguageSwitcher";
import IndustriesDropdown from "./IndustriesDropdown";

function DesktopMenu({ 
  isIndustriesOpen, 
  toggleIndustries,
  industriesRef,
  locale,
  servicesLink,
  isHomePage,
  scrollToElement
}) {
  const t = useTranslations();
  
  return (
    <div className="hidden lg:flex items-center gap-x-6">
      <SmoothLink 
        href={servicesLink} 
        className="text-white hover:text-gray-300"
        isHomePage={isHomePage}
        scrollToElement={scrollToElement}
      >
        {t("navbar.services")}
      </SmoothLink>
      
      <Link
        href={`/${locale}/portafolio`}
        className="text-white hover:text-gray-300"
      >
        {t("navbar.portfolio")}
      </Link>
      
      <IndustriesDropdown 
        isOpen={isIndustriesOpen}
        toggle={toggleIndustries}
        ref={industriesRef}
        locale={locale}
      />
      
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