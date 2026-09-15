import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Bot, ChevronRight, FileText } from 'lucide-react';

interface NavbarProps {
  onOpenCVModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'CV / Resume', href: '#cv' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 220;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'py-2.5' : 'py-4'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <nav
            className={`flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300 ${
              isScrolled
                ? 'glass-nav shadow-md shadow-slate-200/50 border border-slate-200/90'
                : 'bg-white/80 backdrop-blur-md border border-slate-200/60 shadow-sm'
            }`}
          >
            {/* Monogram / Logo */}
            <a
              href="#home"
              className="flex items-center space-x-2.5 group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-600 via-teal-500 to-blue-600 p-[1.5px] group-hover:scale-105 transition-transform duration-300 shadow-sm">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-cyan-600 group-hover:rotate-12 transition-transform duration-300" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm tracking-wide text-slate-900 group-hover:text-cyan-700 transition-colors">
                  Khalid Mohamed<span className="text-cyan-600">.</span>
                </span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 -mt-0.5">
                  Mechatronics & Robotics
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-cyan-700 bg-cyan-50 border border-cyan-200/80 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            {/* Right Action: Download CV button */}
            <div className="hidden sm:flex items-center space-x-3">
              <a
                href="#cv"
                className="flex items-center space-x-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-semibold text-xs hover:from-cyan-500 hover:to-teal-500 transition-all duration-200 shadow-md shadow-cyan-600/20 hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View CV</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center space-x-2 lg:hidden">
              <a
                href="/cv/Khalid_Mohamed_CV.pdf"
                download
                className="p-2 rounded-full bg-cyan-50 text-cyan-700 border border-cyan-200 sm:hidden"
                aria-label="Download CV"
              >
                <Download className="w-4 h-4" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Slide-Out Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-xs lg:hidden"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-white border-l border-slate-200 p-6 flex flex-col justify-between shadow-2xl lg:hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600 border border-cyan-200">
                      <Bot className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-slate-900 text-sm">Khalid Mohamed</span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="mt-6 flex flex-col space-y-1">
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.href.substring(1);
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                          isActive
                            ? 'text-cyan-700 bg-cyan-50 border border-cyan-200'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronRight className="w-4 h-4 opacity-40" />
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex flex-col space-y-3">
                <a
                  href="/cv/Khalid_Mohamed_CV.pdf"
                  download="Khalid_Mohamed_CV.pdf"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-semibold text-sm shadow-md shadow-cyan-600/20"
                >
                  <Download className="w-4 h-4" />
                  <span>Download CV PDF</span>
                </a>
                <p className="text-[11px] text-center text-slate-400 font-mono">
                  Ain Shams Mechatronics & Automation
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
