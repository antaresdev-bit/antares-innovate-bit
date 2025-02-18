import React from "react";
import { FaInstagram, FaTiktok, FaYoutube, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full  py-10 text-white flex flex-col items-center sm:px-2.5">
      <div className="w-full max-w-[1298px] flex flex-col md:flex-row justify-between px-6 ">
        {/* Sección Izquierda - Logo y Contacto */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 w-full md:w-1/3">
          <img
            src="/assets/images/Logo Antares PNG.png"
            alt="Logo Antares"
            className="w-[200px] md:w-[250px] object-contain"
          />
          <p>
            Contacto:{" "}
            <a
              href="mailto:contacto@antaresfinancetrade.com"
              className="text-[#ddd] hover:text-white"
            >
              contacto@antaresfinancetrade.com
            </a>
          </p>
          <p>Ubicación: 3203 Meridius Pl off 304 Kissimmee Fl 34747</p>
          <div className="flex items-center space-x-2">
            <img
              src="/assets/images/whatsapp 1.png"
              alt="WhatsApp"
              className="w-8"
            />
            <p>Llámanos: +1 689 331 2690</p>
          </div>
        </div>

        {/* Sección Media - Enlaces */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm mt-8 md:mt-0 w-full md:w-2/3 ml-[100px]">
          {/* Portafolio Section - Hidden on small screens */}
          <div className="hidden sm:block">
            <h3 className="font-semibold text-white mb-2">Portafolio</h3>
            <ul className="space-y-2 text-[#ccc]">
              <ul className="hover:text-white">
                <a href="#">Sobre Nosotros</a>
              </ul>
              <ul className="hover:text-white">
                <a href="#">Blog</a>
              </ul>
              <ul className="hover:text-white">
                <a href="#">Contacto</a>
              </ul>
            </ul>
          </div>

          {/* Servicios Section - Hidden on small screens */}
          <div className="hidden sm:block">
            <h3 className="font-semibold text-white mb-2">Servicios</h3>
            <ul className="space-y-2 text-[#ccc]">
              <ul className="hover:text-white">
                <a href="#">Creatividad</a>
              </ul>
              <ul className="hover:text-white">
                <a href="#">Tecnología</a>
              </ul>
              <ul className="hover:text-white">
                <a href="#">Consultoría</a>
              </ul>
            </ul>
          </div>

          {/* Industrias Section - Hidden on small screens */}
          <div className="hidden sm:block">
            <h3 className="font-semibold text-white mb-2">Industrias</h3>
            <ul className="space-y-2 text-[#ccc]">
              <ul className="hover:text-white">
                <a href="#">Inmobiliaria</a>
              </ul>
              <ul className="hover:text-white">
                <a href="#">Marketing</a>
              </ul>
            </ul>
          </div>

          {/* Sección Legal - Always visible */}
          <div >
            <div>
              <h3 className="font-semibold text-white mb-2 hidden sm:block">Legal</h3>
              <ul className="space-y-2 text-[#ccc]">
                <ul className="hover:text-white ">
                  <a href="#">Legal Notice</a>
                </ul>
                <ul className="hover:text-white">
                  <a href="#">Data Policy</a>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Iconos de redes sociales */}
      <div className="flex justify-center space-x-6 mt-8">
        <FaInstagram className="w-6 h-6 cursor-pointer hover:text-gray-300" />
        <FaTiktok className="w-6 h-6 cursor-pointer hover:text-gray-300" />
        <FaYoutube className="w-6 h-6 cursor-pointer hover:text-gray-300" />
        <FaFacebook className="w-6 h-6 cursor-pointer hover:text-gray-300" />
      </div>

      {/* Texto de derechos de autor */}
      <div className="text-center text-xs text-[#ccc] mt-6">
        antaresglobaltechnology.com © Al navegar por este sitio web acepta
        nuestra{" "}
        <a href="#" className="underline hover:text-white">
          Política de Privacidad y Cookies
        </a>
        .
      </div>
    </footer>
  );
}

export default Footer;
