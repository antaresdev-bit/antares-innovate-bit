import React, { useState } from "react";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { useLocale } from "next-intl";
import Link from "next/link";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const locale = useLocale();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

        <div className="lg:hidden ml-auto" onClick={toggleMenu}>
          <FaBars className="w-6 h-6 text-white cursor-pointer" />
        </div>

        <div
          className={`flex-1 lg:flex lg:justify-center lg:items-center lg:gap-12 ${
            isMenuOpen
              ? "absolute top-full left-0 w-full bg-[#263B9E80] rounded-[24px] shadow-md flex flex-col items-center py-4 mt-2"
              : "hidden lg:flex"
          }`}
        >
          <Link
            href={`/${locale}/services`}
            className="text-white hover:text-gray-300"
          >
            Servicios
          </Link>
          <Link
            href={`/${locale}/webPage`}
            className="text-white hover:text-gray-300"
          >
            Portafolio
          </Link>
          <Link
            href={`/${locale}/industries`}
            className="text-white hover:text-gray-300"
          >
            Industrias
          </Link>
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
