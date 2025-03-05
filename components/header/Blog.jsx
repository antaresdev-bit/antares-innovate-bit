/* este es el codigo para remplazar el modal */

// import React, { useState, useEffect } from "react";

// const blogItems = [
//   {
//     category: "Tecnología",
//     title: "Descubriendo un mundo interactivo",
//     image: "/assets/images/blog/tecnologia.png",
//   },
//   {
//     category: "Marketing",
//     title: "Tendencias en Marketing en 2025",
//     image: "/assets/images/blog/marketing.png",
//   },
//   {
//     category: "Noticias",
//     title: "Panorama Global en IA",
//     image: "/assets/images/blog/noticias.png",
//   },
// ];

// function Blog() {
//   const [isSmallScreen, setIsSmallScreen] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsSmallScreen(window.innerWidth < 640);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <>
//       <div className="mb-[40px]  h-[80px] ml-[21px] sm:ml-[21px] md:ml-[49px] lg:ml-[72px]  mt-[150px]">
//         <h1
//           className=" text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4D86FF] to-[#FFFFFF] leading-[65px] max-w-[400px] "
//           style={{ fontFamily: "HandelGothic" }}
//         >
//           Blog
//         </h1>
//       </div>

//       <div className=" mx-[7px] sm:mx-[21px] md:mx-[49px] lg:mx-[71px]">
//         <div className="w-full max-w-[1299px] mx-auto sm:bg-white bg-transparent rounded-[48px] p-[15px] sm:p-[15px] md:p-[22px] lg:p-[32px] mt-[px]">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-[25px] sm:gap-[25px] md:gap-[15px] lg:gap-[29px]">
//             {blogItems.map((item, index) => {
//               const isMarketingOrNews =
//                 (item.category === "Marketing" ||
//                   item.category === "Noticias") &&
//                 isSmallScreen;

//               return (
//                 <div
//                   key={index}
//                   className={`h-[429px] ${
//                     isMarketingOrNews
//                       ? "bg-[#0E051C] border-[0.5px] border-white text-white"
//                       : "bg-[#ECECEC] text-black"
//                   } rounded-[24px] p-[22px] flex flex-col`}
//                 >
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-full h-[225px] sm:h-[225px] rounded-[12px] object-cover"
//                   />
//                   <p
//                     className="text-gray-600 mt-4"
//                     style={{
//                       fontSize: "18px",
//                       color: isMarketingOrNews ? "white" : "black",
//                       marginBottom: "20px",
//                     }}
//                   >
//                     {item.category}
//                   </p>
//                   <h3
//                     className="text-gray-600 font-bold"
//                     style={{
//                       fontSize: "20px",
//                       fontFamily: "HandelGothic",
//                       color: isMarketingOrNews ? "white" : "black",
//                     }}
//                   >
//                     {item.title}
//                   </h3>
//                   <div className="mt-auto flex justify-start">
//                     <img
//                       src={
//                         isSmallScreen && item.category !== "Tecnología"
//                           ? "/assets/images/flecha blanca.png"
//                           : "/assets/images/flecha-negro.png"
//                       }
//                       alt="Arrow"
//                       className="w-[48.33px] h-[48px] rounded-full border-2 border-black"
//                     />
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//       {/* Footer de Blog */}
//       <div className="w-full py-16 flex justify-center rounded-b-[48px] relative overflow-hidden">
//         <div className="border-l text-center text-white px-6 mt-[0px] w-full max-w-[933px] relative z-10 flex flex-col justify-center h-[200px] mb-[15px] sm:mb-[100px] md:mb-[40px] lg:mb-[40px]">
//           <p
//             className="leading-[35px] sm:leading-[31px] md:leading-[40px] lg:leading-[50px] text-[32px] sm:text-[32px] md:text-[40px] lg:text-[45px] font-bold max-w-[933px] mx-auto text-left bg-gradient-to-r from-[#4D86FF] to-[#FFFFFF] text-transparent bg-clip-text leading-tight md:leading-[43px]"
//             style={{ fontFamily: "HandelGothic" }}
//           >
//             Suscríbete a nuestro boletín para estar al tanto de las últimas
//             novedades.
//           </p>
//           <div className="flex justify-center mt-[20px]">
//             <input
//               type="email"
//               placeholder="Tu dirección de correo electrónico..."
//               className="w-full max-w-[933px] h-[48px] rounded-[32px] px-4 text-gray-700"
//             />
//           </div>
//         </div>
//         {/* Degradado condicional */}
//         <div
//           className="absolute inset-0 w-full h-full"
//           style={{
//             background: isSmallScreen
//               ? "radial-gradient(ellipse at 20% 80%, #22379A80 30%, #0B0C2840 70%)"
//               : "radial-gradient(ellipse at 50% 100%, #22379A80 50%, #0B0C2840 90%)",
//           }}
//         ></div>
//       </div>
//     </>
//   );
// }

// export default Blog;

/* este es el codigo del modal es temporal para la entrega del landin "se va a borrar" */

import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa"; // Importa el icono

const blogItems = [
  {
    category: "Tecnología",
    title: "Descubriendo un mundo interactivo",
    image: "/assets/images/blog/tecnologia.png",
    titleModal: "Tendencias en Tecnología en 2025",
  },
  {
    category: "Marketing",
    title: "Tendencias en Marketing en 2025",
    image: "/assets/images/blog/marketing.png",
    titleModal: "Estrategias de Marketing Digital Más Efectivas en 2025",
  },
  {
    category: "Noticias",
    title: "Panorama Global en IA",
    image: "/assets/images/blog/noticias.png",
    titleModal: "Panorama Global en IA en 2025",
  },
];

function Modal({ isOpen, onClose, category, titleModal }) {
  if (!isOpen) return null;

  const content = {
    Tecnología: `La inteligencia artificial (IA) no solo está transformando la manera en que las empresas operan, sino que también está redefiniendo los límites de la innovación en diversos sectores. Desde la automatización industrial hasta la toma de decisiones estratégicas, 2025 marca un punto de inflexión donde la IA se consolida como el motor clave del crecimiento empresarial. A continuación, exploramos las innovaciones más impactantes que están revolucionando la industria.

    El lanzamiento de GPT-4o ha marcado un antes y un después en la evolución de los modelos de lenguaje. Gracias a mejoras significativas en procesamiento de lenguaje natural, capacidades multimodales y un aprendizaje más rápido, GPT-4o está transformando sectores como la atención al cliente con chatbots y asistentes virtuales que responden con un nivel de personalización sin precedentes, la creación de contenido con redacción automatizada para blogs, informes y comunicados de prensa, y la automatización de procesos empresariales mediante IA generativa que reduce el tiempo en tareas repetitivas. Las fábricas inteligentes han dejado de ser una promesa y se han convertido en una realidad. Con la integración de IA y el Internet de las Cosas, las empresas están optimizando la producción y la logística a través de la predicción de fallos en maquinaria mediante el mantenimiento predictivo, la gestión autónoma de inventarios con algoritmos de optimización en tiempo real y la automatización de la cadena de suministro, reduciendo tiempos de inactividad y maximizando la rentabilidad. Empresas como Tesla y Siemens ya implementan estos avances para mejorar la eficiencia operativa y reducir costos.

    Los modelos de IA no solo recopilan datos, sino que también generan predicciones precisas que ayudan a las empresas a tomar decisiones estratégicas. Entre los principales beneficios destacan el análisis de datos en tiempo real para identificar oportunidades de mercado, la personalización de la experiencia del cliente, aumentando la conversión en e-commerce y servicios, y la automatización en la gestión financiera con sistemas que optimizan el flujo de caja y reducen riesgos. A pesar de los avances, la implementación de la IA también enfrenta desafíos como las regulaciones y la ética, donde la transparencia en los algoritmos y el cumplimiento normativo seguirán siendo temas clave, la ciberseguridad, ya que con el aumento de la automatización proteger los sistemas de IA de ataques será prioritario, y la adopción empresarial, ya que muchas pymes aún enfrentan barreras tecnológicas y de costo para integrar IA en sus procesos. Sin embargo, las oportunidades superan los desafíos. Empresas que adopten IA estratégicamente lograrán ventajas competitivas significativas, impulsando la innovación y la eficiencia operativa.

    La inteligencia artificial ya no es una tecnología del futuro, sino una realidad que está redefiniendo industrias en tiempo real. Con avances como GPT-4o, la automatización industrial y el análisis predictivo, 2025 será un año crucial para la consolidación de la IA en la estrategia empresarial. Adaptarse a estos cambios no solo será una ventaja, sino una necesidad para seguir compitiendo en un mundo cada vez más digitalizado.
    ¿Tu empresa está lista para el futuro de la IA? Contáctanos en Antares para conocer cómo integrar estas innovaciones en tu negocio.`,
    Marketing: `Claves para Empresas en un Mundo Digitalizado: \n\n El marketing digital está evolucionando a una velocidad sin precedentes en 2025. Con el auge de la inteligencia artificial, la hiperpersonalización y el marketing basado en datos, las empresas están adaptando sus estrategias para mantenerse competitivas en un entorno digital en constante cambio. Este año, las tendencias más relevantes están transformando la manera en que las marcas interactúan con sus audiencias.\n\n La inteligencia artificial se ha convertido en el motor principal de la automatización del marketing. Plataformas avanzadas permiten a las empresas segmentar audiencias con IA predictiva, optimizando las campañas publicitarias en tiempo real. Además, herramientas como ChatGPT-4o están revolucionando la generación de contenido, creando textos persuasivos y altamente optimizados para SEO. También es posible personalizar la experiencia del usuario, entregando mensajes adaptados a su comportamiento en cada fase del funnel de conversión. Empresas como Amazon y Netflix han demostrado el poder de la IA en la personalización, logrando aumentar la retención de clientes y maximizar su Lifetime Value.\n\n El SEO ha cambiado radicalmente con la búsqueda por voz y la indexación semántica de Google. Para dominar el posicionamiento en 2025, es clave optimizar para búsquedas conversacionales con palabras clave long-tail, utilizar datos estructurados y schema markup para destacar en los featured snippets y crear contenido adaptado a Google Discover, mejorando la visibilidad orgánica. Herramientas como Clearscope y SurferSEO facilitan la optimización semántica, mientras que AnswerThePublic permite investigar preguntas frecuentes en la búsqueda por voz.\n\n Las redes sociales han evolucionado de ser simples canales de branding a convertirse en verdaderos marketplaces. El social commerce está en auge con estrategias como el live shopping en TikTok e Instagram, que combina video en vivo con compras en un solo clic. Los anuncios impulsados por inteligencia artificial en plataformas como Meta y LinkedIn ajustan creatividades según la interacción del usuario, mientras que el contenido generado por usuarios y la colaboración con microinfluencers fortalecen la autenticidad de las marcas. Empresas como Shein y Sephora han sabido capitalizar esta tendencia, generando millones en ventas directas desde redes sociales.\n\n Con el fin de las cookies de terceros, las marcas están recurriendo a la publicidad programática basada en datos propios. Los modelos de atribución avanzada permiten optimizar cada punto de contacto en el customer journey, mientras que plataformas como Google Privacy Sandbox ayudan a segmentar audiencias sin comprometer la privacidad. Para afrontar esta nueva realidad, es recomendable implementar plataformas de gestión de datos de clientes como Segment o BlueConic, así como aprovechar Zero-Party Data mediante encuestas y experiencias interactivas para recopilar información directamente de los usuarios.\n\n El video marketing sigue dominando la generación de engagement, con nuevas tendencias como YouTube Shorts y TikTok Ads, diseñadas para captar la atención de las audiencias rápidamente. Los videos interactivos y shoppable videos permiten realizar compras directamente desde el contenido, mientras que el storytelling con inteligencia artificial está revolucionando la forma en que las marcas comunican sus mensajes. Empresas como Nike han implementado estrategias de storytelling inmersivo con IA, logrando un aumento del 30% en la conversión.\n\n Las tecnologías emergentes como Web3, el metaverso y los NFTs están transformando el marketing experiencial. Algunas marcas están utilizando NFTs como programas de lealtad, ofreciendo experiencias exclusivas a sus clientes. La publicidad inmersiva en el metaverso permite crear tiendas virtuales y eventos interactivos, mientras que el uso de criptomonedas y blockchain aporta transparencia y confianza a las transacciones digitales. Empresas como Gucci y Adidas han incursionado en este espacio con éxito, lanzando colecciones de NFTs que han consolidado comunidades digitales exclusivas.
En 2025, el marketing digital no es solo una opción, sino una necesidad para cualquier empresa que quiera mantenerse relevante. La clave está en adoptar inteligencia artificial, optimizar la experiencia del cliente y aprovechar las nuevas tendencias tecnológicas. Aquellas marcas que innoven y se adapten rápidamente no solo sobrevivirán, sino que dominarán el mercado digital. ¿Está lista tu empresa para el marketing del futuro? En Antares, te ayudamos a implementar estrategias digitales de vanguardia. Contáctanos hoy.`,
    Noticias: `La digitalización y la automatización han redefinido la manera en que operan las empresas y la forma en que trabajamos. Con la aceleración de la inteligencia artificial, el aprendizaje automático y la hiperconectividad, el futuro del mundo digital apunta hacia una transformación sin precedentes en todos los sectores. En este artículo, analizamos hacia dónde se dirige el mundo digital con la automatización y el papel crucial que jugarán las tecnologías emergentes en el futuro del trabajo y los negocios.\n\n La inteligencia artificial y el aprendizaje automático están revolucionando los procesos empresariales, permitiendo la automatización de tareas repetitivas, lo que reduce costos y errores humanos. También facilitan la toma de decisiones basada en datos, optimizando estrategias en tiempo real, además de permitir la personalización masiva y ofreciendo experiencias únicas a los clientes en diversos sectores, desde el e-commerce hasta la salud. Empresas como Tesla y OpenAI lideran la adopción de inteligencia artificial en sectores como la conducción autónoma y la generación de contenido automatizado\n\n La automatización robótica de procesos permite a las empresas mejorar la eficiencia operativa mediante la delegación de procesos repetitivos a robots de software. Sus principales aplicaciones incluyen la gestión de datos y reportes financieros sin intervención humana, la atención al cliente automatizada, reduciendo tiempos de espera, y la automatización de procesos logísticos que optimizan la cadena de suministro. Empresas como UiPath y Automation Anywhere están revolucionando la industria con soluciones avanzadas de automatización robótica de procesos.
    La descentralización impulsada por blockchain y Web3 está redefiniendo la seguridad digital y la transparencia en los negocios. Algunas de sus aplicaciones clave incluyen contratos inteligentes que eliminan intermediarios en transacciones comerciales, identidad digital descentralizada que mejora la privacidad de los usuarios y la tokenización de activos físicos y digitales, facilitando nuevas formas de inversión. Ethereum y Solana han demostrado el potencial de Web3 en aplicaciones financieras y empresariales.\n\n A medida que las empresas digitalizan sus operaciones, el mercado laboral enfrenta cambios significativos. Las tendencias principales incluyen la capacitación en nuevas tecnologías para adaptarse al entorno digital, el trabajo remoto y modelos híbridos impulsados por herramientas de colaboración basadas en inteligencia artificial, así como la implementación de ética y regulaciones para garantizar que la automatización beneficie a todos. Según estudios de McKinsey, hasta el 50% de los trabajos actuales podrían ser automatizados en la próxima década, lo que generará nuevos roles especializados en tecnología.\n\n El metaverso y la realidad extendida están cambiando la manera en que interactuamos con el mundo digital. Entre sus aplicaciones más innovadoras se encuentran las oficinas virtuales en el metaverso, que redefinen el concepto de trabajo remoto, las experiencias inmersivas de compras y entretenimiento con entornos 3D interactivos, así como la capacitación y educación en realidad virtual, mejorando el aprendizaje práctico. Empresas como Meta y Microsoft están desarrollando plataformas para integrar la realidad extendida en el trabajo y los negocios.\n\n El futuro del mundo digital y la automatización traerá oportunidades y desafíos sin precedentes. Empresas y profesionales deben adaptarse a estas innovaciones, priorizando la adopción de inteligencia artificial, automatización robótica de procesos, blockchain y el metaverso para seguir siendo competitivos en un mercado en constante evolución. ¿Tu empresa está lista para la transformación digital? En Antares, te ayudamos a implementar soluciones de automatización para potenciar tu negocio. Contáctanos hoy. 🚀`,
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-[24px] shadow-lg w-[1000px] h-[420px] overflow-auto relative">
        <h2
          className="text-2xl font-bold text-black mt-[30px]"
          style={{ fontFamily: "HandelGothic" }}
        >
          {titleModal}
        </h2>

        {content[category].split("\n\n").map((paragraph, index) => (
          <p
            key={index}
            className="text-black mt-4"
            style={{ fontFamily: "UniteaSans" }}
          >
            {paragraph}
          </p>
        ))}

        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-[#1C5DE9] text-white p-2 rounded-full"
        >
          <FaTimes size={24} />
        </button>
      </div>
    </div>
  );
}

function Blog() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTitleModal, setSelectedTitleModal] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openModal = (category, titleModal) => {
    setSelectedCategory(category);
    setSelectedTitleModal(titleModal);
    setModalOpen(true);
  };

  return (
    <>
      <div className="mb-[40px] h-[80px] ml-[21px] sm:ml-[21px] md:ml-[49px] lg:ml-[72px] mt-[150px]">
        <div className="max-w-[1500px] mx-auto">
          <h1
            className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4D86FF] to-[#FFFFFF] leading-[65px] max-w-[400px]"
            style={{ fontFamily: "HandelGothic" }}
          >
            Blog
          </h1>
        </div>
      </div>

      <div className="mx-[7px] sm:mx-[21px] md:mx-[49px] lg:mx-[71px]">
        <div className="w-full max-w-[1299px] mx-auto sm:bg-white bg-transparent rounded-[48px] p-[15px] sm:p-[15px] md:p-[22px] lg:p-[32px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[25px]">
            {blogItems.map((item, index) => (
              <div
                key={index}
                className="h-[429px] bg-[#ECECEC] text-black rounded-[24px] p-[22px] flex flex-col"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[225px] rounded-[12px] object-cover"
                />
                <p className="text-gray-600 mt-4 text-[18px] mb-[20px]">
                  {item.category}
                </p>
                <h3
                  className="text-gray-600 font-bold text-[20px]"
                  style={{ fontFamily: "HandelGothic" }}
                >
                  {item.title}
                </h3>
                <div className="mt-auto flex justify-start">
                  <button
                    onClick={() => openModal(item.category, item.titleModal)}
                  >
                    <img
                      src="/assets/images/flecha-negro.png"
                      alt="Arrow"
                      className="w-[48px] h-[48px] rounded-full border-2 border-black"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full py-16 flex justify-center rounded-b-[48px] relative overflow-hidden">
        <div className="text-center text-white px-6 mt-[0px] w-full max-w-[933px] relative z-10 flex flex-col justify-center h-[200px] mb-[15px] sm:mb-[100px] md:mb-[40px] lg:mb-[40px] sm:border-l-0 md:border-l">
          <p
            className="leading-[35px] sm:leading-[31px] md:leading-[40px] lg:leading-[50px] text-[32px] sm:text-[32px] md:text-[40px] lg:text-[45px] font-bold max-w-[933px] mx-auto text-left bg-gradient-to-r from-[#4D86FF] to-[#FFFFFF] text-transparent bg-clip-text leading-tight md:leading-[43px]"
            style={{ fontFamily: "HandelGothic" }}
          >
            Suscríbete a nuestro boletín para estar al tanto de las últimas
            novedades.
          </p>
          <div className="flex justify-center mt-[20px]">
            <input
              type="email"
              placeholder="Tu dirección de correo electrónico..."
              className="w-full max-w-[933px] h-[48px] rounded-[32px] px-4 text-gray-700"
            />
          </div>
        </div>
        {/* Degradado condicional */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background: isSmallScreen
              ? "radial-gradient(ellipse at 20% 80%, #22379A80 30%, #0B0C2840 70%)"
              : "radial-gradient(ellipse at 50% 100%, #22379A80 50%, #0B0C2840 90%)",
          }}
        ></div>
      </div>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        category={selectedCategory}
        titleModal={selectedTitleModal}
      />
    </>
  );
}

export default Blog;

/* 

<div className="max-w-[1500px] mx-auto">


*/
