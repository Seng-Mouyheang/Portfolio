import React from 'react';
import SkillsCategory from '../components/SkillsCategory';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../contexts/ThemeContext';

const Skill = ({skillImages}) => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const categories = t("skills", { returnObjects: true });

  const skillCategories = categories.map((category) => {
    const imageKey = category.title.toLowerCase().includes('frontend') ? 'frontend' :
                     category.title.toLowerCase().includes('database') ? 'database' :
                     'languages';
    
    return {
      ...category,
      images: skillImages[imageKey] || []
    };
  });

  return (
    <section id="skills" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className={`text-2xl sm:text-3xl font-bold text-center mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}>
            {t("title.skills")}
          </h2>
          
          <div className={`w-[60%] sm:w-[40%] md:w-[30%] h-1 bg-gradient-to-r mx-auto mb-8 md:mb-14 animate-pulse ${
            theme === 'dark' 
              ? 'from-blue-300 to-blue-600' 
              : 'from-black via-zinc-400 to-zinc-200'
          }`}></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {Array.isArray(skillCategories) && skillCategories.map((category, index) => (
            <SkillsCategory key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;