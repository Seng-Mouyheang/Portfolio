import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const { theme } = useTheme();
  const currentLanguage = i18n.language;
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'jp', name: '日本語', flag: '🇯🇵' }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        className={`flex items-center gap-2 transition-colors duration-300 ${
          theme === 'dark' 
            ? 'text-gray-400 hover:text-[#B384F9]' 
            : 'text-zinc-500 hover:text-black font-medium'
        }`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <Globe size={18} />
        <span className="hidden sm:inline text-sm uppercase">
          {currentLanguage}
        </span>
        <ChevronDown 
          size={14} 
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      
      {/* Dropdown Menu */}
      <div 
        className={`absolute right-0 mt-3 w-40 rounded-xl shadow-xl transition-all duration-200 z-50 border ${
          theme === 'dark' 
            ? 'bg-gray-900/95 backdrop-blur-sm border-gray-800' 
            : 'bg-white border-zinc-200'
        } ${
          isOpen 
            ? 'opacity-100 visible translate-y-0' 
            : 'opacity-0 invisible -translate-y-2'
        }`}
      >
        <div className="py-2 px-1">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`flex items-center gap-3 w-full px-4 py-2 text-left rounded-lg transition-all duration-200 ${
                currentLanguage === lang.code 
                  ? theme === 'dark'
                    ? 'text-[#B384F9] bg-gray-800/50' 
                    : 'text-black bg-zinc-100 font-bold'
                  : theme === 'dark'
                    ? 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    : 'text-zinc-600 hover:bg-zinc-50 hover:text-black'
              }`}
            >
              <span className="text-base">{lang.flag}</span>
              <span className="text-sm">{lang.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;