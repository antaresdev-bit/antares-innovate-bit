"use client";

import { useTranslations } from "next-intl";

export const workItems = () => {
  const t = useTranslations("portafolio");

  return [
    {
      title: "Upardigital",
      description: <div>{t("descUpardigital")}</div>,
      category: ["consulting", "technology"],
      path: "upardigital",
      videoSrc: "/assets/videos/uparpreview_web.mp4",
      poster: "/assets/images/portafolio/posters/uparpreview_poster.jpg",
    },
    {
      title: "Monster Energy",
      description: '"I am the Beast"',
      category: ["creativity"],
      path: "monster-energy",
      videoSrc: "/assets/videos/monsterpreview_web.mp4",
      poster: "/assets/images/portafolio/posters/monsterpreview_poster.jpg",
    },
    {
      title: "Páginas Web",
      description: <div>{t("descPaginasWeb")}</div>,
      category: ["creativity", "technology", "consulting"],
      path: "web-page",
      videoSrc: "/assets/videos/webpagespreview_web.mp4",
      poster: "/assets/images/portafolio/posters/webpagespreview_poster.jpg",
    },
    {
      title: "Wersus",
      description: <div>{t("descWersus")}</div>,
      category: ["creativity", "technology", "consulting"],
      path: "wersus",
      videoSrc: "/assets/videos/wersuspreview_web.mp4",
      poster: "/assets/images/portafolio/posters/wersuspreview_poster.jpg",
    },
    {
      title: "CIML",
      description: <div>{t("descCIML")}</div>,
      category: ["creativity", "consulting"],
      path: "ciml",
      videoSrc: "/assets/videos/cimlpreview_web.mp4",
      poster: "/assets/images/portafolio/posters/cimlpreview_poster.jpg",
    },
    {
      title: "Politécnico Grancolombiano",
      description: <div>{t("descPolitecnicoGrancolombiano")}</div>,
      category: ["technology"],
      path: "politecnico",
      videoSrc: "/assets/videos/polipreview_web.mp4",
      poster: "/assets/images/portafolio/posters/polipreview_poster.jpg",
    },
    {
      title: "Lili Estevez",
      description: <div>{t("descLiliEstevez")}</div>,
      category: ["creativity"],
      path: "lili-estevez",
      videoSrc: "/assets/videos/lilipreview_web.mp4",
      poster: "/assets/images/portafolio/posters/lilipreview_poster.jpg",
    },
    {
      title: "Fundación Heinrich Böll",
      description: <div>{t("descFundaciónHeinrich")}</div>,
      path: "fundacion",
      videoSrc: "/assets/videos/heinrichbollpreview_web.mp4",
      poster: "/assets/images/portafolio/posters/heinrichbollpreview_poster.jpg",
    },
    {
      title: "Uparsistem",
      description: <div>{t("descUparsistem")}</div>,
      category: ["technology"],
      path: "uparsistem",
      videoSrc: "/assets/videos/uniparpreview_web.mp4",
      poster: "/assets/images/portafolio/posters/uniparpreview_poster.jpg",
    },
    {
      title: "OIM",
      description: <div>{t("descOIM")}</div>,
      category: ["creativity"],
      path: "oim",
      videoSrc: "/assets/videos/iompreview_web.mp4",
      poster: "/assets/images/portafolio/posters/iompreview_poster.jpg",
    },
    {
      title: "B2Fintech",
      description: <div>{t("descB2Fintech")}</div>,
      category: ["technology"],
      path: "b2fintech",
      videoSrc:
        "/assets/videos/2bfintechpreview_web.mp4",
      poster: "/assets/images/portafolio/posters/2bfintechpreview_poster.jpg",
    },
  ];
};
