import React from 'react';
import { Bot, ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 bg-white py-12 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Branding & Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-full bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600">
              <Bot className="w-3.5 h-3.5" />
            </div>
            <span className="font-bold text-slate-900 text-sm tracking-wide">
              Khalid Mohamed<span className="text-cyan-600">.</span>
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1 max-w-sm">
            Mechatronics & Automation Engineer — Ain Shams University Faculty of Engineering.
          </p>
        </div>

        {/* Center: Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-600">
          <a href="#home" className="hover:text-cyan-700 transition-colors">Home</a>
          <a href="#about" className="hover:text-cyan-700 transition-colors">About</a>
          <a href="#projects" className="hover:text-cyan-700 transition-colors">Projects</a>
          <a href="#certificates" className="hover:text-cyan-700 transition-colors">Certificates</a>
          <a href="#skills" className="hover:text-cyan-700 transition-colors">Skills</a>
          <a href="#experience" className="hover:text-cyan-700 transition-colors">Experience</a>
          <a href="#cv" className="hover:text-cyan-700 transition-colors">CV / Resume</a>
          <a href="#contact" className="hover:text-cyan-700 transition-colors">Contact</a>
        </div>

        {/* Right: Back to Top & Socials */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <a
              href="https://github.com/Khalidekbal"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 hover:text-cyan-700 hover:border-slate-300 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/khalid-mohamed-ekbal-7a85b1365"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 hover:text-blue-700 hover:border-slate-300 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:khalidekbal03@gmail.com"
              className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 hover:text-teal-700 hover:border-slate-300 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-cyan-50 text-cyan-700 border border-cyan-200 hover:bg-cyan-600 hover:text-white transition-all duration-200 shadow-2xs"
            title="Return to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-slate-100 text-center text-[11px] text-slate-400 font-mono">
        © {new Date().getFullYear()} Khalid Mohamed Ekbal. Engineered with React, TypeScript, Tailwind CSS & Framer Motion.
      </div>
    </footer>
  );
};
