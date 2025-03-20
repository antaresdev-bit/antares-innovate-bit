import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaBars, FaChevronDown } from "react-icons/fa";
import { useLocale } from "next-intl";
import Link from "next/link";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const locale = useLocale();
  const industriesRef = useRef(null);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleIndustries = () => setIsIndustriesOpen(!isIndustriesOpen);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        industriesRef.current &&
        !industriesRef.current.contains(event.target)
      ) {
        setIsIndustriesOpen(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex justify-center w-full mt-[30px] md:mt-[50px] lg:mt-[50px]">
      <nav
        className="w-full max-w-[1500px] h-[76px] flex items-center 
    bg-[rgba(14,5,28,0.65)] backdrop-blur-xl 
    rounded-[24px] relative px-[21px] md:px-[clamp(10px,6vw,50px)] lg:px-[clamp(10px,6vw,71px)] justify-between
    border border-[rgba(255,255,255,0.25)]"
      >
        <Link href={`/${locale}/`} className="flex-shrink-0">
          <Image
            src="/assets/images/Logo Antares.svg"
            alt="Antares Logo"
            width={150}
            height={50}
          />
        </Link>

        {/* Menú Responsive */}
        <div className="lg:hidden ml-auto" onClick={toggleMenu}>
          <FaBars className="w-6 h-6 text-white cursor-pointer" />
        </div>

        {isMenuOpen && (
          <div
            ref={menuRef}
            className="absolute top-full left-0 w-full bg-[#263B9E] rounded-[24px] shadow-md flex flex-col items-center py-4 mt-2 lg:hidden"
          >
            <Link
              href={`/${locale}/`}
              className="text-white hover:text-gray-300"
              onClick={(e) => {
                e.preventDefault();

                const targetElement = document.getElementById("our-services");
                if (targetElement) {
                  targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }

                closeMenu();
              }}
            >
              Servicios
            </Link>

            <Link
            href={`/${locale}/portafolio`}
            className="text-white hover:text-gray-300"
            prefetch={true}
            onClick={(e) => {
              const prefetchPortfolio = () => import('@/app/[locale]/(content)/portafolio/page');
              const prefetchClient = () => import('@/components/portafolioComponenets/PortfolioClientVideosSection');
              Promise.all([prefetchPortfolio(), prefetchClient()]);
            }}
            onMouseEnter={() => {
              const prefetchPortfolio = () => import('@/app/[locale]/(content)/portafolio/page');
              const prefetchClient = () => import('@/components/portafolioComponenets/PortfolioClientVideosSection');
              Promise.all([prefetchPortfolio(), prefetchClient()]);
            }}
          >
            Portafolio
          </Link>

            <div
              className="w-full flex flex-col items-center"
              ref={industriesRef}
            >
              <button
                onClick={toggleIndustries}
                className="text-white hover:text-gray-300 flex items-center gap-1 py-2"
              >
                Industrias <FaChevronDown className="w-4 h-4" />
              </button>
              {isIndustriesOpen && (
                <div className="w-full flex flex-col items-center bg-[#1A2B6D] rounded-lg shadow-lg mt-2">
                  <Link
                    href={`/${locale}/real-estate`}
                    className="text-white hover:bg-gray-700 w-full text-center py-2"
                    onClick={closeMenu}
                  >
                    Inmobiliaria
                  </Link>
                  <Link
                    href={`/${locale}/marketing`}
                    className="text-white hover:bg-gray-700 w-full text-center py-2"
                    onClick={closeMenu}
                  >
                    Marketing
                  </Link>
                </div>
              )}
            </div>

            <Link
              href={`/${locale}/about`}
              className="text-white hover:text-gray-300 py-2"
              onClick={closeMenu}
            >
              Nosotros
            </Link>
            <Link
              href={`/${locale}/blog`}
              className="text-white hover:text-gray-300 py-2"
              onClick={closeMenu}
            >
              Blog
            </Link>
            <Link
              href={`/${locale}/form-contact`}
              className="text-white hover:text-gray-300 py-2"
              onClick={closeMenu}
            >
              Contacto
            </Link>
          </div>
        )}

        {/* Menú Desktop */}
        <div className="hidden lg:flex items-center gap-x-6">
          <Link
            href={`/${locale}/`}
            className="text-white hover:text-gray-300"
            onClick={(e) => {
              e.preventDefault();

              const targetElement = document.getElementById("our-services");
              if (targetElement) {
                targetElement.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
          >
            Servicios
          </Link>

          <Link
            href={`/${locale}/portafolio`}
            className="text-white hover:text-gray-300"
            prefetch={true}
          >
            Portafolio
          </Link>

          <div className="relative" ref={industriesRef}>
            <button
              onClick={toggleIndustries}
              className="text-white hover:text-gray-300 flex items-center gap-1"
            >
              Industrias <FaChevronDown className="w-4 h-4" />
            </button>
            {isIndustriesOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg overflow-hidden">
                <Link
                  href={`/${locale}/real-estate`}
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Inmobiliaria
                </Link>
                <Link
                  href={`/${locale}/marketing`}
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Marketing
                </Link>
              </div>
            )}
          </div>

          <Link
            href={`/${locale}/about`}
            className="text-white hover:text-gray-300"
          >
            Nosotros
          </Link>
          <Link
            href={`/${locale}/blog`}
            className="text-white hover:text-gray-300"
          >
            Blog
          </Link>
          <Link
            href={`/${locale}/form-contact`}
            className="text-white hover:text-gray-300"
          >
            Contacto
          </Link>

          <div className="flex-shrink-0">
            <Image
              src="/assets/images/EEUU.png"
              alt="EEUU Flag"
              width={24}
              height={16}
              className="cursor-pointer"
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
