import React, { useState, useEffect } from "react";

const blogItems = [
  {
    category: "Tecnología",
    title: "Descubriendo un mundo interactivo",
    image: "/assets/images/blog/tecnologia.png",
  },
  {
    category: "Marketing",
    title: "Tendencias en Marketing en 2025",
    image: "/assets/images/blog/marketing.png",
  },
  {
    category: "Noticias",
    title: "Panorama Global en IA",
    image: "/assets/images/blog/noticias.png",
  },
];

function Blog() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    setIsSmallScreen(window.innerWidth < 640);

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="w-full max-w-[1299px] mx-auto sm:bg-white bg-transparent rounded-[48px] p-8 mt-[100px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[29px]">
          {blogItems.map((item, index) => (
            <div
              key={index}
              className="h-[429px] bg-[#ECECEC] rounded-[24px] p-4 flex flex-col"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[225px] rounded-[12px] object-cover"
              />
              <p
                className="text-gray-600 mt-4"
                style={{
                  fontSize: "18px",
                  color: "black",
                  marginBottom: "20px",
                }}
              >
                {item.category}
              </p>
              <h3
                className="text-gray-600 font-bold"
                style={{
                  fontSize: "20px",
                  fontFamily: "HandelGothic",
                  color: "black",
                }}
              >
                {item.title}
              </h3>

              <div className="mt-auto flex justify-start">
                <img
                  src="/assets/images/flecha-negro.png"
                  alt="Arrow"
                  className="w-[48.33px] h-[48px] rounded-full border-2 border-black"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ------------------------------"footer de Blog" ------------------------------------ */}

      <div className="w-full py-16 flex justify-center rounded-b-[48px] relative overflow-hidden">
      <div className="border-l text-center text-white px-6 mt-[0px] w-full max-w-[933px] relative z-10 flex flex-col justify-center h-[200px] mb-[15px] sm:mb-[100px] md:mb-[40px] lg:mb-[40px] ">
          <p
            className="leading-[35px] sm:leading-[31px] md:leading-[40px] lg:leading-[50px] text-[32px] sm:text-[32px] md:text-[40px] lg:text-[45px]  font-bold max-w-[933px] mx-auto text-left bg-gradient-to-r from-[#4D86FF] to-[#FFFFFF] text-transparent bg-clip-text leading-tight md:leading-[43px]"
            style={{ fontFamily: "HandelGothic" }}
          >
            Suscríbete a nuestro boletín para estar al tanto de las últimas
            novedades.
          </p>

          <div className=" flex justify-center mt-[20px] ">
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
              ? "radial-gradient(ellipse at 20% 80%, #22379A80 30%, #0B0C2840 70%)" // Degradado en pantallas pequeñas
              : "radial-gradient(ellipse at 50% 100%, #22379A80 50%, #0B0C2840 90%)", // Degradado en pantallas grandes
          }}
        ></div>
      </div>
    </>
  );
}

export default Blog;
