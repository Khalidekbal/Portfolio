import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Certificates } from './components/Certificates';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { ResumeViewer } from './components/ResumeViewer';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CVModal } from './components/CVModal';

export const App: React.FC = () => {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 relative selection:bg-cyan-500/20 selection:text-cyan-900">
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
        <ResumeViewer />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Optional CV Lightbox Modal */}
      <CVModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
        cvUrl="/cv/Khalid_Mohamed_CV.pdf"
      />
    </div>
  );
};

export default App;
