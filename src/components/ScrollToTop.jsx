import React from 'react';
import { ChevronUp } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ScrollToTop = ({ isScrolled, scrollToTop }) => {
  const { theme } = useTheme();

  if (!isScrolled) return null;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 z-40 animate-bounce-subtle hover:-translate-y-2 active:scale-95 ${
        theme === 'dark' 
          ? 'bg-[#B384F9] text-white hover:bg-[#9866e3] shadow-[#B384F9]/20' 
          : 'bg-black text-white hover:bg-zinc-800 shadow-zinc-400/50'
      }`}
      aria-label="Scroll to top"
    >
      <ChevronUp size={20} className="w-5 h-5 sm:w-6 sm:h-6" />
    </button>
  );
};

export default ScrollToTop;