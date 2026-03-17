import React, { useState } from 'react';
import { PERSONAL_INFO } from '../constants';
import { GraduationCap, Target, Zap, Sparkles, FileText, AlertCircle } from 'lucide-react';

const About: React.FC = () => {
  const [showResumeAlert, setShowResumeAlert] = useState(false);

  const handleResumeClick = (e: React.MouseEvent) => {
    if (PERSONAL_INFO.resume === '#') {
      e.preventDefault();
      setShowResumeAlert(true);
      setTimeout(() => setShowResumeAlert(false), 3000);
    }
  };

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-black uppercase tracking-widest mb-6">
            <Sparkles size={14} /> Background
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8">About <span className="text-blue-600">Me</span></h2>
          <div className="w-24 h-2 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7 space-y-8">
            <div className="glass-card p-10 rounded-[40px]">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-emerald-500 flex items-center justify-center text-white shadow-lg flex-shrink-0">
                  <span className="font-black text-xl">S</span>
                </div>
                <h3 className="text-2xl font-black">The Narrative</h3>
              </div>
              
              <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-medium">
                <p>
                  I am an ambitious software developer currently exploring the cutting edge of web technology. 
                  My drive comes from the thrill of solving complex architecture puzzles and turning them into 
                  user-friendly experiences that just work.
                </p>
                <p>
                  Specializing in React and modern Node.js ecosystems, I bridge the gap between creative design 
                  and robust engineering. I believe in code that is as beautiful under the hood as it is on the screen.
                </p>
              </div>

              <div className="mt-10 relative inline-block">
                <a 
                  href={PERSONAL_INFO.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleResumeClick}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all shadow-lg shadow-blue-500/20 hover:scale-105 active:scale-95"
                >
                  <FileText size={20} />
                  Download Resume
                </a>
                {showResumeAlert && (
                  <div className="absolute left-0 top-full mt-4 w-48 p-3 glass-card rounded-xl border-blue-500/50 flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 animate-in fade-in slide-in-from-top-2 duration-300">
                    <AlertCircle size={14} />
                    Resume coming soon!
                  </div>
                )}
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mt-12">
                <div className="p-6 rounded-3xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100/50 dark:border-blue-900/20">
                  <Zap className="text-blue-500 mb-4" size={28} />
                  <h4 className="font-black text-lg mb-2">Core Strengths</h4>
                  <p className="text-sm text-slate-500 font-medium">Full-stack architecture, API design, UX optimization.</p>
                </div>
                <div className="p-6 rounded-3xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100/50 dark:border-emerald-900/20">
                  <Target className="text-emerald-500 mb-4" size={28} />
                  <h4 className="font-black text-lg mb-2">Mission</h4>
                  <p className="text-sm text-slate-500 font-medium">Creating impactful digital solutions for real-world problems.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="glass-card p-10 rounded-[40px] border-emerald-500/20">
              <h3 className="text-2xl font-black mb-10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center text-white">
                  < GraduationCap size={24} />
                </div>
                Education
              </h3>
              <div className="space-y-12">
                <div className="relative pl-10">
                  <div className="absolute left-0 top-0 h-full w-px bg-slate-200 dark:bg-slate-800"></div>
                  <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                  
                  <h4 className="font-black text-xl mb-1">B.Tech in Information Technology</h4>
                  <p className="text-emerald-500 font-bold mb-2">VSB Engineering College, Karur</p>
                  <div className="inline-block px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[10px] font-black uppercase tracking-widest text-slate-500">
                    2024 - 2028 • GPA: 8.75
                  </div>
                </div>

                <div className="relative pl-10">
                  <div className="absolute left-0 top-0 h-full w-px bg-slate-200 dark:bg-slate-800"></div>
                  <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                  
                  <h4 className="font-black text-xl mb-1">Senior Secondary Education</h4>
                  <p className="text-slate-500 font-bold mb-2">Sathyam International School</p>
                  <div className="inline-block px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[10px] font-black uppercase tracking-widest text-slate-400">
                    2023 - 2024 • 73.5%
                  </div>
                </div>
              </div>
            </div>

            <div className="aspect-square glass-card rounded-[40px] flex items-center justify-center relative overflow-hidden group">
               <div className="text-[12rem] font-black text-blue-600/10 dark:text-white/5 absolute -right-10 -bottom-10 rotate-12 transition-transform group-hover:scale-125 duration-700">S</div>
               <div className="w-32 h-32 rounded-[30%] bg-gradient-to-br from-blue-600 to-emerald-500 flex items-center justify-center shadow-2xl shadow-blue-500/20 group-hover:scale-110 transition-transform duration-500">
                  <span className="text-white text-6xl font-black">S</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;