import React from 'react';
import { Menu, X, Home, User, Briefcase, FileText, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../contexts/ThemeContext';

const Navigation = ({ activeSection, isMenuOpen, isScrolled, scrollToSection, setIsMenuOpen }) => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const navItems = [
    { id: 'home', label: t('nav.home'), icon: <Home size={18} /> },
    { id: 'about', label: t('nav.about'), icon: <User size={18} /> },
    { id: 'projects', label: t('nav.projects'), icon: <Briefcase size={18} /> },
    { id: 'skills', label: t('nav.skills'), icon: <FileText size={18} /> },
    { id: 'contact', label: t('nav.contact'), icon: <Mail size={18} /> }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? theme === 'dark' 
          ? 'bg-gray-900/95 backdrop-blur-sm shadow-md py-3' 
          : 'bg-white/95 backdrop-blur-sm shadow-md py-3'
        : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <div className={`text-xl font-bold transition-colors duration-300 ${
          theme === 'dark' ? 'text-[#B384F9]' : 'text-black'
        }`}>
          S.Heang
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex items-center space-x-1 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95 ${
                activeSection === item.id 
                  ? (theme === 'dark' ? 'text-[#B384F9]' : 'text-black font-bold border-b-2 border-black')
                  : (theme === 'dark' ? 'text-gray-400 hover:text-[#B384F9]' : 'text-zinc-500 hover:text-black')
              }`}
            >
              {item.icon}
              <span className="text-sm lg:text-base">{item.label}</span>
            </button>
          ))}
          
          <div className="flex items-center border-l border-zinc-200 dark:border-gray-700 pl-6 space-x-6">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
        
        {/* Mobile Menu Button & Controls */}
        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher />
          <ThemeToggle />
          <button 
            className={`p-2 transition-colors ${theme === 'dark' ? 'text-gray-200' : 'text-black'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden absolute top-full w-full left-0 border-t ${
          theme === 'dark' 
            ? 'bg-gray-900 border-gray-800 shadow-lg' 
            : 'bg-white border-zinc-100 shadow-lg'
        }`}>
          <div className="flex flex-col py-4">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-6 py-4 text-left transition-colors font-medium ${
                  activeSection === item.id 
                    ? (theme === 'dark' ? 'bg-[#B384F9]/10 text-[#B384F9]' : 'bg-zinc-100 text-black border-l-4 border-black')
                    : (theme === 'dark' ? 'text-gray-400 hover:bg-gray-800 hover:text-white' : 'text-zinc-500 hover:bg-zinc-50 hover:text-black')
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;