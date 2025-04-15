"use client";

import { useTranslations } from "next-intl";

export function teamMembers() {
  const t = useTranslations("AboutUs");

  return [
    {
      name: "William G Mosquera",
      role: t("WilliamRole"),
      src: "/assets/images/about/1.png",
      perfil: t("WilliamPerfil"),
    },
    {
      name: "Michelle Cadavid",
      role: t("MichelleRole"),
      src: "/assets/images/about/2.png",
      perfil: t("MichellePerfil"),
    },
    {
      name: "Luis Gómez",
      role: t("LuisRole"),
      src: "/assets/images/about/6.png",
      perfil: t("LuisPerfil"),
    },
    {
      name: "Andrés F. Grondona",
      role: t("AndresRole"),
      src: "/assets/images/about/3.png",
      perfil: t("AndresPerfil"),
    },

    {
      name: "Sorangy Campos",
      role: t("SorangyRole"),
      src: "/assets/images/about/4.png",
      perfil: t("SorangyPerfil"),
    },

    {
      name: "Yamile Duran",
      role: t("YamileRole"),
      src: "/assets/images/about/5.png",
      perfil: t("YamilePerfil"),
    },

    {
      name: "Daniel Huertas",
      role: t("DanielRole"),
      src: "/assets/images/about/8.png",
      perfil: t("DanielPerfil"),
    },
  ];
}
