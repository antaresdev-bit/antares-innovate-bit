// import Link from "next/link";
// import { useLocale} from "next-intl";

// const Nav = () => {
//   const locale = useLocale();
//   return (
//     <nav className="flex items-center justify-center gap-4">
//       <Link className="mx-4" href={`/${locale}/services`}>
//         Servicios
//       </Link>
//       <Link className="mx-4" href={`/${locale}/portfolio`}>
//         Portafolio
//       </Link>
//       <Link className="mx-4" href={`/${locale}/industries`}>
//         Industrias
//       </Link>
//       <Link className="mx-4" href={`/${locale}/about`}>
//         Sobre Nosotros
//       </Link>
//       <Link className="mx-4" href={`/${locale}/blog`}>
//         Blog
//       </Link>
//       <Link className="mx-4" href={`/${locale}/contact`}>
//         Contacto
//       </Link>
//     </nav>
//   );
// };

// export default Nav;

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
      <nav className="w-full lg:w-[1298px] h-[76px] flex items-center justify-between lg:justify-between bg-[#0E051CA6] rounded-[24px] shadow-md px-8 relative">
        <Image
          src="/assets/images/Logo Antares PNG.png"
          alt="Antares Logo"
          width={150}
          height={50}
        />

        <div className="lg:hidden" onClick={toggleMenu}>
          <FaBars className="w-6 h-6 text-white cursor-pointer" />
        </div>

        <div
          className={`lg:flex lg:items-center lg:gap-8 ${
            isMenuOpen
              ? "absolute top-full left-0 w-full bg-[#263B9E80] rounded-[24px] shadow-md flex flex-col items-center py-4 mt-2"
              : "hidden lg:flex"
          }`}
        >
          <Link
            href={`/${locale}/services`}
            className="text-white hover:text-gray-300 py-2 lg:py-0"
          >
            Services
          </Link>
          <Link
            href={`/${locale}/portfolio`}
            className="text-white hover:text-gray-300 py-2 lg:py-0"
          >
            Portafolio
          </Link>
          <Link
            href={`/${locale}/industries`}
            className="text-white hover:text-gray-300 py-2 lg:py-0"
          >
            Industries
          </Link>
          <Link
            href={`/${locale}/about`}
            className="text-white hover:text-gray-300 py-2 lg:py-0"
          >
            Sobre Nosotros
          </Link>
          <Link
            href={`/${locale}/blog`}
            className="text-white hover:text-gray-300 py-2 lg:py-0"
          >
            Blog
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="text-white hover:text-gray-300 py-2 lg:py-0"
          >
            Contacto
          </Link>

      
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
