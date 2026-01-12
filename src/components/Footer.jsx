import React from 'react';
import { Mail, Briefcase, Github, Linkedin } from 'lucide-react';
import { FaTelegramPlane } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { useTheme } from '../contexts/ThemeContext';

const Footer = ({ footerImage }) => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const footerStyle = theme === 'dark' 
    ? { backgroundImage: `url(${footerImage})`, backgroundColor: 'transparent' }
    : { 
        backgroundColor: '#ffffff',
        backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)',
        backgroundSize: '24px 24px' 
      };

  return (
    <footer className={`min-h-[300px] md:h-[400px] flex items-center bg-cover bg-center py-8 sm:py-10 border-t transition-colors duration-300 ${
      theme === 'dark' 
        ? 'border-gray-800 text-gray-400' 
        : 'border-zinc-200 text-zinc-600'
    }`}
      style={footerStyle}
    >
      <div className="container mx-auto text-center px-4">
        <div>
          <div className='mb-6 sm:mb-8'>
            <p className={`text-sm sm:text-base font-medium mb-4 ${
              theme === 'dark' ? 'text-[#939AFF]' : 'text-black'
            }`}>
              {t('footer.message')}
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-12 mt-4">
              <div className="flex items-center group">
                <Mail size={16} className={`mr-2 transition-transform group-hover:scale-110 ${
                  theme === 'dark' ? 'text-[#939AFF]' : 'text-black'
                }`} />
                <span>
                  <a 
                    href={`mailto:${t('footer.email')}`} 
                    className={`text-sm sm:text-base transition-colors font-medium ${
                      theme === 'dark' 
                        ? 'hover:text-white' 
                        : 'hover:text-black'
                    }`}
                  >
                    {t('footer.email')}
                  </a>
                </span>
              </div>

              <div className="flex items-center group">
                <Briefcase size={16} className={`mr-2 transition-transform group-hover:scale-110 ${
                  theme === 'dark' ? 'text-[#939AFF]' : 'text-black'
                }`} />
                <span>
                  <a 
                    href={`tel:${t('footer.phone')}`} 
                    className={`text-sm sm:text-base transition-colors font-medium ${
                      theme === 'dark' 
                        ? 'hover:text-white' 
                        : 'hover:text-black'
                    }`}
                  >
                    {t('footer.phone')}
                  </a>
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-6 sm:space-x-10 mb-8">
            {[
              { icon: Github, url: "https://github.com/Seng-Mouyheang" },
              { icon: Linkedin, url: "www.linkedin.com/in/mouyheang-seng-173595271" },
              { icon: FaTelegramPlane, url: "https://t.me/SMHeang" }
            ].map((social, idx) => (
              <a 
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-all duration-300 hover:-translate-y-2 ${
                  theme === 'dark' 
                    ? 'text-gray-400 hover:text-white' 
                    : 'text-zinc-400 hover:text-black'
                }`}
              >
                <social.icon size={24} className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            ))}
          </div>

          <div className={`text-xs sm:text-sm pt-4 border-t max-w-xs mx-auto ${
            theme === 'dark' ? 'border-gray-800 text-gray-500' : 'border-zinc-200 text-zinc-400'
          }`}>
            © {new Date().getFullYear()} {t('footer.copyright')}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;