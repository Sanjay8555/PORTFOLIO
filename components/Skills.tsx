
import React from 'react';
import { SKILL_CATEGORIES } from '../constants';
import { Code2 } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-black uppercase tracking-widest mb-6">
            <Code2 size={14} /> My Stack
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8">Expertise & <span className="text-blue-600">Skills</span></h2>
          <div className="w-24 h-2 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg font-medium mt-10 leading-relaxed">
            I leverage a powerful set of tools to build high-performance applications, 
            focusing on speed, security, and scalability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div key={idx} className="glass-card p-10 rounded-[40px] hover:border-blue-500/30 transition-all duration-500 group">
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-xl font-black text-slate-800 dark:text-slate-100 group-hover:text-blue-600 transition-colors">
                  {category.title}
                </h3>
                <div className="w-10 h-10 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600">
                  <span className="font-black text-xs">{category.skills.length}</span>
                </div>
              </div>
              <div className="space-y-8">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-3">
                    <div className="flex justify-between items-center px-1">
                      <span className="flex items-center gap-3 font-bold text-sm">
                        <span className="text-xl opacity-90 group-hover:scale-125 transition-transform inline-block">{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800/40 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-600 to-indigo-400 transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
