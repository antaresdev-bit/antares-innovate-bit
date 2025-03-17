// import { db } from "@/lib/firebase";
// import { doc, getDoc } from "firebase/firestore";

// export default async function BlogPost({ params }) {
//   const { id } = params;

//   const docRef = doc(db, "blogPosts", id);
//   const docSnap = await getDoc(docRef);

//   if (!docSnap.exists()) {
//     return <div>Post not found</div>;
//   }

//   const post = docSnap.data();

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
//       <img src={post.image} alt={post.title} className="w-full h-64 object-cover mb-6" />
//       <p>{post.category}</p>
//       <p className="text-gray-600">{post.info}</p>
//     </div>
//   );
// }
"use client";
import BannerBlog from "@/components/blogComponents/BannerBlog";
import Blog from "@/components/header/Blog";
import Footer from "@/components/header/Footer";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export default async function BlogPost({ params }) {
  const { id } = params;

  const docRef = doc(db, "blogPosts", id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return <div className="text-center text-xl py-10">Post not found</div>;
  }

  const post = docSnap.data();

  return (
    <div className="relative bg-[white]">
      <BannerBlog />
      <div className="max-w-[1500px] mx-auto px-[21px] sm:px-[21px] md:px-[49px] lg:px-[71px] mt-[128px] ">
        <div className="container mx-auto">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[617px] object-cover mb-6 rounded-[24px]"
          />
          <p
            className="t font-semibold text-[18px] mb-[25px] sm:mb-[35px] md:mb-[38px] lg:mb-[38px]  "
            style={{
              fontFamily: "UniteaSans-bold",
              color: "black",
            }}
          >
            {post.date}
          </p>
          <p
            className="text-[18px]font-semibold mb-[25px] sm:mb-[35px] md:mb-[38px] lg:mb-[38px] ]"
            style={{
              fontFamily: "UniteaSans",
              color: "#0B0C28",
            }}
          >
            {post.category}
          </p>
          <h1
            className="text-[45px] font-bold sm:mb-[35px] mb-[25px] sm:mb-[35px] md:mb-[38px] lg:mb-[38px] leading-[45px] "
            style={{
              fontFamily: "HandelGothic",
              color: "#0B0C28",
            }}
          >
            {post.title}
          </h1>

          <p
            className="text-[18px] "
            style={{
              fontFamily: "UniteaSans",
              color: "#0B0C28",
            }}
          >
            {post.info}
          </p>
        </div>
      </div>
      <div className="relative bg-[#0E051C] rounded-t-[48px] mt-[140px] max-w-[1500px]   mx-auto">
        <div className="pt-[1px]  ">
          <Blog />
        </div>
        <Footer />
      </div>
    </div>
  );
}
