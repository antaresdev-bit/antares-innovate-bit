import { DataBlog } from "@/components/blogComponents/DataBlog";

export async function generateMetadata({ params }) {
  const { id } = params;
  const data = DataBlog();
  const post = data.find((item) => item.id === id);

  if (!post) {
    return {
      title: "Post no encontrado | Antares Innovate",
      description: "Este artículo de blog no existe en Antares Innovate."
    };
  }

  return {
    title: `${post.title} | Antares Innovate`,
    description: post.info.substring(0, 160),
    keywords: post.category.split(" "),
    openGraph: {
      title: post.title,
      description: post.info.substring(0, 160),
      url: `https://www.antaresinnovate.com/blog/${id}`,
      siteName: "Antares Innovate",
      images: [{ url: post.image, width: 1200, height: 630 }],
      type: "article",
      publishedTime: post.date,
      author: "Antares Innovate",
    },
    alternates: {
      canonical: `https://www.antaresinnovate.com/blog/${id}`,
    },
    other: {
      "linkedin:owner": "https://www.linkedin.com/company/antaresinnova/",
      "linkedin:posts": "https://www.linkedin.com/company/antaresinnova/posts/?feedView=all",
    },
  };
}
