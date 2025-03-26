import React from 'react';
import { useTranslations } from 'next-intl';

const LoadingScreen = () => {
  const t = useTranslations('loading');
  return (
    <div className="bg-[#0e051c] fixed top-0 left-0 w-screen h-full flex items-center justify-center bg-opacity-70 backdrop-blur-sm z-50">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-lg text-white animate-scale">{t('generalLoading')}</p>
      </div>
    </div>
  );
};

export default LoadingScreen; 