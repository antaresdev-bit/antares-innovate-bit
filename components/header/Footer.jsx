import React from "react";
import { FaInstagram, FaTiktok, FaYoutube, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div className=" mx-[21px] sm:mx-[21px] md:mx-[49px] lg:mx-[71px]">
      <footer className=" w-full  py-2 text-white flex flex-col items-center sm:px-2.5 mt-[114px] sm:mt-[114px] md:mt-[150px] lg:mt-[150px]">
        <div className=" w-full max-w-[1298px] flex flex-col md:flex-row justify-between px-6 ">
          {/* Sección Izquierda - Logo y Contacto */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 w-full md:w-1/3 ">
            <img
              src="/assets/images/Logo Antares PNG.png"
              alt="Logo Antares"
              className="w-[200px] md:w-[250px] object-contain mb-[90px] sm:mb-[90px] md:mb-[49px] lg:mb-[50px]"
            />
            <div className="w-[full] max-w-[450px] px-4 sm:px-0   ">
              <p>
                Contacto:{" "}
                <a
                  href="mailto:contacto@antaresfinancetrade.com"
                  className="text-[#ddd] hover:text-white"
                >
                  contacto@antaresfinancetrade.com
                </a>
              </p>
              <p>3203 Meridius Pl off 304 Kissimmee Fl 34747</p>
            </div>

            <div className="flex items-center   pt-[20px] ">
              <img
                src="/assets/images/whatsapp 1.png"
                alt="WhatsApp"
                className="w-8"
              />
              <p>Llámanos: +1 689 331 2690</p>
            </div>
          </div>

          {/* Sección Media - Enlaces */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm mt-8 md:mt-0 w-full md:w-2/3 ml-[100px]"
            style={{ fontFamily: "UniteaSans", fontSize: "18px" }}
          >
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
            <div className=" hidden sm:block">
              <div>
                <h3 className="font-semibold text-white mb-2 hidden sm:block">
                  Legal
                </h3>
                <ul className="space-y-2 text-[#ccc] ">
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

        <div
          className="sm:block md:hidden lg:hidden mb-[30px]"
          style={{ fontFamily: "UniteaSans", fontSize: "17px" }}
        >
          <p>Legal Notice</p>
          <p>Data Policy</p>
        </div>

        <div className="flex justify-center space-x-6 mt-8">
          <div className="w-12 h-12 flex items-center justify-center rounded-full border-[0.5px] border-white">
            <FaInstagram className="w-6 h-6 cursor-pointer hover:text-gray-300" />
          </div>
          <div className="w-12 h-12 flex items-center justify-center rounded-full border-[0.5px] border-white">
            <FaTiktok className="w-6 h-6 cursor-pointer hover:text-gray-300" />
          </div>
          <div className="w-12 h-12 flex items-center justify-center rounded-full border-[0.5px] border-white">
            <FaYoutube className="w-6 h-6 cursor-pointer hover:text-gray-300" />
          </div>
          <div className="w-12 h-12 flex items-center justify-center rounded-full border-[0.5px] border-white">
            <FaFacebook className="w-6 h-6 cursor-pointer hover:text-gray-300" />
          </div>
        </div>

        <div
          className="text-center text-xs text-[#ccc] mt-6 border-t w-full pt-[40px] sm:pt-[40px] md:pt-[20px] lg:pt-[20px] "
          style={{ fontFamily: "UniteaSans", fontSize: "17px" }}
        >
          antaresglobaltechnology.com © Al navegar por este sitio web acepta
          nuestra{" "}
          <a href="#" className="underline hover:text-white">
            Política de Privacidad y Cookies
          </a>
          .
        </div>
      </footer>
    </div>
  );
}

export default Footer;
