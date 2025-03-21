import { useState, useTransition } from 'react';
import { useRouter, usePathname } from '@/navigation';
import { useParams } from 'next/navigation';

/**
 * Hook personalizado para manejar el cambio de idioma en la aplicación
 * @returns {Object} - Objeto con funciones y estados para manejar el idioma
 */
export function useLanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  // Función para cambiar el estado del menú
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Función para cambiar el idioma
  const changeLanguage = (locale) => {
    setIsOpen(false);
    
    startTransition(() => {
      router.replace(
        { pathname, params },
        { locale }
      );
    });
  };

  return {
    isOpen,
    isPending,
    toggleMenu,
    changeLanguage
  };
}