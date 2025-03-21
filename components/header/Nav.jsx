import React, { useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { scrollToElement } from "@/utils/scroll";
import NavLogo from "./NavLogo";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

function Nav() {
  const t = useTranslations(); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const locale = useLocale();
  const pathname = usePathname();
  const industriesRef = useRef(null);
  const menuRef = useRef(null);
  const MobileButtonRef = useRef(null);

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

  const handleServiceClick = (e) => {
    if (isHomePage) {
      e.preventDefault();
      scrollToElement('our-services');
      toggleMenu();
    }
  };

  const isHomePage = pathname === `/${locale}` || pathname === `/${locale}/`;
  const servicesLink = isHomePage ? '#our-services' : `/${locale}/#our-services`;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (MobileButtonRef.current && MobileButtonRef.current.contains(event.target)) {
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

  return (
    <div className="flex justify-center w-full mt-[30px] md:mt-[50px] lg:mt-[50px] space-between">
      <nav className="w-full max-w-[1500px] h-[76px] flex items-center bg-[rgba(14,5,28,0.65)] backdrop-blur-xl rounded-[24px] relative px-[21px] md:px-[clamp(10px,6vw,50px)] lg:px-[clamp(10px,6vw,71px)] justify-between border border-[rgba(255,255,255,0.25)]">
        <NavLogo 
          locale={locale}
        />
        {/* Menú Mobile */}
        <MobileMenu 
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          isIndustriesOpen={isIndustriesOpen}
          toggleIndustries={toggleIndustries}
          locale={locale}
          MobileButtonRef={MobileButtonRef}
          menuRef={menuRef}
          industriesRef={industriesRef}
          t={t}
          servicesLink={servicesLink}
          handleServiceClick={handleServiceClick}
        />

        {/* Menú Desktop */}
        <DesktopMenu 
          isIndustriesOpen={isIndustriesOpen}
          toggleIndustries={toggleIndustries}
          industriesRef={industriesRef}
          locale={locale}
          servicesLink={servicesLink}
          isHomePage={isHomePage}
          scrollToElement={scrollToElement}
          handleServiceClick={handleServiceClick}
          t={t}
        />
      </nav>
    </div>
  );
}

export default Nav;
