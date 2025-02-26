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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleIndustries = () => {
    setIsIndustriesOpen(!isIndustriesOpen);
  };

  // Cerrar dropdown y menú si se hace clic fuera
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
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-center w-full mt-[50px]">
      <nav className="w-full lg:w-[1298px] h-[76px] flex items-center bg-[#0E051CA6] rounded-[24px] shadow-md px-8 relative">
        {/* Logo */}
        <Link href={`/${locale}/`} className="flex-shrink-0">
          <Image
            src="/assets/images/Logo Antares PNG.png"
            alt="Antares Logo"
            width={150}
            height={50}
          />
        </Link>

        {/* Menú hamburguesa */}
        <div className="lg:hidden ml-auto" onClick={toggleMenu}>
          <FaBars className="w-6 h-6 text-white cursor-pointer" />
        </div>

        {/* Menú Responsive */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="absolute top-full left-0 w-full bg-[#263B9E] rounded-[24px] shadow-md flex flex-col items-center py-4 mt-2 lg:hidden"
          >
            <Link
              href={`/${locale}/services`}
              className="text-white hover:text-gray-300 py-2"
            >
              Servicios
            </Link>
            <Link
              href={`/${locale}/upardigital`}
              className="text-white hover:text-gray-300 py-2"
            >
              Portafolio
            </Link>

            {/* Dropdown Industrias en Responsive */}
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
                  >
                    Inmobiliaria
                  </Link>
                  <Link
                    href={`/${locale}/industries/marketing`}
                    className="text-white hover:bg-gray-700 w-full text-center py-2"
                  >
                    Marketing
                  </Link>
                </div>
              )}
            </div>

            <Link
              href={`/${locale}/about`}
              className="text-white hover:text-gray-300 py-2"
            >
              Sobre Nosotros
            </Link>
            <Link
              href={`/${locale}/blog`}
              className="text-white hover:text-gray-300 py-2"
            >
              Blog
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="text-white hover:text-gray-300 py-2"
            >
              Contacto
            </Link>
          </div>
        )}

        {/* Menú Desktop */}
        <div
          className={`flex-1 lg:flex lg:justify-center lg:items-center lg:gap-12 hidden`}
        >
          <Link
            href={`/${locale}/services`}
            className="text-white hover:text-gray-300"
          >
            Servicios
          </Link>
          <Link
            href={`/${locale}/portafolio`}
            className="text-white hover:text-gray-300"
          >
            Portafolio
          </Link>

          {/* Dropdown Industrias en Desktop */}
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
            Sobre Nosotros
          </Link>
          <Link
            href={`/${locale}/blog`}
            className="text-white hover:text-gray-300"
          >
            Blog
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="text-white hover:text-gray-300"
          >
            Contacto
          </Link>
        </div>

        <div className="flex-shrink-0">
          <Image
            src="/assets/images/EEUU.png"
            alt="EEUU Flag"
            width={24}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </nav>
    </div>
  );
}

export default Nav;
