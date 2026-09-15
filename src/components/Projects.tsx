import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, ArrowUpRight, Cpu, Layers, Activity, Sparkles, Filter, ChevronRight, CheckCircle2 } from 'lucide-react';
import { projectsData, Project } from '../data/projects';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    'All',
    'Robotics & Mechatronics',
    'Biomechatronics',
    'Embedded Systems'
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 relative tech-dots">
      {/* Background glow */}
      <div className="absolute left-1/2 top-10 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
            <Bot className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Featured Engineering Projects
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Autonomous medical robotics, real-time biomechatronics pipelines, industrial PLC lines, and high-voltage EV powertrain modeling.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20'
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="group relative rounded-2xl glass-panel border border-slate-800/90 flex flex-col justify-between overflow-hidden hover:border-cyan-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1.5"
              >
                {/* Accent Top Line */}
                <div className="h-1 w-full bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-500 opacity-60 group-hover:opacity-100 transition-opacity" />

                <div className="p-6 flex-1 flex flex-col">
                  {/* Category & Course meta */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      {project.category}
                    </span>
                    <span className="text-[11px] text-slate-500 font-mono truncate max-w-[150px]">
                      {project.courseOrContext.split('/')[0]}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Key Highlights list (First 2) */}
                  <div className="mt-4 space-y-1.5 flex-1">
                    {project.highlights.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-[11px] sm:text-xs text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                        <span className="line-clamp-2">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Metrics preview pill */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="mt-4 p-2 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-around text-center">
                      {project.metrics.slice(0, 2).map((m) => (
                        <div key={m.label} className="px-1">
                          <span className="block text-xs font-bold text-cyan-400 font-mono">{m.value}</span>
                          <span className="text-[10px] text-slate-500">{m.label}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack Pills */}
                  <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-slate-900 text-[10px] font-mono text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded bg-slate-900 text-[10px] font-mono text-slate-500 border border-slate-800">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer Action Button */}
                <div className="px-6 py-3.5 bg-slate-900/60 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full flex items-center justify-center space-x-1.5 py-2 rounded-xl bg-slate-800/80 hover:bg-cyan-500 hover:text-slate-950 text-slate-200 text-xs font-semibold transition-all duration-200 group/btn"
                  >
                    <span>Explore Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
