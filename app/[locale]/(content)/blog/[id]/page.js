"use client";
import BannerBlog from "@/components/blogComponents/BannerBlog";
import { DataBlog } from "@/components/blogComponents/DataBlog";

import Blog from "@/components/header/Blog";
import Footer from "@/components/header/Footer";

export default function BlogPost({ params }) {
  const { id } = params;

  const data = DataBlog();

  const post = data.find((item) => item.id === id);

  const latestPosts = data.slice(-3).reverse();

  if (!post) {
    return <div className="text-center text-xl py-10">Post not found</div>;
  }

  return (
    <div className="relative bg-[white] ">
      <BannerBlog />
      <div className="max-w-[1500px] mx-auto px-[21px] sm:px-[21px] md:px-[49px] lg:px-[71px] mt-[128px] flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <div className="w-full aspect-[16/9] sm:aspect-[4/3] md:aspect-[16/9] lg:aspect-[16/9] overflow-hidden rounded-[24px] mb-6">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover sm:max-h-[300px] md:max-h-none"
            />
          </div>

          <p
            className="font-semibold text-[18px] mb-[25px]"
            style={{ fontFamily: "UniteaSans-bold", color: "black" }}
          >
            {post.date}
          </p>
          <p
            className="text-[18px] font-semibold mb-[25px]"
            style={{ fontFamily: "UniteaSans", color: "#0B0C28" }}
          >
            {post.category}
          </p>
          <h1
            className="text-[45px] font-bold leading-[50px] mb-[64px]"
            style={{ fontFamily: "HandelGothic", color: "#0B0C28" }}
          >
            {post.title}
          </h1>
          <p
            className="text-[18px] whitespace-pre-line leading-[25px] sm:leading-[20px] md:leading-[28px] lg:leading-[25px]"
            style={{ fontFamily: "UniteaSans", color: "#0B0C28" }}
          >
            {post.info}
          </p>
        </div>

        <div className="w-[300px] flex-shrink-0 hidden lg:block  ">
          <div className="border border-none rounded-[26px] shadow-md mb-[35px] p-[22px] bg-[#ECECEC]">
            <p
              className="font-bold text-[24px] mb-2"
              style={{ fontFamily: "HandelGothic", color: "#0B0C28" }}
            >
              Categorías
            </p>
            <hr className="my-2 border-[#676781]" />
            <p
              className="text-[17px] "
              style={{ fontFamily: "UniteaSans-bold", color: "#0B0C28" }}
            >
              Tecnología
            </p>
            <hr className="my-2 border-[#676781]" />
            <p
              className="text-[17px] "
              style={{ fontFamily: "UniteaSans-bold", color: "#0B0C28" }}
            >
              Marketing
            </p>
            <hr className="my-2 border-[#676781]" />
            <p
              className="text-[17px] "
              style={{ fontFamily: "UniteaSans-bold", color: "#0B0C28" }}
            >
              Noticias
            </p>
          </div>

          <div className="border-nonde  rounded-[26px] shadow-md  bg-[#ECECEC] p-[22px] hidden lg:block  ">
            <p
              className="font-bold text-[24px] mb-2"
              style={{ fontFamily: "HandelGothic", color: "#0B0C28" }}
            >
              Artículos Populares
            </p>
            {latestPosts.map((article) => (
              <div key={article.id} className="mb-4">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-[170px] object-cover rounded-lg mb-2"
                />
                <p
                  className="text-[16px] text-gray-500"
                  style={{ fontFamily: "UniteaSans", color: "#0B0C28" }}
                >
                  {article.date}
                </p>
                <p
                  className="font-semibold text-[17px]"
                  style={{ fontFamily: "HandelGothic", color: "#0B0C28" }}
                >
                  {article.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative bg-[#0E051C] rounded-t-[48px] mt-[140px] max-w-[1500px] mx-auto">
        <div className="pt-[1px]">
          <Blog />
        </div>
        <Footer />
      </div>
    </div>
  );
}
