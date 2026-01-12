import React from 'react';
import { Globe, Database, Cog } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const SkillsCategory = ({ category }) => {
  const { theme } = useTheme();
  const { title, icon, skills, images } = category;
  
  const IconComponent = { Globe, Database, Cog }[icon];

  //  read the JSON
  const getColorClass = () => category.colorClasses?.[theme] || 'text-black';
  const getPercentageColorClass = () => category.percentageColorClasses?.[theme] || 'text-black';
  const getBarGradientClass = () => category.barGradientClasses?.[theme] || 'from-black to-zinc-400';
  const getGradient = () => category.gradients?.[theme] || 'from-black to-zinc-200';

  return (
    <div className={`rounded-2xl border transition-all duration-300 hover:-translate-y-2 ${
      theme === 'dark' ? 'bg-[#161B22] border-gray-700' : 'bg-white border-zinc-200 shadow-lg'
    }`}>
      <WindowHeader theme={theme} />
      <div className={`bg-gradient-to-r ${getGradient()} h-1 animate-pulse`} />
      
      <div className='p-4 sm:p-6 md:p-8'>
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <IconComponent size={24} className={`w-6 h-6 sm:w-8 sm:h-8 ${getColorClass()}`} />
          <h3 className={`text-lg sm:text-xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}>
            {title}
          </h3>
        </div>
        
        {/* Logos */}
        <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 md:mb-8 justify-center">
          {Array.isArray(images) && images.map((img, index) => (
            <img 
              key={index}
              src={img.src} 
              alt={img.alt} 
              className={`w-10 h-10 sm:w-12 sm:h-12 object-contain transition-all hover:scale-110 ${
                theme === 'light' ? 'grayscale opacity-70 hover:grayscale-0 hover:opacity-100' : ''
              }`} 
            />
          ))}
        </div>

        <div className="space-y-4 sm:space-y-6">
          {Array.isArray(skills) && skills.map((skill, index) => (
            <SkillBar 
              key={index} 
              skill={skill} 
              percentageColorClass={getPercentageColorClass()}
              barGradientClass={getBarGradientClass()}
              theme={theme}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const WindowHeader = ({ theme }) => (
  <div className={`flex p-3 sm:p-4 gap-2 rounded-t-2xl ${
    theme === 'dark' ? 'bg-[#30363D]' : 'bg-zinc-100'
  }`}>
    <div className="bg-red-400 w-2 h-2 sm:w-3 sm:h-3 rounded-full"></div>
        <div className="bg-yellow-400 w-2 h-2 sm:w-3 sm:h-3 rounded-full"></div>
        <div className="bg-green-400 w-2 h-2 sm:w-3 sm:h-3 rounded-full"></div>
  </div>
);

const SkillBar = ({ skill, percentageColorClass, barGradientClass, theme }) => (
  <div>
    <div className="flex justify-between mb-1 sm:mb-2">
      <span className={`font-medium text-sm sm:text-base ${
        theme === 'dark' ? 'text-gray-300' : 'text-black'
      }`}>
        {skill?.name}
      </span>
      <span className={`${percentageColorClass} font-bold text-sm sm:text-base`}>
        {skill?.level}%
      </span>
    </div>
    <div className={`w-full rounded-full h-2 ${
      theme === 'dark' ? 'bg-gray-800' : 'bg-zinc-200'
    }`}>
      <div 
        className={`bg-gradient-to-r ${barGradientClass} h-2 rounded-full transition-all duration-1000 ease-out`} 
        style={{ width: `${skill?.level}%` }}
      ></div>
    </div>
  </div>
);

export default SkillsCategory