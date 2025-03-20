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
      videoSrc: "/assets/videos/uparpreview.mp4",
    },
    {
      title: "Monster Energy",
      description: '"I am the Beast"',
      category: ["creativity"],
      path: "monster-energy",
      videoSrc: "/assets/videos/monsterpreview.mp4",
    },
    {
      title: "Páginas Web",
      description: <div>{t("descPaginasWeb")}</div>,
      category: ["creativity", "technology", "consulting"],
      path: "web-page",
      videoSrc: "/assets/videos/webpagespreview.mp4",
    },
    {
      title: "Wersus",
      description: <div>{t("descWersus")}</div>,
      category: ["creativity", "technology", "consulting"],
      path: "wersus",
      videoSrc:
        "https://storage.googleapis.com/antares-agency-rcs/Video%20Promo%20Wersus%20TSP_1.mp4",
    },
    {
      title: "CIML",
      description: <div>{t("descCIML")}</div>,
      category: ["creativity", "consulting"],
      path: "ciml",
      videoSrc:
        "https://storage.googleapis.com/antares-agency-rcs/CIML%20preview.mp4",
    },
    {
      title: "Politécnico Grancolombiano",
      description: <div>{t("descPolitecnicoGrancolombiano")}</div>,
      category: ["technology"],
      path: "politecnico",
      videoSrc:
        "https://storage.googleapis.com/antares-agency-rcs/Poli%20Preview.mp4",
    },
    {
      title: "Lili Estevez",
      description: <div>{t("descLiliEstevez")}</div>,
      category: ["creativity"],
      path: "lili-estevez",
      videoSrc:
        "https://storage.googleapis.com/antares-agency-rcs/Lili%20Preview.mp4",
    },
    {
      title: "Fundación Heinrich Böll",
      description: <div>{t("descFundaciónHeinrich")}</div>,
      path: "fundacion",
      videoSrc:
        "https://storage.googleapis.com/antares-agency-rcs/heinrich%20boll%20PREVIEW.mp4",
    },
    {
      title: "Uparsistem",
      description: <div>{t("descUparsistem")}</div>,
      category: ["technology"],
      path: "uparsistem",
      videoSrc:
        "https://storage.googleapis.com/antares-agency-rcs/Uparsistem%20preview.mp4",
    },
    {
      title: "OIM",
      description: <div>{t("descOIM")}</div>,
      category: ["creativity"],
      path: "oim",
      videoSrc:
        "https://storage.googleapis.com/antares-agency-rcs/IOM%20preview.mp4",
    },
    {
      title: "B2Fintech",
      description: <div>{t("descB2Fintech")}</div>,
      category: ["technology"],
      path: "b2fintech",
      videoSrc:
        "https://storage.googleapis.com/antares-agency-rcs/2bfintech%20preview.mp4",
    },
  ];
};
