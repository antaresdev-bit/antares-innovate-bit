import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex items-center justify-center gap-4">
      <Link className="mx-4" href="/services">Servicios</Link>
      <Link className="mx-4" href="/portfolio">Portafolio</Link>
      <Link className="mx-4" href="/industries">Industrias</Link>
      <Link className="mx-4" href="/about">Sobre Nosotros</Link>
      <Link className="mx-4" href="/blog">Blog</Link>
      <Link className="mx-4" href="/contact">Contacto</Link>
    </nav>
  );
};

export default Nav;
