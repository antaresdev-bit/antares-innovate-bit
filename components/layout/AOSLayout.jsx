"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSLayout({ children }) {
  useEffect(() => {
    // Inicializar AOS
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false, // Las animaciones se repetirán cada vez que el elemento entre en el viewport
      mirror: false, // No reflejar las animaciones cuando se desplaza hacia arriba
      // Puedes agregar más opciones según tus necesidades
    });
  }, []);

  return <>{children}</>;
}
