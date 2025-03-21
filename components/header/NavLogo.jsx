import Image from "next/image";
import Link from "next/link";

function NavLogo({ locale }) {
  return (
    <Link href={`/${locale}/`} className="flex-shrink-0">
      <Image
        src="/assets/images/Logo Antares.svg"
        alt="Antares Logo"
        width={150}
        height={50}
      />
    </Link>
  );
}

export default NavLogo; 