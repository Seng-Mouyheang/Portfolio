import React, { useState, useEffect, Suspense } from 'react';
import './i18n';
import { ThemeProvider } from './contexts/ThemeContext';

import homeImage from './assets/home.png'
import moonImage from './assets/moon.png'
import lightImage from './assets/light.png'
import self from './assets/self.jpg'
import gridImage from './assets/grid.png'
import footerImage from './assets/footer.png'

import html from './assets/html.png'
import css from './assets/css.png'
import js from './assets/js.png'
import react from './assets/react.png'
import tailwind from './assets/tailwind.png'
import mysql from './assets/sql.png'
import postgresql from './assets/postgre.png'
import github from './assets/github.svg'
import git from './assets/git.png'
import python from './assets/python.png'
import java from './assets/java.png'
import php from './assets/php.png'
import cpp from './assets/cpp.png'

import Navigation from './components/Navigation';
import Home from './sections/Home';
import About from './sections/About';
import Project from './sections/Project';
import Skill from './sections/Skill';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const skillImages = {
    frontend: [
      { src: html, alt: 'HTML5' },
      { src: css, alt: 'CSS3' },
      { src: js, alt: 'JavaScript' },
      { src: react, alt: 'React' },
      { src: tailwind, alt: 'Tailwind CSS' }
    ],
    database: [
      { src: mysql, alt: 'MySQL' },
      { src: postgresql, alt: 'PostgreSQL' },
      { src: git, alt: 'Git' },
      { src: github, alt: 'GitHub' }
    ],
    languages: [
      { src: python, alt: 'Python' },
      { src: cpp, alt: 'C++' },
      { src: java, alt: 'Java' },
      { src: php, alt: 'PHP' }
    ]
  };

  return (
    <ThemeProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="font-sans bg-[var(--color-bg)] text-[var(--color-text)]">
          <Navigation 
            activeSection={activeSection}
            isMenuOpen={isMenuOpen}
            isScrolled={isScrolled}
            scrollToSection={scrollToSection}
            setIsMenuOpen={setIsMenuOpen}
          />

          <main className="overflow-x-hidden">
            <Home 
              scrollToSection={scrollToSection}
              homeImage={homeImage}
              lightImage={lightImage}
              moonImage={moonImage}
            />

            <About 
              gridImage={gridImage}
              self={self}
            />

            <Project />

            <Skill skillImages={skillImages}/>

            <Contact />
          </main>

          <Footer footerImage={footerImage}/>

          <ScrollToTop 
            isScrolled={isScrolled}
            scrollToTop={scrollToTop}
          />
        </div>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;