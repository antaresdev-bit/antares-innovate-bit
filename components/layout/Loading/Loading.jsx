import { useTranslations } from 'next-intl';

export default function Loading() {
    const t = useTranslations("loading");
    return (
        <div className="absolute inset-0 flex items-center justify-center bg-[#0e051c]/50">
        <div className="flex flex-col items-center mt-[100px]">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-lg text-white animate-scale">{t('generalLoading')}</p>
        </div>
    </div>
    )
}
