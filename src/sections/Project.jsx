import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../contexts/ThemeContext';

const Project = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const projects = t('projects', { returnObjects: true });
  
  return (
    <section id="projects" className="py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className={`text-2xl sm:text-3xl font-bold text-center mb-4 ${
          theme === 'dark' ? 'text-white' : 'text-black'
        }`}>
          {t('title.projects')}
        </h2>
        
        <div className={`w-[60%] sm:w-[40%] md:w-[30%] h-1 bg-gradient-to-r mx-auto mb-8 md:mb-12 animate-pulse ${
          theme === 'dark' 
            ? 'from-orange-200 to-orange-600' 
            : 'from-black via-zinc-400 to-zinc-200'
        }`}></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {Array.isArray(projects) && projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;