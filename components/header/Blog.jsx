import React from "react";

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
  return (
    <>
      <div className="w-full max-w-[1299px] mx-auto sm:bg-white bg-transparent rounded-[48px] p-8 mt-[100px]  ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[29px] ">
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

      <div className="w-full bg-gradient-to-t from-[#965318] via-[#C9AB69] to-transparent py-16 flex justify-center rounded-b-[48px]">
        <div className="border-l text-center text-white px-6 mt-[50px] w-full max-w-[933px]">
          <p
            className="text-xl md:text-2xl font-bold max-w-[933px] mx-auto text-left bg-gradient-to-r from-[#FDC548] to-[#FFFFFF] text-transparent bg-clip-text leading-tight md:leading-[43px]"
            style={{ fontFamily: "HandelGothic", fontSize: "40px" }}
          >
            Suscríbete a nuestro boletín para estar al tanto de las últimas
            novedades.
          </p>

          <div className="mt-6 flex justify-center">
            <input
              type="email"
              placeholder="Tu dirección de correo electrónico..."
              className="w-full max-w-[933px] h-[48px] rounded-[32px] px-4 text-gray-700"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
