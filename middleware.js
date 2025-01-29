import createMiddleware from 'next-intl/middleware';
import { locales } from './intlConfig';
 
const nextIntlMiddleware = createMiddleware({
  locales: locales,
  defaultLocale: 'en'
});

export default function(req){
  return nextIntlMiddleware(req)
}

export const config = {
  matcher: ['/', '/(en|es)/:path*']
};
