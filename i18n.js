// import {notFound} from 'next/navigation';
// import {getRequestConfig} from 'next-intl/server';
// import { locales } from './intlConfig';
 
// export default getRequestConfig(async ({locale}) => {
  
//   const baseLocale = new Intl.Locale(locale).baseName;

//   if (!locales.includes(baseLocale)) notFound();
 
//   return {
//     messages: (await import(`@/public/messages/${baseLocale}.json`)).default
//   };
// }); 

import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { locales } from "./intlConfig";

const messages = {
  en: {
    welcome: "Welcome",
    services: "Our Services",
  },
  es: {
    welcome: "Bienvenido",
    services: "Nuestros Servicios",
  },
};

export default getRequestConfig(async ({ requestLocale }) => {
  const baseLocale = await requestLocale;

  
  if (!locales.includes(baseLocale)) {
    notFound();
  }

 
  return {
    locale: baseLocale, 
    messages: messages[baseLocale] || messages.en, 
  };
});
