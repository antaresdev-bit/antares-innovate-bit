"use client";
import { useState } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import BannerBlog from "@/components/blogComponents/BannerBlog";
import CardBlog from "@/components/blogComponents/CardBlog";
import Footer from "@/components/header/Footer";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { DataBlog } from "@/components/blogComponents/DataBlog";

export default function PageBlog() {
  const locale = useLocale();
  const [posts, setPosts] = useState(
    DataBlog().sort((a, b) => b.id - a.id) 
  );
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="relative bg-[white]">
      <BannerBlog />
      <div className="max-w-[1500px] mx-auto px-[21px] sm:px-[21px] md:px-[49px] lg:px-[71px] mt-[128px]">
        {currentPosts.map((post) => (
          <div
            key={post.id}
            className="flex flex-col md:flex-row rounded-[24px] overflow-hidden mb-[46px] sm:mb-[46px] md:mb-[72px] lg:mb-[30px] sm:p-[15px] md:p-[0px] lg:p-[0px] p-[15px] border sm:border md:border-none lg:border-none bg-[#ECECEC] sm:bg-[#ECECEC] md:bg-[#FFFFFF] lg:bg-[#FFFFFF] "
          >
            <div className="md:w-1/2 rounded-[24px] overflow-hidden border relative mt-[30px] aspect-[16/9]">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-full md:w-1/2 h-full p-4 md:p-6 lg:p-[40px] flex flex-col justify-center">
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
                  className="text-[24px] sm:text-[14px] md:text-[30px] lg:text-[35px] leading-[28px] leading-[28px] sm:leading-[28px] md:leading-[28px] lg:leading-[38px] mb-[25px]"
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

        {/* Paginación */}
        <div className="flex justify-center items-center mt-[130px] ">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="w-[58px] h-[58px] rounded-full mx-2 flex items-center justify-center border border-[#676781] bg-white text-[#0B0C28] disabled:opacity-50"
          >
            <FaChevronLeft size={20} />
          </button>

          {Array.from(
            { length: Math.ceil(posts.length / postsPerPage) },
            (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`w-[58px] h-[58px] rounded-full mx-2 flex items-center justify-center  ${
                  currentPage === i + 1
                    ? "bg-[#1C5DE9] text-white border-none"
                    : "bg-white text-[#0B0C28] border border-[#676781]"
                }`}
                style={{
                  fontFamily: "UniteaSans",
                  fontSize: "35px",
                  margin: "0 15px",
                }}
              >
                {i + 1}
              </button>
            )
          )}

          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === Math.ceil(posts.length / postsPerPage)}
            className="w-[58px] h-[58px] rounded-full mx-2 flex items-center justify-center border border-[#676781] bg-white text-[#0B0C28] disabled:opacity-50"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
        <div className="max-w-[1500px] mx-auto">
          <CardBlog />
        </div>
      </div>
      <div className="relative bg-[#0E051C] rounded-t-[48px] mt-[140px] max-w-[1500px] mx-auto h-[600px] pt-[20px]">
        <Footer />
      </div>
    </div>
  );
}