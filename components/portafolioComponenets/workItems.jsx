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
    },
    {
      title: "Monster Energy",
      description: '"I am the Beast"',
      category: ["creativity"],
      path: "monster-energy",
      videoSrc: "/assets/videos/monsterpreview_web.mp4",
    },
    {
      title: "Páginas Web",
      description: <div>{t("descPaginasWeb")}</div>,
      category: ["creativity", "technology", "consulting"],
      path: "web-page",
      videoSrc: "/assets/videos/webpagespreview_web.mp4",
    },
    {
      title: "Wersus",
      description: <div>{t("descWersus")}</div>,
      category: ["creativity", "technology", "consulting"],
      path: "wersus",
      videoSrc: "/assets/videos/wersuspreview_web.mp4",
    },
    {
      title: "CIML",
      description: <div>{t("descCIML")}</div>,
      category: ["creativity", "consulting"],
      path: "ciml",
      videoSrc: "/assets/videos/cimlpreview_web.mp4",
    },
    {
      title: "Politécnico Grancolombiano",
      description: <div>{t("descPolitecnicoGrancolombiano")}</div>,
      category: ["technology"],
      path: "politecnico",
      videoSrc: "/assets/videos/polipreview_web.mp4",
    },
    {
      title: "Lili Estevez",
      description: <div>{t("descLiliEstevez")}</div>,
      category: ["creativity"],
      path: "lili-estevez",
      videoSrc: "/assets/videos/lilipreview_web.mp4",
    },
    {
      title: "Fundación Heinrich Böll",
      description: <div>{t("descFundaciónHeinrich")}</div>,
      path: "fundacion",
      videoSrc: "/assets/videos/heinrichbollpreview_web.mp4",
    },
    {
      title: "Uparsistem",
      description: <div>{t("descUparsistem")}</div>,
      category: ["technology"],
      path: "uparsistem",
      videoSrc: "/assets/videos/uniparpreview_web.mp4",
    },
    {
      title: "OIM",
      description: <div>{t("descOIM")}</div>,
      category: ["creativity"],
      path: "oim",
      videoSrc: "/assets/videos/iompreview_web.mp4",
    },
    {
      title: "B2Fintech",
      description: <div>{t("descB2Fintech")}</div>,
      category: ["technology"],
      path: "b2fintech",
      videoSrc:
        "/assets/videos/2bfintechpreview_web.mp4",
    },
  ];
};
