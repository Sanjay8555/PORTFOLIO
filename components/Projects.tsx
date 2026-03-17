import React, { useState, useEffect, useCallback } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { X, Code2, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'web' | 'mobile' | 'ai' | 'tool'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  // Reset image index when switching projects
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [selectedProject]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  const closeModal = useCallback(() => {
    setIsExiting(true);
    setTimeout(() => {
      setSelectedProject(null);
      setIsExiting(false);
    }, 300);
  }, []);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject || !selectedProject.images) return;
    setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images!.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject || !selectedProject.images) return;
    setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images!.length) % selectedProject.images!.length);
  };

  const filteredProjects = filter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web' },
    { id: 'tool', label: 'IoT & Tools' },
    { id: 'ai', label: 'AI & Data' },
  ];

  const projectImages = selectedProject?.images || (selectedProject ? [selectedProject.image] : []);

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold mb-4 uppercase tracking-widest">
              Portfolio
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Featured <span className="text-blue-500">Work</span></h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg font-medium">
              A selection of my recent passion projects and academic work. Click on any project to see a detailed overview.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 p-1.5 rounded-3xl glass-card border-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id as any)}
                className={`px-6 py-2.5 rounded-2xl text-sm font-bold transition-all ${
                  filter === cat.id
                    ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/20'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              onClick={() => setSelectedProject(project)}
              className="group glass-card rounded-[40px] overflow-hidden transition-all duration-500 hover:-translate-y-3 active:scale-95 flex flex-col cursor-pointer transform-gpu"
            >
              <div className="relative aspect-[4/3] overflow-hidden m-4 rounded-[32px]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/30 text-white font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Overview
                  </div>
                </div>
              </div>
              
              <div className="px-8 pb-10 pt-4 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-black group-hover:text-blue-500 transition-colors">{project.title}</h3>
                  <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                    <Maximize2 size={18} />
                  </div>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8 flex-1 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-50 dark:bg-slate-800/50 text-[10px] font-black uppercase tracking-widest rounded-lg text-slate-500 dark:text-slate-400 border border-slate-100 dark:border-slate-800">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-3 py-1 bg-slate-50 dark:bg-slate-800/50 text-[10px] font-black uppercase tracking-widest rounded-lg text-slate-400">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Overview Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-hidden">
          <div 
            className={`absolute inset-0 bg-slate-950/70 ${isExiting ? 'animate-modal-overlay-out' : 'animate-modal-overlay'}`}
            onClick={closeModal}
          ></div>
          
          <div className={`relative w-full max-w-5xl bg-white dark:bg-slate-900 rounded-[40px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col lg:flex-row h-full max-h-[90vh] lg:h-auto ${isExiting ? 'animate-modal-content-out' : 'animate-modal-content'}`}>
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 z-10 p-3 bg-white/10 hover:bg-white/20 dark:bg-slate-800/50 dark:hover:bg-slate-700/50 backdrop-blur-md rounded-2xl text-slate-800 dark:text-white transition-all hover:rotate-90"
            >
              <X size={24} />
            </button>

            {/* Project Image Gallery */}
            <div className="lg:w-3/5 relative bg-slate-100 dark:bg-slate-800 h-64 lg:h-auto overflow-hidden group/gallery">
              <img 
                key={currentImageIndex}
                src={projectImages[currentImageIndex]} 
                alt={selectedProject.title}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              
              {projectImages.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-2xl text-white opacity-0 group-hover/gallery:opacity-100 transition-all"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-2xl text-white opacity-0 group-hover/gallery:opacity-100 transition-all"
                  >
                    <ChevronRight size={24} />
                  </button>
                  <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2">
                    {projectImages.map((_, idx) => (
                      <button 
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'w-8 bg-blue-500' : 'bg-white/40 hover:bg-white/60'}`}
                      />
                    ))}
                  </div>
                </>
              )}

              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-slate-950/90 to-transparent">
                <div className="inline-block px-4 py-1.5 rounded-xl bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.2em] mb-3">
                  {selectedProject.category === 'tool' ? 'IoT & Electronics' : selectedProject.category === 'web' ? 'Web Application' : 'Machine Learning'}
                </div>
                <h3 className="text-3xl md:text-5xl font-black text-white">{selectedProject.title}</h3>
              </div>
            </div>

            {/* Project Info */}
            <div className="lg:w-2/5 p-8 md:p-12 overflow-y-auto custom-scrollbar flex flex-col">
              <div className="mb-8">
                <h4 className="text-xs font-black uppercase tracking-widest text-blue-500 mb-4 flex items-center gap-2">
                  <Code2 size={14} /> Project Overview
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed font-medium">
                  {selectedProject.description}
                </p>
              </div>

              <div className="mb-10">
                <h4 className="text-xs font-black uppercase tracking-widest text-blue-500 mb-4">Tech Stack</h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.tech.map((t, i) => (
                    <span key={i} className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-sm font-bold rounded-xl text-slate-700 dark:text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-auto pt-8 border-t border-slate-100 dark:border-slate-800">
                <p className="text-slate-400 text-xs italic">
                  Project details and architectural documentation are available upon request.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;