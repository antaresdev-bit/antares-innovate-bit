import LottieIChatbot from "@/components/landing/LottieIChatbot";

export const metadata = {
  title: 'Antares Innovate',
  description: 'Antares Innovate es una empresa que se dedica a la transformación digital.',
}

export default function MarketingLayout({ children }) {
 return (
  <>
    <LottieIChatbot />
    <main>
      {children}
    </main>    
  </>
  )
}
