// import createMiddleware from 'next-intl/middleware';
// import { locales } from './intlConfig';
 
// const nextIntlMiddleware = createMiddleware({
//   locales: locales,
//   defaultLocale: 'en'
// });

// export default function(req){
//   return nextIntlMiddleware(req)
// }

// export const config = {
//   matcher: ['/', '/(en|es)/:path*']
// };

import createMiddleware from 'next-intl/middleware';
import { locales } from './intlConfig';

const nextIntlMiddleware = createMiddleware({
  locales,
  defaultLocale: 'en',
  localeDetection: false 
});

export default function middleware(req) {
  return nextIntlMiddleware(req);
}

export const config = {
  matcher: ['/', '/(en|es)/:path*']
};

