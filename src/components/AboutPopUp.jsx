import { useState } from 'react';
import { X, Play, Ellipsis, Mail, Briefcase, CornerDownRight, GraduationCap, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../contexts/ThemeContext';

const AboutPopUp = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState('description');
  const interests = t('about.interests', { returnObjects: true });

  // Reusable icon style helper
  const iconColorClass = theme === 'dark' ? 'text-[#7EE787]' : 'text-black';
  const hoverTextClass = theme === 'dark' ? 'hover:text-[#7EE787]' : 'hover:text-zinc-600';

  const tabContent = {
    description: (
      <>
        <p className={`whitespace-pre-line text-justify text-md sm:text-base ${
          theme === 'dark' ? 'text-gray-200' : 'text-zinc-800'
        }`}>
          {t('about.description')}
        </p>

        <div className="space-y-2 mt-8">
          <div className="flex items-center">
            <Mail size={18} className={`mr-2 sm:mr-3 flex-shrink-0 transition-all duration-300 hover:-translate-y-1 ${iconColorClass}`} />
            <span>
              <a href={`mailto:${t('about.email')}`} className={`text-sm sm:text-base break-all transition-colors ${theme === 'dark' ? 'text-gray-200' : 'text-zinc-800'} ${hoverTextClass}`}>
                {t('about.email')}
              </a>
            </span>
          </div>
          <div className="flex items-center">
            <Briefcase size={18} className={`mr-2 sm:mr-3 my-auto flex-shrink-0 transition-all duration-300 hover:-translate-y-1 ${iconColorClass}`} />
            <span className={`text-sm sm:text-base ${theme === 'dark' ? 'text-gray-200' : 'text-zinc-800'}`}>
              {t('about.location')}
            </span>
          </div>
        </div>
      </>
    ),
    education: (
      <div className="space-y-4 sm:space-y-6">
        {[ 'aupp', 'fhsu', 'hs' ].map((key) => (
          <div key={key} className={`border-b pb-4 sm:pb-6 ${theme === 'dark' ? 'border-gray-700' : 'border-zinc-200'}`}>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0">
              <div className="flex items-center">
                <GraduationCap size={18} className={`mr-2 sm:mr-3 flex-shrink-0 ${iconColorClass}`} />
                <span className={`text-sm sm:text-base font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-black'}`}>
                  {t(`about.education.${key}.title`)}
                </span>
              </div>
              <span className={`text-sm sm:text-base sm:ml-auto ${theme === 'dark' ? 'text-gray-400' : 'text-zinc-500'}`}>
                {t(`about.education.${key}.year`)}
              </span>
            </div>
            <div className="flex items-center pt-2 gap-2">
              <CornerDownRight size={16} className={`ml-6 sm:ml-8 ${iconColorClass}`} />
              <span className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-zinc-600'}`}>
                {t(`about.education.${key}.degree`)}
              </span>
            </div>
          </div>
        ))}
      </div>
    ),
    interests: (
      <div className="space-y-3 sm:space-y-4">
        {interests.map((interest, index) => (
          <div key={index} className="flex items-center">
            <Heart size={18} className={`mr-2 sm:mr-3 ${iconColorClass}`} />
            <span className={`text-sm sm:text-base ${theme === 'dark' ? 'text-gray-200' : 'text-zinc-800'}`}>
              {interest}
            </span>
          </div>
        ))}
      </div>
    )
  };

  return (
    <div className={`rounded-xl sm:rounded-2xl shadow-lg overflow-hidden border ${
      theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-zinc-200'
    }`}>
      <div className={`flex p-2 sm:p-4 gap-1 sm:gap-2 ${
        theme === 'dark' ? 'bg-[#30363D]' : 'bg-zinc-100'
      }`}>
        <div className="bg-red-400 w-2 h-2 sm:w-3 sm:h-3 rounded-full"></div>
        <div className="bg-yellow-400 w-2 h-2 sm:w-3 sm:h-3 rounded-full"></div>
        <div className="bg-green-400 w-2 h-2 sm:w-3 sm:h-3 rounded-full"></div>
      </div>
      
      <div className={`h-1 animate-pulse ${
        theme === 'dark' 
          ? 'bg-gradient-to-r from-[#56D364] to-[#e88066]' 
          : 'bg-gradient-to-r from-black via-zinc-400 to-black'
      }`} />

      <div className={`flex flex-wrap ${
        theme === 'dark' ? 'bg-[#161e29]' : 'bg-zinc-50'
      }`}>
        {['description', 'education', 'interests'].map((tab) => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex p-2 sm:p-3 pr-3 sm:pr-5 gap-1 sm:gap-2 border-r transition-colors flex-1 sm:flex-none min-w-0 ${
              activeTab === tab 
                ? theme === 'dark' ? 'bg-gray-800 text-white border-gray-800' : 'bg-white text-black border-zinc-200'
                : theme === 'dark' ? 'text-gray-600 hover:bg-gray-900 border-gray-800' : 'text-zinc-400 hover:bg-zinc-100 border-zinc-200'
            }`}
          >
            <X size={16} className="m-auto flex-shrink-0" />
            <span className="truncate text-xs sm:text-sm font-medium">{t(`about.subtitle.${tab}`)}</span>
          </button>
        ))}
      </div>

      <div className="p-3 sm:p-4 md:p-6">
        {tabContent[activeTab]}
      </div>
    </div>
  );
};

export default AboutPopUp;