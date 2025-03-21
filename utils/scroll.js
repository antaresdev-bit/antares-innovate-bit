export const getYOffset = () => {
  if (typeof window !== 'undefined') {
    return window.innerWidth < 768 ? 100 : 150;
  }
  return 150;
};

export const scrollToElement = (id) => {
  const element = document.getElementById(id);
  if (!element) return;
  
  const yOffset = getYOffset();
  const y = element.getBoundingClientRect().top + window.scrollY - yOffset;
  
  window.scrollTo({ 
    top: y, 
    behavior: 'smooth' 
  });
}; 