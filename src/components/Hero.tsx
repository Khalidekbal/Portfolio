import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Github, Linkedin, Cpu, Sparkles, ChevronDown, Binary, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenCVModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCVModal }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 overflow-hidden tech-grid"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[300px] h-[300px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium shadow-lg shadow-cyan-500/10 mb-6 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="font-mono">Available for Mechatronics & Robotics Opportunities</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 leading-[1.15] max-w-3xl"
        >
          Engineering intelligent physical systems at the intersection of{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400">
            hardware
          </span>
          ,{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-blue-400 to-indigo-300">
            firmware
          </span>
          , and{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-emerald-400">
            biomechanics
          </span>
          .
        </motion.h1>

        {/* Subtitle with Tech Stack tags */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-sm sm:text-base lg:text-lg text-slate-400 max-w-2xl leading-relaxed"
        >
          Mechatronics & Automation engineer at Ain Shams University with specialized hands-on expertise in{' '}
          <span className="text-slate-200 font-medium">CAD / SolidWorks</span>,{' '}
          <span className="text-cyan-300 font-medium">Embedded C/C++</span>,{' '}
          <span className="text-slate-200 font-medium">ROS 2</span>,{' '}
          <span className="text-teal-300 font-medium">Digital Signal Processing (sEMG)</span>, and{' '}
          <span className="text-slate-200 font-medium">Closed-Loop Control</span>.
        </motion.p>

        {/* Primary Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href="#projects"
            className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-600 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all duration-300 group"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={onOpenCVModal}
            className="flex items-center space-x-2 px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800/90 text-slate-200 border border-slate-700/80 font-medium text-sm transition-all duration-300 hover:border-cyan-500/50 hover:text-cyan-300 backdrop-blur-md shadow-lg"
          >
            <Download className="w-4 h-4 text-cyan-400" />
            <span>Download CV</span>
          </button>

          <a
            href="#contact"
            className="flex items-center space-x-2 px-5 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800/70 text-slate-300 border border-slate-800 font-medium text-sm transition-all duration-300 hover:text-white backdrop-blur-md"
          >
            <Mail className="w-4 h-4 text-teal-400" />
            <span>Contact Me</span>
          </a>
        </motion.div>

        {/* Social Links & Quick Accents */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex items-center justify-center space-x-5 text-slate-400"
        >
          <a
            href="https://github.com/khalidekbal03"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-200 hover:scale-110"
            title="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href="https://linkedin.com/in/khalidekbal"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-200 hover:scale-110"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href="mailto:khalidekbal03@gmail.com"
            className="p-2.5 rounded-full bg-slate-900/80 border border-slate-800 hover:border-teal-500/50 hover:text-teal-400 transition-all duration-200 hover:scale-110"
            title="Direct Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          <div className="h-4 w-px bg-slate-800" />

          <span className="text-xs font-mono text-slate-400 flex items-center space-x-1.5">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Robotics & Embedded Systems</span>
          </span>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
          className="mt-14 text-slate-500 hover:text-cyan-400 transition-colors flex flex-col items-center space-y-1"
        >
          <span className="text-[10px] tracking-wider uppercase font-mono">Scroll to explore</span>
          <ChevronDown className="w-4 h-4" />
        </motion.a>
      </div>
    </section>
  );
};
