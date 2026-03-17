import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';
import { Github, Linkedin, FileText, ChevronDown, Sparkles, AlertCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showResumeAlert, setShowResumeAlert] = useState(false);

  useEffect(() => {
    const currentTagline = PERSONAL_INFO.taglines[taglineIndex];
    const typeSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText === currentTagline) {
        setTimeout(() => setIsDeleting(true), 2500);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setTaglineIndex((prev) => (prev + 1) % PERSONAL_INFO.taglines.length);
      } else {
        setDisplayedText(
          isDeleting
            ? currentTagline.substring(0, displayedText.length - 1)
            : currentTagline.substring(0, displayedText.length + 1)
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, taglineIndex]);

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      const navbarOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleResumeClick = (e: React.MouseEvent) => {
    if (PERSONAL_INFO.resume === '#') {
      e.preventDefault();
      setShowResumeAlert(true);
      setTimeout(() => setShowResumeAlert(false), 3000);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          <div className="relative mb-12 animate-in fade-in zoom-in duration-1000">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-[35%] bg-gradient-to-br from-blue-600 to-emerald-500 flex items-center justify-center shadow-2xl shadow-blue-500/30 transform rotate-12 group transition-transform hover:rotate-0 duration-500">
              <span className="text-white text-6xl md:text-7xl font-black -rotate-12 group-hover:rotate-0 transition-transform duration-500">S</span>
            </div>
            <div className="absolute -inset-4 bg-blue-500/20 blur-3xl -z-10 animate-pulse"></div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold mb-8">
            <Sparkles size={14} className="animate-pulse" /> Available for Internships
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
            I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-400">{PERSONAL_INFO.name}</span>
          </h1>
          
          <div className="h-10 mb-14">
            <span className="text-xl md:text-3xl text-slate-500 dark:text-slate-400 font-semibold tracking-tight">
              {displayedText}
              <span className="w-1.5 h-8 bg-blue-500 inline-block ml-1 align-middle animate-pulse"></span>
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 items-center">
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="group relative px-10 py-4 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold transition-all hover:scale-105 active:scale-95 overflow-hidden shadow-2xl shadow-blue-500/20"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            
            <div className="relative">
              <a
                href={PERSONAL_INFO.resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleResumeClick}
                className="px-10 py-4 rounded-2xl border-2 border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-400 font-bold flex items-center gap-3 transition-all hover:bg-slate-50 dark:hover:bg-slate-900 hover:scale-105 active:scale-95"
              >
                <FileText size={20} /> Resume
              </a>
              {showResumeAlert && (
                <div className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 w-48 p-3 glass-card rounded-xl border-blue-500/50 flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <AlertCircle size={14} />
                  Resume coming soon!
                </div>
              )}
            </div>
          </div>

          <div className="flex gap-6 mt-16">
            <div
              className="p-4 rounded-2xl glass-card text-slate-400 dark:text-slate-500 transition-all shadow-lg cursor-default"
              aria-label="GitHub Icon"
            >
              <Github size={24} />
            </div>
            <div
              className="p-4 rounded-2xl glass-card text-slate-400 dark:text-slate-500 transition-all shadow-lg cursor-default"
              aria-label="LinkedIn Icon"
            >
              <Linkedin size={24} />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40 hover:opacity-100 transition-opacity">
        <a href="#about" onClick={(e) => {
          e.preventDefault();
          const element = document.getElementById('about');
          if (element) {
             const navbarOffset = 100;
             const elementPosition = element.getBoundingClientRect().top;
             const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;
             window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          }
        }} className="text-slate-400 p-2">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;