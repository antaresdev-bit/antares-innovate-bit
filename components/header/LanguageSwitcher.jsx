import React from 'react';
import Image from "next/legacy/image";
import { useLanguageSwitcher } from '@/hooks/useLanguageSwitcher';
import { useResponsive } from "../../hooks/useResponsive";
import { useLocale } from 'next-intl';

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
    <div className="language-switcher w-[24px]">
      <button 
        onClick={toggleMenu} 
        className="language-button" 
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <Image
          src={getFlagPath(currentLocale)}
          alt={`${currentLocale === 'en' ? 'English' : 'Español'} Flag`}
          width={24}
          layout="fill"
          objectFit="contain"
        />
      </button>
      
      {isOpen && (
        <ul className="language-list animate-in zoom-in fade-in" role="menu">
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
