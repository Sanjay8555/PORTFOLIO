import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Github, Linkedin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
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

  return (
    <footer className="bg-white dark:bg-slate-900 pt-16 pb-8 border-t dark:border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
              SANJAY S.
            </h3>
            <p className="text-slate-500 dark:text-slate-400 max-w-xs">
              Crafting robust software solutions and creating seamless user experiences. Let's build the future together.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
            <div className="grid grid-cols-2 gap-3">
              <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="text-slate-500 hover:text-blue-500 transition-colors">About</a>
              <a href="#skills" onClick={(e) => handleLinkClick(e, 'skills')} className="text-slate-500 hover:text-blue-500 transition-colors">Skills</a>
              <a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')} className="text-slate-500 hover:text-blue-500 transition-colors">Projects</a>
              <a href="#experience" onClick={(e) => handleLinkClick(e, 'experience')} className="text-slate-500 hover:text-blue-500 transition-colors">Experience</a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Social Media</h4>
            <div className="flex gap-4">
              <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-400 dark:text-slate-600 cursor-default">
                <Github size={20} />
              </div>
              <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-400 dark:text-slate-600 cursor-default">
                <Linkedin size={20} />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            Copyright © {year} {PERSONAL_INFO.name}. All Rights Reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-500 hover:bg-blue-500 hover:text-white transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;