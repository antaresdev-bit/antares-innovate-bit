import { forwardRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import { useTranslations } from "next-intl";

const IndustriesDropdown = forwardRef(({ isOpen, toggle, locale }, ref) => {
  const t = useTranslations();
  
  return (
    <div className="relative" ref={ref}>
      <button
        onClick={toggle}
        aria-expanded={isOpen}
        aria-label={t("navbar.toggleIndustries")}
        className="text-white hover:text-gray-300 flex items-center gap-1"
      >
        {t("navbar.industries")} <FaChevronDown className="w-4 h-4" />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg overflow-hidden transition-all duration-300 opacity-100">
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
});

IndustriesDropdown.displayName = "IndustriesDropdown";
export default IndustriesDropdown; 