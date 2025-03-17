"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import BannerBlog from "@/components/blogComponents/BannerBlog";

export default function PageBlog() {
  const locale = useLocale();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/blog")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="relative bg-[white]">
      <BannerBlog />
      <div className="max-w-[1500px] mx-auto px-[21px] sm:px-[21px] md:px-[49px] lg:px-[71px] mt-[128px]  ">
        {posts.map((post) => (
          <div
            key={post.id}
            className="flex flex-col md:flex-row  rounded-[24px] overflow-hidden  mb-[46px] sm:mb-[46px] md:mb-[72px] lg:mb-[133px] sm:p-[15px] md:p-[0px] lg:p-[0px] p-[15px]  border sm:border md:border-none lg:border-none bg-[#ECECEC] sm:bg-[#ECECEC] md:bg-[#FFFFFF] lg:bg-[#FFFFFF]"
          >
            <div className="md:w-1/2 rounded-[24px] overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[458px] sm:h-[458px]  md:h-full lg:h-[458px] object-cover overflow-hidden"
              />
            </div>

            <div className="w-full md:w-1/2 h-full p-4 md:p-6 lg:p-[40px] flex flex-col justify-center ">
              <div className="">
                <div
                  className=""
                  style={{
                    fontFamily: "UniteaSans-bold",
                    color: "black",
                  }}
                >
                  <p className="text-[17px] sm:text-[17px] md:text-[18px] lg:text-[18px] mb-[20px]">
                    {post.date}
                  </p>
                </div>

                <div
                  className=""
                  style={{
                    fontFamily: "UniteaSans",
                    color: "#0B0C28",
                  }}
                >
                  <p className="text-[17px] sm:text-[17px] md:text-[18px] lg:text-[18px] mb-[20px]">
                    {post.category}
                  </p>
                </div>

                <p
                  className="text-[24px] sm:text-[14px] md:text-[30px] lg:text-[35px] leading-[40px] mb-[20px]"
                  style={{
                    fontFamily: "HandelGothic",
                    color: "#0B0C28",
                  }}
                >
                  {post.title}
                </p>

                <p
                  className="text-[17px] sm:text-[17px] md:text-[18px] lg:text-[18px] mb-[33px] sm:mb-[330px] md:mb-[35px] lg:mb-[53px]"
                  style={{
                    fontFamily: "UniteaSans",
                    color: "#0B0C28",
                  }}
                >
                  {post.info.substring(0, 200)}...
                </p>

                <Link href={`/${locale}/blog/${post.id}`} className="">
                  <button
                    className="w-full sm:w-[230px] h-[48px] bg-white text-[black] text-[20px] rounded-[32px] hover:bg-gray-200 transition duration-300 font-bold border"
                    style={{
                      fontFamily: "HandelGothic",
                      borderColor: "#676781",
                      borderWidth: "1px",
                    }}
                  >
                    Leer Más
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
