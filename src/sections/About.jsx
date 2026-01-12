import React from 'react';
import { CircleUserRound } from 'lucide-react';
import AboutPopUp from '../components/AboutPopUp';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../contexts/ThemeContext';

const About = ({ gridImage, self }) => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const sectionBg = theme === 'dark' ? gridImage : '';
  const bgColor = theme === 'light' ? 'var(--color-bg)' : 'transparent';

  return (
    <section id="about" className="relative bg-cover bg-center py-10 mb-7"
      style={{ 
        backgroundImage: sectionBg ? `url(${sectionBg})` : 'none',
        backgroundColor: bgColor
      }}
    >
      <div className="container mx-auto relative px-4 sm:px-6">
        <div className="absolute left-0 md:left-[1px] hidden md:flex flex-col items-center animate-pulse">
          <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
            theme === 'dark' ? 'bg-[#B384F9]' : 'bg-black'
          }`} />
          <div className={`w-[2px] sm:w-[3px] h-32 md:h-50 bg-gradient-to-b ${
            theme === 'dark' 
              ? 'from-[#B384F9] to-[#56D364]' 
              : 'from-black to-zinc-400'
          }`} />
          <div className="relative my-2">
            <div className={`absolute -inset-1 rounded-full blur-lg opacity-90 ${
              theme === 'dark' ? 'bg-[#56D364]' : 'bg-zinc-300'
            }`}></div>
            <CircleUserRound
              size={24}
              strokeWidth={1.5}
              className={`relative z-10 w-6 h-6 sm:w-8 sm:h-8 hover:rotate-y-180 transition-transform duration-500 ease-in-out ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}
            />
          </div>
          <div className={`w-[2px] sm:w-[3px] h-32 md:h-110 rounded bg-gradient-to-b ${
            theme === 'dark' 
              ? 'from-[#56D364] to-[#0D1117]' 
              : 'from-zinc-400 to-transparent'
          }`} />
        </div>

        <h2 className={`text-2xl sm:text-3xl font-bold text-center mb-4 pt-5 ${
          theme === 'dark' ? 'text-white' : 'text-black'
        }`}>
          {t('title.about')}
        </h2>
        
        <div className={`w-[60%] sm:w-[40%] md:w-[30%] h-1 bg-gradient-to-r mx-auto mb-8 md:mb-12 animate-pulse ${
          theme === 'dark' 
            ? 'from-[#7EE787] to-[#439c4a]' 
            : 'from-black via-zinc-500 to-zinc-300'
        }`}></div>

        <div className="grid md:grid-cols-2 items-center gap-8 md:gap-12">
          <div className="flex justify-center order-2 md:order-1">
            <img
              src={self}
              alt="self portrait"
              className={`rounded-full w-48 h-48 sm:w-64 sm:h-64 md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] object-cover p-1 ${
                theme === 'dark' 
                  ? 'bg-gradient-to-b from-[#56D364] to-[#e88066]' 
                  : 'bg-gradient-to-b from-black via-zinc-400 to-zinc-200'
              }`}
            />
          </div>

          <div className="order-1 md:order-2">
            <AboutPopUp />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;