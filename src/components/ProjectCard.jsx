import React from 'react';
import { Github, ExternalLink } from 'lucide-react'; // Added icons
import { useTheme } from '../contexts/ThemeContext';

const ProjectCard = ({ project }) => {
  const { theme } = useTheme();

  return (
    <div className={`rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border group ${
      theme === 'dark' ? 'bg-[#161B22] border-gray-800' : 'bg-white border-zinc-200'
    }`}>
      <div className={`flex p-3 sm:p-4 gap-2 rounded-t-2xl ${
        theme === 'dark' ? 'bg-[#30363D]' : 'bg-zinc-100'
      }`}>
        <div className="bg-red-400 w-2 h-2 sm:w-3 sm:h-3 rounded-full"></div>
        <div className="bg-yellow-400 w-2 h-2 sm:w-3 sm:h-3 rounded-full"></div>
        <div className="bg-green-400 w-2 h-2 sm:w-3 sm:h-3 rounded-full"></div>
      </div>
      
      <div className={`h-1 animate-pulse ${
        theme === 'dark' 
          ? 'bg-gradient-to-r from-[#56D364] to-blue-600' 
          : 'bg-gradient-to-r from-black via-zinc-500 to-zinc-200'
      }`} />
      
      <div className="p-4 sm:p-6">
        <div className="flex justify-between items-center mb-3 sm:mb-4">
          <h3 className={`text-lg sm:text-xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}>
            {project.title}
          </h3>
          
          {project.github && (
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-all duration-300 hover:scale-110 ${
                theme === 'dark' 
                  ? 'text-gray-400 hover:text-white' 
                  : 'text-zinc-400 hover:text-black'
              }`}
              title="View Source Code"
            >
              <Github size={22} />
            </a>
          )}
        </div>
        
        <p className={`text-sm sm:text-base mb-4 sm:mb-6 line-clamp-2 ${
          theme === 'dark' ? 'text-gray-400' : 'text-zinc-600'
        }`}>
          {project.description}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
          {Array.isArray(project.tech) && project.tech.map((tech, index) => (
            <span key={index} className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium border ${
              theme === 'dark'
                ? 'bg-orange-200/10 text-orange-200 border-orange-200/20'
                : 'bg-zinc-100 text-black border-zinc-200'
            }`}>
              {tech}
            </span>
          ))}
        </div>
        
        {(project.link || project.github) && (
          <div className="flex gap-3 mt-4">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 text-white rounded-lg text-center transition-all duration-300 text-sm font-bold hover:-translate-y-1 ${
                  theme === 'dark'
                    ? 'bg-blue-600 hover:bg-blue-700 shadow-blue-900/20'
                    : 'bg-black hover:bg-zinc-800 shadow-zinc-200'
                }`}
              >
                <span>Live Demo</span>
                <ExternalLink size={16} />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 px-4 py-2 rounded-lg text-center transition-all duration-300 text-sm font-bold border-2 hover:-translate-y-1 ${
                  theme === 'dark'
                    ? 'border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white'
                    : 'border-zinc-200 text-zinc-600 hover:border-black hover:text-black'
                }`}
              >
                Source Code
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;