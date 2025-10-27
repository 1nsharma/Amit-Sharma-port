

import React, { useState, useEffect, useRef } from 'react';
// FIX: Changed react-router-dom import to a wildcard import to address issues where its members were not found as exports.
import * as ReactRouterDom from 'react-router-dom';
import Navbar from './components/Navbar';
import MobileNav from './components/MobileNav';
import ScrollProgressBar from './components/ScrollProgressBar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Services from './components/Portfolio'; // Repurposed Portfolio as Services
import Projects from './components/Projects';
import Insights from './components/Insights';
import AITools from './components/AITools';
import Workshops from './components/Workshops';
import FuturePlans from './components/FuturePlans';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import { useTranslation } from './i18n';

// Custom hook to manage the application's theme (dark/light mode)
const useTheme = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        return 'dark';
      }
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  
  return { theme, toggleTheme, isDarkMode: theme === 'dark' };
};

// Custom hook to detect which section is currently active in the viewport
const useActiveSection = (sectionIds: string[]): string => {
  const [activeSection, setActiveSection] = useState<string>('');
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' } 
    );

    const currentObserver = observer.current;
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        currentObserver.observe(element);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element && currentObserver) {
          currentObserver.unobserve(element);
        }
      });
    };
  }, [sectionIds]);

  return activeSection;
};

// Component to render the main portfolio page layout
const PortfolioPage: React.FC = () => (
  <>
    <Header />
    <About />
    <Skills />
    <Experience />
    <Education />
    <Services />
    <Projects />
    <Insights />
    <AITools />
    <Workshops />
    <FuturePlans />
    <Contact />
  </>
);

const App: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { t } = useTranslation();
  const location = ReactRouterDom.useLocation();

  const sectionIds = Object.keys(t<{[key:string]: string}>('sections'));
  const activeSection = useActiveSection(sectionIds);
  
  // Scroll to top on route change for a better navigation experience
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="font-inter text-slate-100 transition-colors duration-300">
      <ScrollProgressBar />
      <Navbar activeSection={activeSection} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main>
        <ReactRouterDom.Routes>
          <ReactRouterDom.Route path="/" element={
              <div className="container mx-auto max-w-7xl my-12 p-4 sm:p-8 bg-black/20 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20">
                <PortfolioPage />
              </div>
            } 
          />
          <ReactRouterDom.Route path="/projects/:projectId" element={<ProjectDetail />} />
        </ReactRouterDom.Routes>
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
};

export default App;