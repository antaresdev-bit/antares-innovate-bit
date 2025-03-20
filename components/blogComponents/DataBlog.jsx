"use client";

import { useTranslations } from "next-intl";

export function DataBlog() {
  const t = useTranslations("blog");

  return [
    {
      id: "7",
      title: t("titleBlog7"),
      info: t("infoBlog7"),
      category: t("categoryBlog7"),
      image:
        "https://media.licdn.com/dms/image/v2/D4E12AQHXKP3f4YORmw/article-cover_image-shrink_720_1280/B4EZWqMb8iGYAI-/0/1742317146472?e=1747872000&v=beta&t=v9Zn4Wmtl6gQ1FLp-vrxNwX160VXEz0sdQ6v1uBiIY8",
      date: t("dateBlog7"),
    },
    {
      id: "6",
      title: t("titleBlog6"),
      info: t("infoBlog6"),
      category: t("categoryBlog6"),
      image:
        "https://storage.googleapis.com/antares-agency-rcs/news-images/antares.jpg",
      date: t("dateBlog6"),
    },
    {
      id: "5",
      title: t("titleBlog5"),
      info: t("infoBlog5"),
      category: t("categoryBlog5"),
      image:
        "https://media.licdn.com/dms/image/v2/D4E12AQGf6tb-ryEJMA/article-cover_image-shrink_720_1280/B4EZWG6MR9HcAI-/0/1741725161682?e=1747872000&v=beta&t=TRMZYV_rsCzhnYB4GsAUVS0uP5Fy_marminFfwFff0g",
      date: t("dateBlog5"),
    },
    {
      id: "4",
      title: t("titleBlog4"),
      info: t("infoBlog4"),
      category: t("categoryBlog4"),
      image:
        "https://media.licdn.com/dms/image/v2/D4E12AQH-Av84301LiQ/article-cover_image-shrink_720_1280/B4EZWG3eOfHgAI-/0/1741724449057?e=1747872000&v=beta&t=FQtUxWk8RjDTcYnMtV6tzsnk44CeronSDk9lbqLppJ4",
      date: t("dateBlog4"),
    },
    {
      id: "3",
      title: t("titleBlog3"),
      info: t("infoBlog3"),
      category: t("categoryBlog3"),
      image:
        "https://media.licdn.com/dms/image/v2/D4E12AQEX4oSLMYKyYg/article-cover_image-shrink_720_1280/B4EZWCr3.QG0AI-/0/1741654302245?e=1747872000&v=beta&t=vbIPDma3SDS0Vufz-6T7Rc-izTtgsw9kguKx6zJkFWM",
      date: t("dateBlog3"),
    },
    {
      id: "2",
      title: t("titleBlog2"),
      info: t("infoBlog2"),
      category: t("categoryBlog2"),
      image:
        "https://media.licdn.com/dms/image/v2/D4E12AQElIFTRc6pUWQ/article-cover_image-shrink_720_1280/B4EZVtywjaGgAI-/0/1741303784226?e=1747872000&v=beta&t=LLd2j3m5ZmgYmzU3hCDf8t0yXL0eVyZvsmhTu1jCjUk",
      date: t("dateBlog2"),
    },
    {
      id: "1",
      title: t("titleBlog1"),
      info: t("infoBlog1"),
      category: t("categoryBlog1"),
      image:
        "https://media.licdn.com/dms/image/v2/D4E12AQG5YTjBBokttQ/article-cover_image-shrink_600_2000/B4EZVniCEYHUAU-/0/1741198730430?e=1747872000&v=beta&t=9XBmQBwlyeS0U771MJxIFeclJhz1nfQLeGulVBCI2V0",
      date: t("dateBlog1"),
    },
  ];
}
