import Link from "next/link";
import { useLocale} from "next-intl";

const Nav = () => {
  const locale = useLocale();
  return (
    <nav className="flex items-center justify-center gap-4">
      <Link className="mx-4" href={`/${locale}/services`}>
        Servicios
      </Link>
      <Link className="mx-4" href={`/${locale}/portfolio`}>
        Portafolio
      </Link>
      <Link className="mx-4" href={`/${locale}/industries`}>
        Industrias
      </Link>
      <Link className="mx-4" href={`/${locale}/about`}>
        Sobre Nosotros
      </Link>
      <Link className="mx-4" href={`/${locale}/blog`}>
        Blog
      </Link>
      <Link className="mx-4" href={`/${locale}/contact`}>
        Contacto
      </Link>
    </nav>
  );
};

export default Nav;
