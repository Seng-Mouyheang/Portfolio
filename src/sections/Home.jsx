import React from 'react';
import { ChevronUp, Github, Linkedin } from 'lucide-react';
import { FaTelegramPlane } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { useTheme } from '../contexts/ThemeContext';
import Typewriter from 'typewriter-effect';

const Home = ({ scrollToSection, homeImage, lightImage, moonImage }) => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const link = "https://drive.google.com/file/d/1ph4YCfaUheE--DNVev9DmhEJAkblzmC2/view?usp=sharing";

  const backgroundImage = theme === 'dark' ? homeImage : "";

  return (
    <section id="home" className="min-h-screen flex items-center justify-start relative overflow-hidden pt-16 md:pt-20">
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center justify-between bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="md:w-2/3 mb-10 md:mb-0 text-center md:text-left">
            <div className="mb-6 md:mb-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
                <Typewriter 
                  options={{
                    strings: [t('home.name')],
                    autoStart: true,
                    loop: false,
                    deleteSpeed: Infinity,
                    delay: 50,
                    cursor: `<span style="color: ${theme === 'dark' ? '#B384F9' : '#000000'}">|</span>`
                  }}  
                />
              </h1>
              <h2 className={`text-xl sm:text-2xl md:text-3xl mb-4 md:mb-6 ${
                theme === 'dark' ? 'text-[#B384F9]' : 'text-black font-extrabold'
              }`}>
                {t('home.title')}
              </h2>
              <p className={`text-base sm:text-lg md:text-xl max-w-2xl mb-8 md:mb-10 mx-auto md:mx-0 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-700'
              }`}>
                {t('home.subtitle')}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 justify-center md:justify-start">
              <button className={`relative px-6 sm:px-8 py-3 text-white rounded-lg font-medium 
                transition-all duration-300 text-sm sm:text-base shadow-lg hover:-translate-y-1 hover:shadow-xl active:scale-95 group overflow-hidden ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-[#B384F9] to-[#9c6de5] hover:shadow-[#B384F9]/40'
                    : 'bg-black hover:bg-zinc-800 hover:shadow-black/20'
                }`}>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"/>
                <a href={link} target="_blank" rel="noopener noreferrer" className="relative z-10">
                  {t('home.cv')}
                </a>
              </button>

              <button 
                onClick={() => scrollToSection('contact')}
                className={`relative px-6 sm:px-8 py-3 border-2 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base hover:-translate-y-1 hover:shadow-lg group overflow-hidden ${
                  theme === 'dark'
                    ? 'border-[#B384F9] text-[#B384F9] hover:text-white'
                    : 'border-black text-black hover:text-white'
                }`}
              >
                <span className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-[#B384F9] to-[#9c6de5]'
                    : 'bg-black'
                }`}/>
                <span className="relative z-10 group-hover:text-white transition-colors">
                  {t('home.contact')}
                </span>
              </button>
            </div>

            <div className="flex justify-center md:justify-start gap-4 mb-6">
              <a href="https://github.com/Seng-Mouyheang" className={`transition-all duration-300 hover:-translate-y-1 hover:scale-105 ${
                theme === 'dark' ? 'text-gray-400 hover:text-[#B384F9]' : 'text-gray-500 hover:text-black'
              }`}>
                <Github size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a href="www.linkedin.com/in/mouyheang-seng-173595271" className={`transition-all duration-300 hover:-translate-y-1 hover:scale-105 ${
                theme === 'dark' ? 'text-gray-400 hover:text-[#B384F9]' : 'text-gray-500 hover:text-black'
              }`}>
                <Linkedin size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a href="https://t.me/SMHeang" className={`transition-all duration-300 hover:-translate-y-1 hover:scale-105 ${
                theme === 'dark' ? 'text-gray-400 hover:text-[#B384F9]' : 'text-gray-500 hover:text-black'
              }`}>
                <FaTelegramPlane size={20} className="sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
          
          <div className='hidden lg:block w-1/3'>
            <div className="flex flex-col items-end ml-auto gap-20 lg:gap-30">
              {theme === 'dark' ? (
                <>
                  <img src={lightImage} alt="Light theme" className="w-[70%]" />
                  <img src={moonImage} alt="Dark theme" />
                </>
              ) : (
                <>
                  <img src={lightImage} alt="Light theme" className="w-[70%] grayscale" />
                  <img src={moonImage} alt="Dark theme" className="opacity-40 grayscale" />
                </>
              )}
            </div>
          </div>
        </div>
        
        {/* Scroll Down Button */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className={`transition-colors ${
              theme === 'dark' ? 'text-gray-200 hover:text-[#B384F9]' : 'text-gray-400 hover:text-black'
            }`}
          >
            <ChevronUp size={28} className="rotate-180" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;