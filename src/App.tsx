import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Certificates } from './components/Certificates';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CVModal } from './components/CVModal';

export const App: React.FC = () => {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Navigation */}
      <Navbar onOpenCVModal={() => setCvModalOpen(true)} />

      {/* Main Sections */}
      <main>
        <Hero onOpenCVModal={() => setCvModalOpen(true)} />
        <About />
        <Projects />
        <Certificates />
        <Skills />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* In-browser CV Viewer Modal */}
      <CVModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
        cvUrl="/cv/Khalid_Mohamed_CV.pdf"
      />
    </div>
  );
};

export default App;
