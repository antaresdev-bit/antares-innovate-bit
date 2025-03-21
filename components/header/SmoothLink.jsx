import { useCallback } from "react";
import Link from "next/link";

const SmoothLink = ({ 
  href, 
  children, 
  className, 
  onClick, 
  isHomePage,
  scrollToElement 
}) => {
  const handleClick = useCallback((e) => {
    if (isHomePage && href.startsWith('#')) {
      e.preventDefault();
      const id = href.replace('#', '');
      scrollToElement(id);
    }
    
    if (onClick) onClick(e);
  }, [href, isHomePage, onClick, scrollToElement]);
  
  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default SmoothLink; 