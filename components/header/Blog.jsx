import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { DataBlog } from "../blogComponents/DataBlog";
import { useTranslations } from "next-intl";

function Blog() {
  const locale = useLocale();
  const t = useTranslations("blog");
  const [isSmallScreen, setIsSmallScreen] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

 
  const sortedDataBlog = DataBlog().sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const latestBlogItems = sortedDataBlog.slice(0, 3);

  return (
    <div className="flex flex-col items-center">
      <div className="mb-[40px] h-[80px] mt-[150px] w-full max-w-[1500px] px-6 md:px-10 lg:px-28 lg:w-[1500px] mr-[21px] md:mr-[49px] lg:mr-[73px]">
        <h1
          className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4D86FF] to-[#FFFFFF] leading-[65px] max-w-[400px]"
          style={{ fontFamily: "HandelGothic" }}
        >
          Blog
        </h1>
      </div>

      <div className="mx-[7px] sm:mx-[21px] md:mx-[49px] lg:mx-[71px]">
        <div className="w-full max-w-[1299px] mx-auto sm:bg-white bg-transparent rounded-[48px] p-[15px] sm:p-[15px] md:p-[22px] lg:p-[32px] mt-[px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[25px] sm:gap-[25px] md:gap-[15px] lg:gap-[29px]">
            {latestBlogItems.map((item, index) => {
              const isMarketingOrNews =
                (item.category === "Marketing" ||
                  item.category === "Noticias") &&
                isSmallScreen;

              return (
                <div
                  key={index}
                  className={`h-[429px] ${
                    isMarketingOrNews
                      ? "bg-[#0E051C] border-[0.5px] border-white text-white"
                      : "bg-[#ECECEC] text-black"
                  } rounded-[24px] p-[22px] flex flex-col`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[225px] sm:h-[225px] md:h-[225px] lg:h-[225px] rounded-[12px] object-cover"
                  />
                  <p
                    className="text-gray-600 mt-4"
                    style={{
                      fontSize: "18px",
                      color: isMarketingOrNews ? "white" : "black",
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
                      color: isMarketingOrNews ? "white" : "black",
                    }}
                  >
                   
                    {item.title.substring(0, 55)}...
                  </h3>
                  <div className="mt-auto flex justify-start">
                    <Link href={`/${locale}/blog`} className="w-full sm:w-auto">
                      <img
                        src={"/assets/images/flecha-negro.png"}
                        alt="Arrow"
                        className="w-[48.33px] h-[48px] rounded-full border-2 border-black"
                      />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Footer de Blog */}
      <div className="w-full py-16 flex justify-center rounded-b-[48px] relative overflow-hidden">
        <div className="border-l text-center text-white px-6 mt-[0px] w-full max-w-[933px] relative z-10 flex flex-col justify-center h-[200px] mb-[15px] sm:mb-[100px] md:mb-[40px] lg:mb-[40px]">
          <p
            className="leading-[35px] sm:leading-[31px] md:leading-[40px] lg:leading-[50px] text-[32px] sm:text-[32px] md:text-[40px] lg:text-[45px] font-bold max-w-[933px] mx-auto text-left bg-gradient-to-r from-[#4D86FF] to-[#FFFFFF] text-transparent bg-clip-text leading-tight md:leading-[43px]"
            style={{ fontFamily: "HandelGothic" }}
          >
            {t("footerBlogInfo")}
          </p>
          <div className="flex justify-center mt-[20px]">
            <input
              type="email"
              placeholder={t("placeHolderBlog")}
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
    </div>
  );
}

export default Blog;