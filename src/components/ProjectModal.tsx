import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Cpu, Code2, AlertCircle, CheckCircle, TrendingUp, Layers, Check } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.4, bounce: 0.15 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c101d] border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col z-10 overflow-hidden"
        >
          {/* Header */}
          <div className="px-6 py-5 border-b border-slate-800 bg-slate-900/60 flex items-start justify-between">
            <div>
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  {project.category}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {project.courseOrContext}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-100 mt-2">
                {project.title}
              </h2>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0 ml-4"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
            {/* Project Overview */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-400 font-mono">
                System Overview
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Metrics Grid */}
            {project.metrics && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-center text-center"
                  >
                    <span className="text-lg sm:text-xl font-bold text-cyan-400 font-mono">
                      {m.value}
                    </span>
                    <span className="text-xs text-slate-400 mt-0.5">{m.label}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Problem & Solution Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20">
                <div className="flex items-center space-x-2 text-red-400 font-semibold text-sm mb-2">
                  <AlertCircle className="w-4 h-4" />
                  <span>Engineering Challenge / Problem</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
                <div className="flex items-center space-x-2 text-emerald-400 font-semibold text-sm mb-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Mechatronics Solution</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Technical Highlights */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-400 font-mono mb-3">
                Key Engineering Highlights
              </h3>
              <ul className="space-y-2.5">
                {project.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-300"
                  >
                    <div className="p-1 rounded-full bg-cyan-500/10 text-cyan-400 shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hardware vs Software Specifications */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Hardware */}
              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                <div className="flex items-center space-x-2 text-cyan-400 font-semibold text-sm mb-3">
                  <Cpu className="w-4 h-4" />
                  <span>Hardware & Kinematics Specs</span>
                </div>
                <div className="space-y-2">
                  {project.hardwareSpecs.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex flex-col text-xs border-b border-slate-800/60 pb-1.5 last:border-none"
                    >
                      <span className="text-slate-400 font-mono">{spec.label}</span>
                      <span className="text-slate-200 font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Software */}
              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                <div className="flex items-center space-x-2 text-teal-400 font-semibold text-sm mb-3">
                  <Code2 className="w-4 h-4" />
                  <span>Firmware & Software Specs</span>
                </div>
                <div className="space-y-2">
                  {project.softwareSpecs.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex flex-col text-xs border-b border-slate-800/60 pb-1.5 last:border-none"
                    >
                      <span className="text-slate-400 font-mono">{spec.label}</span>
                      <span className="text-slate-200 font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 font-mono mb-2.5">
                Technologies & Tools Applied
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-slate-800/80 text-xs font-mono text-cyan-300 border border-slate-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/70 flex items-center justify-between">
            <div className="flex items-center space-x-2 text-xs text-slate-400">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>Full engineering case study available on request</span>
            </div>

            <div className="flex items-center space-x-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              )}
              <button
                onClick={onClose}
                className="px-4 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-semibold transition-colors"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
