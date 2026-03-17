
import React from 'react';
import { EXPERIENCES } from '../constants';
import { Briefcase } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1.5 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative pl-8 pb-8 border-l-2 border-slate-200 dark:border-slate-800 last:border-0 last:pb-0">
              <div className="absolute -left-[11px] top-0 p-1.5 bg-blue-500 rounded-full text-white">
                <Briefcase size={12} />
              </div>
              <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold">{exp.role}</h3>
                    <p className="text-blue-500 font-medium text-lg">{exp.company}</p>
                  </div>
                  <span className="px-4 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-sm rounded-full font-medium">
                    {exp.duration}
                  </span>
                </div>
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
