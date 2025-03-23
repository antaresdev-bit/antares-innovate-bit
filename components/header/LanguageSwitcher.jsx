import React, { useState, useEffect } from 'react';
import Image from "next/legacy/image";
import { useLanguageSwitcher } from '@/hooks/useLanguageSwitcher';
import { useLocale } from 'next-intl';
import { FaChevronDown } from 'react-icons/fa';

const FlagIcon = ({ iconPath }) => {
  return (
    <div className='relative pr-2 w-6 h-4 mr-2'>
      <Image src={iconPath} alt="Flag" layout='fill' objectFit='contain' />
    </div>
  );
};

const LanguageSwitcher = () => {
  const { isOpen, isPending, toggleMenu, changeLanguage } = useLanguageSwitcher();
  const currentLocale = useLocale();
  
  // Estado para controlar la animación
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Efecto para controlar la animación cuando el menú se abre o cierra
  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    } else {
      // Mantenemos el componente mientras se anima
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 300); // Duración de la animación
      
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Handler para manejar eventos de teclado (accesibilidad)
  const handleKeyDown = (event, locale) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      changeLanguage(locale);
    }
  };

  const getFlagPath = (locale) => {
    return locale === 'en' ? '/assets/images/EEUU.png' : '/assets/images/SPAIN.png';
  };

  return (
    <div className="language-switcher">
      <button 
        onClick={toggleMenu} 
        className="language-button" 
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <div className="flex items-center justify-end gap-x-2 pt-0 lg:pt-2">
          <div className="relative w-[24px] h-[24px]">
            <Image
              src={getFlagPath(currentLocale)}
              alt={`${currentLocale === 'en' ? 'English' : 'Español'} Flag`}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <FaChevronDown className={`w-4 h-4 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </button>

      
      {(isOpen || isAnimating) && (
        <ul 
          className={`language-list transition-all duration-300 ease-in-out 
                    ${isOpen ? 'opacity-100 transform scale-100 translate-y-0 animate-in zoom-in fade-in' : 'opacity-0 transform scale-95 -translate-y-2 pointer-events-none'}`} 
          role="menu"
        >
          <li 
            className={`relative flex flex-row items-center ${currentLocale === 'en' ? 'font-bold' : ''}`}
            onClick={() => changeLanguage('en')}
            onKeyDown={(e) => handleKeyDown(e, 'en')}
            role="menuitem"
            tabIndex="0"
          >
            <FlagIcon iconPath={'/assets/images/EEUU.png'} />English
          </li>
          <li 
            className={`relative flex flex-row items-center ${currentLocale === 'es' ? 'font-bold' : ''}`}
            onClick={() => changeLanguage('es')}
            onKeyDown={(e) => handleKeyDown(e, 'es')}
            role="menuitem"
            tabIndex="0"
          >
            <FlagIcon iconPath={'/assets/images/SPAIN.png'} />Español
          </li>
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
